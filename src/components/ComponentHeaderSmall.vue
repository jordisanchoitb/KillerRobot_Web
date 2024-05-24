<template>
  <header>
    <div id="imagelogo">
      <div id="content">
        <h1 id="title">Hunting Simulacrum</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ComponentHeaderSmall',
  methods: {
    vermas() {
      document.getElementById('navcontent').scrollIntoView({ behavior: 'smooth' });      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
header {
  background: rgb(225,83,83);
  background: linear-gradient(180deg, rgba(225,83,83,1) 31%, rgba(240,169,169,1) 71%, rgba(255,255,255,0) 100%);
  width: 100%;
  height: 100%;
}

#imagelogo {
  background-image: url('../assets/logo.png');
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  width: 100%;
  height: 10rem;
}

#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#title {
  color: black;
  font-size: 3rem;
}

@media (max-width: 1024px) {
  #title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  #title {
    font-size: 2rem;
  }
}

@media (max-width: 425px) {
  #title {
    font-size: 1.5rem;
  }
}

@media (max-width: 375px) {
  #title {
    font-size: 1.2rem;
  }
}

</style>
