<template>
    <main>
        <section>
            <article>
                <img src="" alt="IMG1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut, iusto rerum blanditiis impedit nesciunt sint, officia facere nisi sequi voluptatem alias esse! Sunt iure neque tempore asperiores voluptatem quos.</p>
            </article>
            <article>
                <img src="" alt="IMG2">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iure praesentium ipsam ab omnis repellendus culpa! Ratione nisi, quae id sequi soluta, nesciunt sint ducimus eligendi aliquam modi inventore exercitationem.</p>
            </article>
        </section>
        <section class="secctionflex">
            <h2>Descargas</h2>
            <div class="divdescargas">
                <img src="../assets/logo.png" alt="logoGame">
                <p>Hunting simulacrum (demo)</p>
                <button>Descargar</button>
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
}
</script>

<style scoped>
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
    color: black;
    padding: 12px 16px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
    margin: 0.5rem;
    font-weight: bolder;
}

.divdescargas button:hover {
    background: rgb(255,184,0);
    background: linear-gradient(90deg, rgba(255,184,0,1) 0%, rgba(153,138,0,1) 100%);
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
</style>