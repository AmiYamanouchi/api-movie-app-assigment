//Parallel request with Promise.all
async function getPokemon(){
    const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

    const result = await Promise.all([poke1, poke2, poke3]);
    // console.log(result);
    printPokemon(result);
}

function printPokemon(result){
    for(let p of result){
        console.log(p.data.name);
    }
}

getPokemon();