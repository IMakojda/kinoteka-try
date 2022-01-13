const genre = {};
const moviesWithGenre=[]
export default
function getGenres() {

fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3284913a940180ec63ebc0044db949d5&language=en-US')
    .then(res => res.json())
    .then(({ genres }) => genres.forEach(el => {
        genre[el.id] = el.name;
    }
    
    )
    
)
    
fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5')
    .then(res => res.json())
    .then(({results})=>{for (const el of results) {
        // el.genre_ids = el.genre_ids.slice(0, 1);
        if(el.release_date){el.release_date = el.release_date.slice(0, 4);}
        // el.release_date = el.release_date.slice(0, 4);
        moviesWithGenre.push(el)
    }}) 
    // .then        
  
}

// moviesGwnre(moviesWithGenre)

// function moviesGwnre(movise) {
//     console.log(movise);
//    for (const el of movise) {
//        console.log(el.genre_ids);
//    }
// }

console.log(genre);
console.log(moviesWithGenre);
