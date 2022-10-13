const needle = require('needle')

const url = "https://rickandmortyapi.com/api/character"

const f = async() => {
try {
    let response = await needle('get' , url)
    const tipos = response.body.results
        tipos.forEach((element)=>{
            console.log(element.name)
            console.log('------------')
        })
} catch (error) {
    console.log(Error(error))
 }    
}

f()