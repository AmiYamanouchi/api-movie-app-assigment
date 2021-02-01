//First Option for error handling
async function getPlanets(){
    //Invalid URL
    const res = await axios.get('https://swapi.dev/api/plantsdfasfasf');
    console.log(res);
}

getPlanets().catch(err => {
    console.log('IN CATCH!!!');
    console.log(err);
})

//Another option......
async function getPlanets(){
    try{
        const res = await axios.get('https://swapi.dev/api/plantsdfasfasf');
        console.log(res);
    }catch(error){
        console.log('IN CATCH!!!');
        console.log(error);
        throw err;
    }
}

getPlanets();