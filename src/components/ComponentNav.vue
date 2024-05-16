<template>
    <nav>
        <div id="navcontent">
            <ul>
                <li><a href="#">Hunting Simulacrum</a></li>
                <li><a href="#">{{ pagename }}</a></li>
                <li><button>Iniciar session</button></li>
                <li><button>Registrarse</button></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'ComponentNav', 
  props: {
    pagename: String
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
    display: flex;
    align-items: center;
}

ul li:nth-of-type(2)>a {
    color: black;
}

ul li:nth-of-type(3) {
    flex-grow: 1;
}

ul li:nth-of-type(3)>button {
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

ul li:nth-of-type(3)>button:hover {
    background: rgb(255,184,0);
    background: linear-gradient(90deg, rgba(255,184,0,1) 0%, rgba(153,138,0,1) 100%);
}

ul li:nth-of-type(4) {
    flex-grow: 1;
}

ul li:nth-of-type(4)>button {
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

ul li:nth-of-type(4)>button:hover {
    background: rgb(255,184,0);
    background: linear-gradient(90deg, rgba(255,184,0,1) 0%, rgba(153,138,0,1) 100%);
}



</style>