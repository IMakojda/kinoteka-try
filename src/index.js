import MoviesApiService from './api/fetchApiService';
import articlesTps from './template/article.hbs';
import {renderPages} from "./js/pagination"
const newsApi = new MoviesApiService();
// import { swipeNextPage } from './js/swipePagination';
// swipeNextPage()
const refs = {
main:document.querySelector('.main')
}



onSearch();


export function onSearch (){

// const genre = {};
// fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3284913a940180ec63ebc0044db949d5&language=en-US')
//     .then(res => res.json())
//     .then(({ genres }) =>
//         genres.forEach(el => {
//         genre[el.id] = el.name;
//     }
//     ) 
// )

    newsApi.fetchMovie()
    .then(({results, total_pages}) => {for (const el of results) {
      if (el.release_date) { el.release_date = el.release_date.slice(0, 4); } else { el.release_date = el.first_air_date.slice(0, 4); }
    }
      newsApi.totalPageSet(total_pages);
      console.log(newsApi.totalPages);
    appendArticlesMarkup(results)
    renderPages();   
    })

}

export function appendArticlesMarkup(results){
    refs.main.innerHTML=""
    refs.main.insertAdjacentHTML('beforeend', articlesTps(results));
    

    // refs.main.insertAdjacentHTML('beforeend', pagin.paginMob())
    // pagin.renderPage(20,5)
    // document.querySelector(".listPages").addEventListener("click", pagin.pageNext());
    
   
}

document.addEventListener('touchstart', swipeNextPage, false);
document.addEventListener('touchmove', handleTouchMove, false);    
  




let xStart = null;
  
function swipeNextPage(ev) {
  //  ev.preventDefault();
    // window.addEventListener('touchmove', handleTouchMove, false);
    const firstTouch = ev.touches[0];
    xStart = firstTouch.clientX;
}


function handleTouchMove(e) {
  if (!xStart) { return false };
  //  e.preventDefault();
  let xEnd = e.touches[0].clientX;
  
  
  let xMoves = xStart - xEnd;
  if (xMoves>100){console.log("hello");}

}














// import { createPagination } from './js/pagination';
// createPagination();

// Подключение пагинации к мейну
// window.pagination.on();

// paginMob()
// function paginMob() {
//     return `<div class="paginationMob">
       
//        <ul class="listPages"></ul>
        
//     </div>`

// }


    
// function renderPage(totalPage, page) {
//         const ulTag=document.querySelector(".listPages")
//         let liTag = "";
//         let activeLi;
//         let beforePage = page - 1;
//     let afterPage = page + 1;
//     let curentPage = 1;
    
//         if (page > 1) {
//             liTag += `<li class="btn-prev"><span>Prev</span></li>`;
//         }
        

//         for (let pageLength = beforePage; pageLength <= afterPage; pageLength++){
//                 if(page == pageLength){activeLi="active"} else {activeLi=""}
//                 liTag +=`<li class="numb ${activeLi}"><span>${pageLength}</span></li>`
//         }

//         if (page < totalPage) {
//                 liTag += `<li class="btn-next"><span>Next</span></li>`;
//         }
    
//         ulTag.innerHTML = liTag;
        
    
// }

// function cliclBtnPrev() {

//     console.log("gggg");
// }