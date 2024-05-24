<template>
  <ComponentHeaderSmall />
  <ComponentForm formname="Registrarse" :error="errorpeticion" @forminfo="connectionApi" />
</template>

<script>
import ComponentHeaderSmall from '@/components/ComponentHeaderSmall.vue';
import ComponentForm from '@/components/ComponentForm.vue';

export default {
  name: 'ViewRegister',
  components: {
    ComponentHeaderSmall,
    ComponentForm,
  },
  data() {
    return {
      errorpeticion: '',
    };
  },
  mounted() {
    this.errorpeticion = '';
  },
  methods: {
    connectionApi(forminfo) {
      // https://localhost:7161/RegisterPlayer
      fetch('https://localhost:7161/RegisterPlayer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
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
            this.errorpeticion = "Error al registrar el usuario, usuario ya existente";
          }
        })
        .catch(() => {
          this.errorpeticion = 'Error de conexión';
        });
    },
  },
};
</script>

<style scoped></style>