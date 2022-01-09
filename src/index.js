import MoviesApiService from './api/fetchApiService';

const newsApi = new MoviesApiService();
// fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5')
//     .then(res => res.json())
//     .then(console.log)


// // https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5
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
    newsApi.fetchMovie()
        // .then(({ original_title, vote_average, vote_count,poster_path }) =>)

}

// function appendArticlesMarkup(articles){

// refs.gallery.insertAdjacentHTML('beforeend',addCardImage(articles));
// const lightbox = new SimpleLightbox('.gallery a');

// }

// function clearArticles (){
//     refs.gallery.innerHTML = '';
// }