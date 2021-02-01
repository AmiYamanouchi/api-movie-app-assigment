// async function getPlanets() {
//     const response = axios.get('https://swapi.dev/api/planets');
//     console.log(response);
//     return response;
// }

// getPlanets().then(res =>{ 
//     console.log(res)
// })

async function getPlanets() {
    // const promise1 = axios.get('https://swapi.dev/api/planets');
    // console.log(promise1);
    // const response = await promise1;
    // console.log(response);
    
    const response = await axios.get('https://swapi.dev/api/planets');
    console.log(response);

    return response.data

}
getPlanets().then(({count}) => {
    console.log('count: ', count)
    // console.log('results: ', results)
})

