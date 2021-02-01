//Sequential requests
async function getPokemonSequential(){
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');

    console.log(poke1);
    console.log(poke2);
    console.log(poke3);
}

//Parallel requests
async function getPokemonParallel(){
    const promise1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const promise2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const promise3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');

    console.log(promise1);

    const poke1 = await promise1;
    const poke2 = await promise2;
    const poke3 = await promise3;

    console.log(poke1)
    console.log(poke2)
    console.log(poke3)
}

// getPokemonSequential();
getPokemonParallel();

/* --------------------------------------------- */
// A better demo....
/* --------------------------------------------- */

function changeBodyColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

//In parallel
async function lightShowP(){
    const p1 = changeBodyColor('teal', 1000);
    const p2 = changeBodyColor('pink', 1000);
    const p3 = changeBodyColor('indigo', 1000);
    const p4 = changeBodyColor('yellow', 1000);

    await p1;
    await p2;
    await p3;
    await p4;
}
// lightShowP();

//In Sequence
async function lightShowS(){
    await changeBodyColor('teal', 1000);
    await changeBodyColor('pink', 1000);
    await changeBodyColor('indigo', 1000);
    await changeBodyColor('yellow', 1000);
}
lightShowS();