const axios = require('axios').default;
import Notiflix from 'notiflix';
export default class MoviesApiService{
    constructor(){
        this.searchQuery="";
        this.page = 1;
        this.totalPages = 10
        this.genreList = [];
    }
    genres() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3284913a940180ec63ebc0044db949d5')
            .then(response => response.json())
        .then(({genres})=> {genres.forEach(element => {
            this.genreList.push(element);
        });})
        
     }

    async fetchMovie() {
        
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5&page=${this.page}`;
        
        try {
        
        const response = await axios.get(url);
        const res=response.data;
        console.log(res);
        
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