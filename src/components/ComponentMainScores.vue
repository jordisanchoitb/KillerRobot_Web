<template>
    <main>
        <h2>Tabla de puntuaciones</h2>
        <form @submit="submitForm">
            <label for="filtername">Filtrar por nombre:</label>
            <input class="inputform" type="text" v-model="filtername" placeholder="Introduce un nombre" >
            <button class="inputform" type="submit">Filtrar</button>
        </form>
        <div class="tablediv">
            <table>
                <thead>
                    <tr>
                        <th>Posición</th>
                        <th>Alias/Name</th>
                        <th>Tiempo</th>
                        <th>Puntuación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(score, index) in scores" :key="score.playerName">
                        <td>{{ index+1 }}</td>
                        <td>{{ score.playerName }}</td>
                        <td>{{ score.completionTime }}</td>
                        <td>{{ score.score }}</td>
                    </tr>
                </tbody>
            </table>
            <p class="error" v-if="error">{{ error }}</p>
        </div>
        <div id="downloadgame">
            <button id="buttondownload" @click="downloadGame">Decargar juego</button>
        </div>
    </main>
</template>

<script>
export default {
    name: 'ComponentMainScores',
    props: {
        scores: Array,
        error : String
    },
    emits: ['filter'],
    data() {
        return {
            filtername: ''
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            this.$emit('filter', this.filtername);
        },
        downloadGame() {
            const fileUrl = `${window.location.origin}/favicon.ico`;

            const link = document.createElement('a');
            link.href = fileUrl;
            link.setAttribute('download', 'GameImage');
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        },
    }
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#downloadgame {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

#buttondownload {
    background-color: #FFB800;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    width: 157px;
    height: 52px;
}

button:hover {
    background: rgb(255,184,0);
    background: linear-gradient(90deg, rgba(255,184,0,1) 0%, rgba(153,138,0,1) 100%);
}

h2 {
    font-size: 64px;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 1rem;
}

form label {
    font-size: 32px;
    margin-right: 1rem;
}

form input {
    font-size: 20px;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
    color: #828282;
    width: 327px;
    height: 44px;
    margin-right: 10px;
}

form button {
    background-color: #FFB800;
    border: none;
    font-size: 20px;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    width: 120px;
    height: 62px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th {
    background-color: #FFB800;
    color: white;
    font-weight: 600;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #c2c2c2;
}

.tablediv {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.error {
    width: 80%;
    padding: 0.3em;
    font-size: 100%;
    color: white;
    background-color: #900;
    border-radius: 0 0 5px 5px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    margin-top: 4rem;
    text-align: center;
    font-weight: bolder;
}
</style>