<template>
    <nav>
        <div id="navcontent">
            <ul>
                <li v-if="this.$route.path == '/'">
                    <a href="#">Hunting Simulacrum</a>
                </li>
                <li v-else>
                    <router-link :to="'/'">Hunting Simulacrum</router-link>
                </li>
                <li><router-link :to="computedRoutePage">{{ pagename }}</router-link></li>
                <div v-if="getuser">
                    <li><button @click="changepassword">Cambiar contraseña</button></li>
                    <li><button @click="logout">Cerrar session</button></li>
                </div>
                <div v-else>
                    <li><button @click="login">Iniciar session</button></li>
                    <li><button @click="register">Registrarse</button></li>
                </div>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'ComponentNav',
    props: {
        pagename: String
    },
    methods: {
        login() {
            this.$router.push('/login');
        },
        register() {
            this.$router.push('/register');
        },
        changepassword() {
            this.$router.push('/changepassword');
        },
        logout() {
            localStorage.removeItem('user');
            window.location.reload();
        }
    },
    computed: {
        computedRoutePage() {
            if (this.$route.path == '/') {
                if (localStorage.getItem('user')) {
                    return '/scoresweb';
                } else {
                    return '/login';
                }
            } else {
                return '/'
            }
        },
        getuser() {
            return localStorage.getItem('user');
        }
    }
}

</script>

<style scoped>
nav {
    background-color: #ffffff;
    width: 100%;
    height: 164px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
}

#navcontent {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 164px;
    width: 100%;
}

ul {
    display: flex;
    list-style-type: none;
    text-align: center;
    justify-content: space-between;
    padding: 0px;
    width: 100%;
}

ul li:nth-of-type(1) {
    flex-grow: 6;
    text-align: left;
    padding-left: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}

ul li:nth-of-type(1)>a {
    color: black;
    text-decoration: none;
}

ul li:nth-of-type(2) {
    flex-grow: 1;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
}

ul li:nth-of-type(2)>a {
    color: black;
}

ul div {
    flex-grow: 2;
    display: flex;
}

ul div li>button {
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

ul div li>button:hover {
    background: rgb(255, 184, 0);
    background: linear-gradient(90deg, rgba(255, 184, 0, 1) 0%, rgba(153, 138, 0, 1) 100%);
}

/* Responsive Styles */
@media (max-width: 1024px) {
    ul {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    ul li:nth-of-type(1) {
        flex-grow: 1;
        padding-left: 0;
        margin-bottom: 10px;
    }

    ul li:nth-of-type(2) {
        flex-grow: 1;
        margin-bottom: 10px;
    }

    ul div {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
    }

    ul div li>button {
        margin: 0 0.5rem;
    }
}

@media (max-width: 380px) {
    ul li:nth-of-type(1) {
        font-size: 1.2rem;
    }

    ul div li>button {
        width: 120px;
        height: 42px;
    }
}
</style>