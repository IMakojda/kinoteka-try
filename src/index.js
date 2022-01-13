import MoviesApiService from './api/fetchApiService';
import articlesTps from './template/article.hbs';
import getGenres from "./api/fetchGenre";
import changeGenre from "./api/fetchGenre"
const newsApi = new MoviesApiService();

const refs = {
    main:document.querySelector('.main')
}

getGenres();
  

onSearch ()
function onSearch (){
    // e.preventDefault();
    // clearArticles ();
   
    // newsApi.query=e.currentTarget.searchQuery.value;
    // if(newsApi.query===''){
    //  return errorShow()
    // }
    // newsApi.resetPage();
    // newsApi.fetchImage().then(({hits,totalHits })=>{
    //   if(totalHits === 0){return errorShow()}
    //   appendArticlesMarkup(hits)
    //   showTotalImage(totalHits)
    //   lazyScroll(0)
    //   refs.loadMore.style.display="flex"
    // });

const genre = {};
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3284913a940180ec63ebc0044db949d5&language=en-US')
    .then(res => res.json())
    .then(({ genres }) =>
        genres.forEach(el => {
        genre[el.id] = el.name;
    }
    ) 
)

    newsApi.fetchMovie()
        .then(({results}) => {for (const el of results) {
            // el.genre_ids = el.genre_ids.slice(0, 1);
            if (el.release_date) { el.release_date = el.release_date.slice(0, 4); } else { el.release_date = el.first_air_date.slice(0, 4); }
            // results[genre_ids].forEach(element => {
            //      element = genre.element;    
            //  });
            for (let i = 0; i < el.genre_ids.length; i++) {
                el.genre_ids[i] = genre[el.genre_ids[i]];
                
            }
        }
        console.log(results);
            appendArticlesMarkup(results)
        })

}

function appendArticlesMarkup(results){

refs.main.insertAdjacentHTML('beforeend',articlesTps(results));


}
// console.log(genre);
// function clearArticles (){
//     refs.gallery.innerHTML = '';
// }