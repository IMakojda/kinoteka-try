const axios = require('axios').default;
import Notiflix from 'notiflix';
export default class MoviesApiService{
    constructor(){
        this.searchQuery="";
        this.page=1;
    }
     
    async fetchMovie() {
        
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5&page=${this.page}`;
        
        try {
        
        const response = await axios.get(url);
        const res=response.data;
        console.log(res);
        // this.pageNext ();
            return res;
        }
        
        catch (error) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        document.querySelector('.load-more').style.display="none";    
        
        }
    }


    //  fetchMovie() {
    //     const urlHomePage = 'https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5';
    //     try {
        
    //         return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5')
    //             .then(res => res.json())
    //             .then(res => res);
            
        
        
    //     }
        
    //     catch (error) {
    //     Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
           
        
    //     }
    // }

    get popularMovie() {
        
    }
    get pages() {
       return this.page  
    }
    
    get queryMocie(){
        return this.searchQuery;
    }

    set query(nyji){
        this.searchQuery=newQuery
    }

    pageSet(a){
        this.page = a;
    }

    resetPage(){
        this.page = 1;
    }
}