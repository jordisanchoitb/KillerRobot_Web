<template>
  <ComponentHeader/>
  <ComponentNav pagename="Tabla de puntuaciones"/>
  <ComponentMain/>
</template>

<script>
import ComponentHeader from './components/ComponentHeader.vue';
import ComponentNav from './components/ComponentNav.vue';
import ComponentMain from './components/ComponentMain.vue';

export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentNav,
    ComponentMain,
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
