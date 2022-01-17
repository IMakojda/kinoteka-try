
export default class paginations{
    constructor(){
        this.searchQuery="";
        this.page = 1;
        this.ulTag = document.querySelector(".listPages");
        this.totalPage = 100;
    }

    paginMob() {
    return `<div class="paginationMob">
       <button class="prev">Prev</button>
       <ul class="listPages">

        <li class="numb active">${this.page}</li>
        <li class="numb">${this.page+1}</li>
        <li class="numb">${this.page+2}</li>
       
       </ul>
        <button class="next" id="nextt">Next</button>
    </div>`
    }

    pageNext (){
    this.page += 1;
        this.paginMob()
        console.log("Hello");

    }

    pagePrev() {
       this.page += 1; 
    }
    resetPage(){
        this.page = 1;
    }


    
}