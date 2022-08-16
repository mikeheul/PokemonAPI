const pokemon_container = document.querySelector('.pokemon_container')
const pokemon_count = 150

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = () => {
    for(let i = 1; i <= pokemon_count; i++) {
        getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
    console.log(data)
}

const createPokemonCard = (pokemon) => { 

    const card = document.createElement('div')
    card.classList.add('card')

    const poke_types = pokemon.types.map(type => type.type.name)
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]
    const id = pokemon.id.toString().padStart(3, '0')
    
    card.style.backgroundColor = color
    card.innerHTML = `<div class='card-inner'>
                        <span> #${id} </span> 
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
                        <p> ${name} </p>
                        <span>Type : ${type} </span>
                     </div>`
    pokemon_container.appendChild(card)
}


fetchPokemons()