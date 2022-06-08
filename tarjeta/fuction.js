const input = document.querySelector("#input");
const button = document.querySelector("#boton");
const pokemoConteiner = document.querySelector(".poke");

button.addEventListener('click',(e) => {
    e.preventDefault();
    traerpokemon(input.value)

})

function traerpokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data);
        });
}


function crearPokemon(pokemon){
    const img = document.getElementById('imag');
    img.src = pokemon.sprites.front_default;

    const h3 = document.getElementById('nom');
    h3.textContent = pokemon.name;  

    // const div = document.createElement('div')
    // div.appendChild(img);
    // div.appendChild(h3);

    // pokemoConteiner.appendChild(div);
}

