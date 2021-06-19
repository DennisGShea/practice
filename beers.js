console.log('this is beers.js')

document.getElementById('beers')

fetch('https://api.sampleapis.com/beers/ale')
  .then(response => response.json())
  .then(cleanData => {

      console.log(cleanData) // bringing all the array of beers
      cleanData.map(beer => {  
          console.log(beer)  // is bringing each beer
        document.write(`beer Name ${beer.name} </h3> <span> ${beer.price} </span
        `)
        
        })
})
  .catch(error => console.log(error))

  //flexbox froggy


