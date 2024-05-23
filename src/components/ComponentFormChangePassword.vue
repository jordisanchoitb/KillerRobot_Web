<template>
    <div id="returnhome">
        <button @click="returnHome">Volver al inicio</button>
    </div>
    <main>
        <h1>{{ this.formname }}</h1>
        <h3>{{ this.currentUser }}</h3>
        <form @submit="submitForm">
            <label for="current-password">Antigua contraseña:</label>
            <input type="password" id="current-password" v-model="currentPassword" placeholder="Antigua contraseña" required>
            <label for="new-password">Nueva contraseña:</label>
            <input type="password" id="new-password" v-model="newPassword" placeholder="Nueva contraseña" required>
            <label for="confirm-password">Confirmar contraseña:</label>
            <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Confirmar contraseña" required>
            <button type="submit">{{ this.formname }}</button>
        </form>
        <p v-if="this.error" class="error">{{ this.error }}</p>
    </main>
</template>

<script>
export default {
    name: 'ComponentFormChangePassword',
    props: {
        formname: String,
        error: String,
    },
    emits: ['forminfo'],
    data() {
        return {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            currentUser: 'El usuario actual es: ',
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            this.$emit('forminfo', {
                currentPassword: this.currentPassword,
                newPassword: this.newPassword,
                confirmPassword: this.confirmPassword,
                player: JSON.parse(localStorage.getItem('user')),
            });
        },
        returnHome() {
            this.$router.push('/');
        },
    },
    mounted() {
        if (localStorage.getItem('user')) {
            this.currentUser = `El usuario actual es: ${JSON.parse(localStorage.getItem('user')).username}`;
        } else {
            this.currentUser = 'No hay usuario logeado';
        }
    },
};
</script>

<style scoped>
h1 {
    margin-top: 1rem;
    margin-bottom: auto;
    font-size: 2.5rem;
    font-weight: bold;
}

#returnhome {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

h3 {
    margin-top: 1rem;
    margin-bottom: 5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 20rem;
    scale: 1.6;
}

label {
    margin: 0.5rem 0;
    font-weight: 600;
}

button {
    background-color: #FFB800;
    border: none;
    color: white;
    padding: 12px 8px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    margin: 1rem;
    font-weight: bolder;
}

button:hover {
    background: rgb(255, 184, 0);
    background: linear-gradient(90deg, rgba(255, 184, 0, 1) 0%, rgba(153, 138, 0, 1) 100%);
}

input:invalid {
    border-color: #900;
    background-color: #fdd;
}

input:focus:invalid {
    outline: none;
}

.error {
    width: 80%;
    padding: 0.3em;
    font-size: 90%;
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