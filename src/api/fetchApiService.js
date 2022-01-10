import Notiflix from 'notiflix';
export default class MoviesApiService{
    constructor(){
        this.searchQuery="";
        this.page=1;
    }

     fetchMovie() {
        const urlHomePage = 'https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5';
        try {
        
            return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5')
                .then(res => res.json())
                .then(res => res);
            
        // .then(console.log);
        //     const movies = response.json();
        //     const res = movies.results;
        // console.log(res);
        
        // return res;
        
        }
        
        catch (error) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
           
        
        }
    }

    get popularMovie() {
        
    }

    get queryMocie(){
        return this.searchQuery;
    }

    set query(newQuery){
        this.searchQuery=newQuery
    }

    pageNext (){
        this.page += 1;
    }

    resetPage(){
        this.page = 1;
    }
}