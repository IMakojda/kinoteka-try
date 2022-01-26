import MoviesApiService from './api/fetchApiService';
import articlesTps from './template/article.hbs';
import {renderPages} from "./js/pagination"
const newsApi = new MoviesApiService();

const refs = {
main:document.querySelector('.main')
}

onSearch();

export function onSearch() {
  newsApi.genres()
  
  console.log(newsApi.genreList);
  newsApi.fetchMovie()
    // .then(console.log)
    // .then(({genre_ids}) => {
    //   console.log(genre_ids);
    //   genre_ids.forEach(el => {
    //     el = newsApi.genreList.find(option => option.id === el)
    //   })
    // })


    .then(({results, total_pages}) => {for (const el of results) {
      if (el.release_date) { el.release_date = el.release_date.slice(0, 4); } else { el.release_date = el.first_air_date.slice(0, 4); }
      if (!el.title) { el.title = el.original_name }
      if (el.genre_ids) {
        // console.log(el.genre_ids);
        let a = el.genre_ids;
        a.map(d => {
          console.log(d);
          let t = newsApi.genreList
          
           console.log(t);
        })
          
        // a.forEach(item => {
        //   console.log(item);
        //   planets.map(planet => planet.toUpperCase())
        //   item = newsApi.genreList.find(option => option.id === "item")
        //   // console.log(item);
        // })
      }
      
    }
      console.log(results);
      
    newsApi.totalPageSet(total_pages);
    console.log(newsApi.totalPages);
    appendArticlesMarkup(results)
    renderPages();   
    })

}

export function appendArticlesMarkup(results){
    refs.main.innerHTML=""
    refs.main.insertAdjacentHTML('beforeend', articlesTps(results));
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