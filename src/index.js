import MoviesApiService from './api/fetchApiService';
import articlesTps from './template/article.hbs';
const newsApi = new MoviesApiService();
const refs = {
    main:document.querySelector('.main')
}
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
        .then(({ results }) =>{
            appendArticlesMarkup(results)
        })

}

function appendArticlesMarkup(results){

refs.main.insertAdjacentHTML('beforeend',articlesTps(results));


}

// function clearArticles (){
//     refs.gallery.innerHTML = '';
// }