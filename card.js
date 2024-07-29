let IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`

const moviecontainer = document.getElementById("movie");


let movieCardHtml = '' ;

for (let i=0; i< movieArray.length; i++){
    
    movieCardHtml += `
  
<div class="col-md-4" >
<div class="card">
    <figure class="moviecard">
        <img src="https://image.tmdb.org/t/p/w500/${movieArray[i].poster_path}"
            alt="${movieArray[i].title}" 
            title="${movieArray[i].title}">
            <figcaption>
                <div class="movietitle">
                    <div class="row">
                        <div class="col-md-10">
                            <h6 class="mb-0">
                            ${movieArray[i].title}
                            </h6>
                        </div>
                        <div class="col-md-2 align-self-center">
                            <span class="${setRatingBg(movieArray[i].vote_average)} p-2 rating">
                            ${(movieArray[i].vote_average)}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="movieOverview p-3">
                    <h2 class="mb-0">
                        ${movieArray[i].title}
                    </h2>
                    <p>
                         ${movieArray[i].overview}

                    </p>
                </div>
            </figcaption>
    </figure>
</div>
</div>
    `;
}

moviecontainer.innerHTML= movieCardHtml;


function setRatingBg(rating){
    if(rating > 7.5){
        return 'bg-success'
    } else if(rating <= 7.5 && rating > 5){
        return 'bg-warning'
    }else{
        return 'bg-danger'
    }
    
}