//Example fetch using pokemonapi.co
document.getElementById('wow').addEventListener('click', getFetch)
document.getElementById('random').addEventListener('click', getFetchRandom)

function getFetch(){
  const movie = document.getElementById('movie').value
  const url = `https://owen-wilson-wow-api.onrender.com/wows/random?movie=${movie}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('poster').src = data[0].poster
        document.getElementById('video').src = data[0].video["720p"]
        document.getElementById('titleSpan').innerHTML = data[0].movie
        document.getElementById('titleSpan').innerHTML = data[0].movie
        document.getElementById('characterSpan').innerHTML = data[0].character
        document.getElementById('lineSpan').innerHTML = `"${data[0].full_line}"`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getFetchRandom(){
  const movie = document.getElementById('movie').value
  const url = `https://owen-wilson-wow-api.onrender.com/wows/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('poster').src = data[0].poster
        document.getElementById('video').src = data[0].video["720p"]
        document.getElementById('titleSpan').innerHTML = data[0].movie
        document.getElementById('titleSpan').innerHTML = data[0].movie
        document.getElementById('characterSpan').innerHTML = data[0].character
        document.getElementById('lineSpan').innerHTML = `"${data[0].full_line}"`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

