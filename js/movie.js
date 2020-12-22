$(document).ready(function () {
    getMovie();
})

function getMovie()
{
    let movieId = sessionStorage.getItem('movieId');

    axios.get('http://www.omdbapi.com?apikey=2baf24d1&i='+movieId)
        .then((response)=>{
            console.log(response);
            let movie = response.data;
            let output = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${movie.Poster}" class="thumbnail">
                </div> 
                    <h2>${movie.Title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                    </ul>
                <div class="col-md-8">

                </div> 
            </div>   

            <div class="row">
                <div class="card">
                    <h3>Plot</h3>
                    ${movie.Plot}
                    <hr>
                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-info">Go Back To Search</a>
                </div>
            </div>
            `;
            $('#movie').html(output);
        })
        .catch((err)=>{
            console.log(err);
        });
}