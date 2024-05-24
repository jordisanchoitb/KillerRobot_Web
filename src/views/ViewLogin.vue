<template>
  <ComponentHeaderSmall />
  <ComponentForm formname="Iniciar sesión" :error="errorpeticion" @forminfo="connectionApi" />
</template>

<script>
import ComponentHeaderSmall from '@/components/ComponentHeaderSmall.vue';
import ComponentForm from '@/components/ComponentForm.vue';

export default {
  name: 'ViewLogin',
  components: {
    ComponentHeaderSmall,
    ComponentForm,
  },
  data() {
    return {
      errorpeticion: '',
    };
  },
  methods: {
    connectionApi(forminfo) {
      //https://localhost:7161/CheckLogin
      fetch('https://localhost:7161/CheckLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: forminfo.username,
          password: forminfo.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.errorpeticion = '';
          if (data.isSuccess) {
            localStorage.setItem('user', JSON.stringify(forminfo));
            this.$router.push("/");
          } else {
            this.errorpeticion = "Login incorrecto, comprueba el usuario y la contraseña";
          }
        })
        .catch(() => {
          this.errorpeticion = 'Error de conexión';
        });
    },

  }
}
</script>

<style scoped></style>