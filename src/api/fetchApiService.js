const axios = require('axios').default;
import Notiflix from 'notiflix';
const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "api_key=3284913a940180ec63ebc0044db949d5";

export default class MoviesApiService{
    constructor(){
        this.searchQuery="";
        this.page = 1;
        this.totalPages = 0
        this.genreList = [];
        this.language = en;
    }

    async fetchMovie() {
        const url = `${baseUrl}trending/all/day?${apiKey}&page=${this.page}&language=${this.language}`;
        
        try {
        const response = await axios.get(url);
        const res=response.data;
        return res;
        }
        
        catch (error) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        document.querySelector('.load-more').style.display="none";    
        }
    }

    get popularMovie() {
        
    }
    
    get pages() {
       return this.page  
    }

    totalPageSet(a) {
        this.totalPages=a
    }
   
    pageSet(a){
        this.page = a;
    }

    resetPage(){
        this.page = 1;
    }
}