document.getElementById('searchText').addEventListener('input',function(event)
{   let output = '';
    document.getElementById('loading-box').classList.add("active");
    let searchText = event.target.value;
    axios.get('http://www.omdbapi.com?apikey=2baf24d1&s='+searchText+'&t='+searchText)
        .then((response)=>{
            var responseResult=response.data.Response;
            if(responseResult=="False"){
                setTimeout(function(){ 
                    document.getElementById('loading-box').classList.remove("active"); 
                }, 3000);
            }
            else{
            let movies = response.data.Search;
            
            $.each(movies,(index,movie)=>{
                output += `
                <div class="col-md-3">
                    <div class="card text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                     </div>
                </div>        
                `;
            });
                }
            $('#movies').html(output)
        })
        .catch((err)=>{
            console.log(err);
        });
});

function movieSelected(id)
{
    sessionStorage.setItem('movieId',id);
    window.location = 'movie.html';
}

