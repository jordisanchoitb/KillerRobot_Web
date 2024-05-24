<template>
  <header>
    <div id="imagelogo">
      <div id="content">
        <h1 id="title">Hunting Simulacrum</h1>
        <div id="divbutton">
          <button @click="vermas" id="buttonvermas">Ver más</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ComponentHeader',
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
  height: 66.1rem;
}

#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#title {
  margin-top: 13.5rem;
  color: black;
  font-size: 3rem;
}

#divbutton {
  margin-top: 6rem;
}

#buttonvermas {
  background-color: #FFB800;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  margin: 4px 2px;
  cursor: pointer;
  width: 182px;
  height: 78px;
  border-radius: 12px;
}

#buttonvermas:hover {
  background: rgb(255,184,0);
  background: linear-gradient(90deg, rgba(255,184,0,1) 0%, rgba(153,138,0,1) 100%);
}
@media (max-width: 768px) {
  #title {
    font-size: 2.5rem;
    margin-top: 11rem;
  }

  #divbutton {
    margin-top: 5rem;
  }

  #buttonvermas {
    width: 140px;
    height: 60px;
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  #title {
    font-size: 2.5rem;
    margin-top: 11rem;
    text-align: center;
    overflow: hidden;
  }

  #divbutton {
    margin-top: 5rem;
  }

  #buttonvermas {
    width: 140px;
    height: 60px;
    font-size: 20px;
  }
}


</style>
