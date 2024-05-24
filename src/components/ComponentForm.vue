<template>
    <div id="returnhome">
        <button @click="returnHome">Volver al inicio</button>
    </div>
    <main>
        <h1>{{ this.formname }}</h1>
        <form @submit="submitForm">
            <label for="username">Nombre de usuario</label>
            <input type="text" v-model="username" placeholder="Nombre de usuario" required>
            <label for="password">Contraseña</label>
            <input type="password" v-model="password" placeholder="Contraseña" required>
            <button type="submit">{{ this.formname }}</button>
        </form>
        <span v-if="error" class="error">{{ error }}</span>
    </main>
</template>

<script>
export default {
    name: 'ComponentForm',
    props: {
        formname: String,
        error: String,
    },
    emits: ['forminfo'],
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();

            this.$emit('forminfo', {
                username: this.username,
                password: this.password,
            });
        },
        returnHome() {
            this.$router.push('/');
        },
    },
};
</script>

<style scoped>
h1 {
    margin-top: 1rem;
    margin-bottom: 5rem;
    font-size: 2.5rem;
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

#returnhome {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 0;
}

@media (max-width: 1024px) {
    h1 {
        font-size: 2rem;
        text-align: center;
        overflow: hidden;
    }

    h3 {
        font-size: 1.2rem;
    }

    form label {
        font-size: 1rem;
    }

    form input {
        font-size: 0.8rem;
        width: auto;
        height: auto;
    }

    form button {
        font-size: 1rem;
        padding: 12px 8px;
    }
}

</style>