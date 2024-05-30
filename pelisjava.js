const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
  };

function getPelis() {
    const respuesta = fetch (`https://api.themoviedb.org/3/movie/top_rated`, options);

    respuesta
    .then(response => response.json())
    .then(response => renderPelis(response))
    .catch(error=> dibujarError(error)) 
}

function renderPelis(response) {
    const peliculas = response.results;
    let rows='';
    for(let peli of peliculas) {
        
        rows += `
        <tr>
            
            <td>${peli.title}</td>
            <td>${peli.release_date}</td>
            <td>${peli.vote_average}</td>
            <td> 
              <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${peli.poster_path}" alt="" class="img-fluid"> 
              
            </td>
            
        </tr>
        `
    }
    //document.getElementById('peliculas').innerHTML = rows;
    document.querySelector('#peliculas').innerHTML = rows;
}