<template>
    <ComponentHeaderSmall />
    <ComponentFormChangePassword formname="Cambiar contraseña" :error="errorpeticion" @forminfo="changePassword" />
</template>

<script>
import ComponentHeaderSmall from '@/components/ComponentHeaderSmall.vue';
import ComponentFormChangePassword from '@/components/ComponentFormChangePassword.vue';

export default {
    data() {
        return {
            errorpeticion: '',
        };
    },
    components: {
        ComponentHeaderSmall,
        ComponentFormChangePassword,
    },
    methods: {
        changePassword(forminfo) {
            if (forminfo.newPassword !== forminfo.confirmPassword) {
                this.errorpeticion = 'Las contraseñas no coinciden';
                return;
            }
            fetch('https://localhost:7161/ChangePassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playerCheck: { name: forminfo.player.username, password: forminfo.currentPassword },
                    newPassword: forminfo.newPassword,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.isSuccess) {
                        alert('Contraseña cambiada con éxito');
                        let user = JSON.parse(localStorage.getItem('user'));
                        user.password = forminfo.newPassword;
                        localStorage.setItem('user', JSON.stringify(user));
                        this.$router.push('/');
                    } else {
                        this.errorpeticion = 'Error al cambiar la contraseña, compruebe que la contraseña actual es correcta';
                    }
                })
                .catch(() => {
                    this.error = 'Error de conexión';
                });
        },
    },
};
</script>

<style scoped></style>
