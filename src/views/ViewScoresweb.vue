<template>
  <ComponentHeaderSmall />
  <ComponentNav pagename="Home" />
  <ComponentMainScores :scores="scores" @filter="getFilterName" :error="errorpeticion" />
</template>

<script>
import ComponentHeaderSmall from '@/components/ComponentHeaderSmall.vue'
import ComponentNav from '@/components/ComponentNav.vue'
import ComponentMainScores from '@/components/ComponentMainScores.vue'

export default {
  name: 'ViewScoresweb',
  components: {
    ComponentHeaderSmall,
    ComponentNav,
    ComponentMainScores,
  },
  data() {
    return {
      scores: [],
      errorpeticion: '',
      filtername: '',
    };
  },
  methods: {
    getScores(filtername) {
      fetch('https://localhost:7161/GetScore', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          let ordenateScoresData = data.data;

          if (filtername) {
            ordenateScoresData = ordenateScoresData.filter((score) => {
              return score.playerName === filtername;
            });
          }

          if (ordenateScoresData.length === 0) {
            this.errorpeticion = 'No se han encontrado resultados';
          } else {
            this.errorpeticion = '';
          }

          // Necesito ordenar por puntuación i en caso de que haya empate con la puntuacion, ordenara por tiempo
          ordenateScoresData.sort((a, b) => {
            // Primero comparo por puntuación
            if (a.score > b.score) {
              /* Si la puntuación de a es mayor que 
             la de b, a va antes que b */
              return -1;
            } else if (a.score < b.score) {
              /* Si la puntuación de a es menor que 
             la de b, a va después que b */
              return 1;
            } else {
              // En caso de empate, comparo por tiempo
              if (a.completionTime < b.completionTime) {
                /* Si el tiempo de a es menor que 
                el de b, a va antes que b */
                return -1;
              } else if (a.completionTime > b.completionTime) {
                /* Si el tiempo de a es mayor que
                el de b, a va después que b */
                return 1;
              } else {
                /* Si la puntuación y el tiempo son iguales, 
                no se cambian de posición */
                return 0;
              }
            }
          });

          this.scores = ordenateScoresData;
        })
        .catch(() => {
          this.errorpeticion = 'Error al conectar con el servidor';
        });
    },
    getFilterName(filtername) {
      this.filtername = filtername;
      this.getScores(this.filtername);
    },
  },
  mounted() {
    const ms = 600000; // 600000 ms = 10 minutos
    this.getScores();
    setInterval(() => {
      this.getScores(this.filtername);
    }, ms);
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
