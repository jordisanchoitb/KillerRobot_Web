<template>
    <main>
        <section id="secctionarticles">
            <article>
                <img id="imgRobot" src="..\assets\modelr13k_front-pixilart.png" alt="img_Robot">
                <p>
                    Hunting Simulacrum es un shooter map, top-down (cámara), arcade donde el personaje irá pasando de
                    sala en sala hasta llegar a la del boss donde tendrá que enfrentarse a él.
                    El personaje tendrá un inventario de dos armas, puede escoger entre armas de distancia o de melee.
                    Las de melee tienen la capacidad de eliminar proyectiles enemigos a la
                    vez de provocar daño a los enemigos de corta distancia. El personaje apunta/defiende dependiendo de
                    la orientación del personaje, independientemente de la posición del
                    ratón.
                </p>
            </article>
            <article>
                <img id="imgLvl1" src="..\assets\Nivel1Sala1LDD.png" alt="img_lvl1-1">
                <p>
                    Los enemigos, habrá varios enemigos con distintas mecànicas y atributos, entre ellos hay un
                    enemigo que irá a mele (arma a corta distancia)
                    otro enemigo que irá a mele pero con unos atributos mejores, habrá un enemigo que ataque a distancia
                    y por último un boss que se ubicará en la sala final del nivel.
                    A lo largo del camino habrán obstáculos que dificulten el juego al jugador en las distintas salas.
                </p>
            </article>
        </section>
        <section class="secctionflex">
            <h2>Descargas</h2>
            <div class="divdescargas">
                <img src="../assets/logo.png" alt="logoGame">
                <p>Hunting simulacrum (demo)</p>
                <button @click="downloadGame">Descargar</button>
            </div>
        </section>
        <section class="secctionflex">
            <h2>Créditos</h2>
            <div class="divcreditos">
                <p>Juego hecho por:</p>
                <ul>
                    <li>Qihang Li</li>
                    <li>Marcos Gorriaran</li>
                    <li>Jordi Sancho</li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'ComponentMain',
    methods: {
        downloadGame() {
            const fileUrl = `${window.location.origin}/favicon.ico`;

            const link = document.createElement('a');
            link.href = fileUrl;
            link.setAttribute('download', 'GameImage');
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        },
    },      
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
}

#imgRobot {
    height: 400px;
}

#imgLvl1 {
    height: 400px;
    width: 400px;
}

#secctionarticles {
    width: 60%;
}

article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0.5rem;
}

article img {
    width: 630px;
    height: auto;
}

article:nth-of-type(2) img {
    order: 1;
}

.divdescargas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.divdescargas img {
    width: 32px;
    margin-right: 8px;
    height: auto;
}

.divdescargas p {
    font-weight: 600;
}

.divdescargas button {
    background-color: #FFB800;
    border: none;
    color: white;
    padding: 12px 16px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    margin: 0.5rem;
    font-weight: bolder;
}

.divdescargas button:hover {
    background: rgb(255, 184, 0);
    background: linear-gradient(90deg, rgba(255, 184, 0, 1) 0%, rgba(153, 138, 0, 1) 100%);
}

.secctionflex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.divcreditos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
}

.divcreditos>p {
    font-weight: 600;
    margin: 0.5rem;
}

.divcreditos>ul {
    padding: 0;
    margin: 0;
}

.divcreditos>ul>li {
    list-style-type: none;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    #secctionarticles {
        width: 80%;
    }

    #imgLvl1
    {
        width: 400px;
    }

    article img {
        width: 500px;
    }
}

@media (max-width: 768px) {
    #secctionarticles {
        width: 100%;
    }

    #imgRobot {
        height: auto;
        width: 100%;
    }

    article {
        flex-direction: column;
    }

    article img {
        width: 100%;
        height: auto;
    }

    article:nth-of-type(2) img {
        order: 0;
    }

    .divdescargas img {
        width: 24px;
    }

    .divdescargas button {
        width: auto;
        padding: 10px 12px;
        font-size: 14px;
    }

    .divcreditos p, .divcreditos ul li {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    #imgLvl1 {
        height: auto;
        width: 100%;
    }

    #imgRobot {
        height: auto;
        width: 100%;
    }

    .divdescargas button {
        padding: 8px 10px;
        font-size: 12px;
    }

    .divcreditos p, .divcreditos ul li {
        font-size: 12px;
    }
}
</style>