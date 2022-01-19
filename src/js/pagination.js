import MoviesApiService from '../api/fetchApiService';
import { appendArticlesMarkup } from '../index';
const nextApi = new MoviesApiService();

const pageNumbers = (total, max, current) => {
  const half = Math.floor(max / 2);
  let to = max;
  
  if(current + half >= total) {
    to = total;
  } else if(current > half) {
    to = current + half ;
  }
  
  let from = to - max;

  return Array.from({length: max}, (_, i) => (i + 1) + from);
}

function PaginationButton(totalPages, maxPagesVisible = 10, nameDiv, currentPage = nextApi.pages) {
  let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
  let currentPageBtn = null;
  const buttons = new Map();
  const disabled = {
    start: () => pages[0] === 1,
    prev: () => currentPage === 1,
    end: () => pages.slice(-1)[0] === totalPages,
    next: () => currentPage === totalPages
  }
  const frag = document.createDocumentFragment();
  const paginationButtonContainer = document.createElement('div');
  paginationButtonContainer.className = `pagination-buttons${nameDiv}`;
  
  const createAndSetupButton = (label = '', cls = '', disabled = false, handleClick) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = label;
    buttonElement.className = `page-btn ${cls}`;
    buttonElement.disabled = disabled;
    buttonElement.addEventListener('click', e => {
      handleClick(e);
      this.update();
      paginationButtonContainer.value = currentPage;
      paginationButtonContainer.dispatchEvent(new CustomEvent('change', {detail: {currentPageBtn}}));
    });
    
    return buttonElement;
  }
  
  const onPageButtonClick = e => currentPage = Number(e.currentTarget.textContent);
  
  const onPageButtonUpdate = index => (btn) => {
    btn.textContent = pages[index];
    
    if(pages[index] === currentPage) {
      currentPageBtn.classList.remove('active');
      btn.classList.add('active');
      currentPageBtn = btn;
      currentPageBtn.focus();
    }
  };
  
  buttons.set(
    createAndSetupButton('<<<', 'prev-page', disabled.prev(), () => currentPage -= 1),
    (btn) => btn.disabled = disabled.prev()
  )
  
  pages.map((pageNumber, index) => {
    const isCurrentPage = currentPage === pageNumber;
    const button = createAndSetupButton(
      pageNumber, isCurrentPage ? 'active' : '', false, onPageButtonClick
    );
    
    if(isCurrentPage) {
      currentPageBtn = button;
    }
    
    buttons.set(button, onPageButtonUpdate(index));
  });
  
  buttons.set(
    createAndSetupButton('>>>', 'next-page', disabled.next(), () => currentPage += 1),
    (btn) => btn.disabled = disabled.next()
  )

  // buttons.set(
  //   createAndSetupButton('^^^', 'upTo', disabled,
      
  //   ))
  
  buttons.forEach((_, btn) => frag.appendChild(btn));
  paginationButtonContainer.appendChild(frag);
  
  this.render = (container = document.querySelector(".main")) => {
    container.appendChild(paginationButtonContainer);
    
  }
  
  this.update = (newPageNumber = currentPage) => {
    currentPage = newPageNumber;
    pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
    buttons.forEach((updateButton, btn) => updateButton(btn));
  }
  
  this.onChange = (handler) => {
    paginationButtonContainer.addEventListener('change', handler);
  }
}


  window.addEventListener('resize', (e) => {
   renderPages()
  })


export function renderPages(totalPages) {
  let swCurrent = window.innerWidth;
  if (swCurrent < 767) {
    
    if (document.querySelector(".pagination-buttons767")) { return }

    if (document.querySelector(".pagination-buttons1200")) {
      document.querySelector(".pagination-buttons1200").innerHTML = ""
      document.querySelector(".pagination-buttons1200").remove()
    }
      
      const paginationButtons = new PaginationButton(totalPages, 5,767);

      paginationButtons.render();

      paginationButtons.onChange(e => {
        let pageCurrent = e.target.value;
        console.log(pageCurrent);
        nextApi.pageSet(pageCurrent);
        nextApi.fetchMovie()
        .then(({results}) => {for (const el of results) {
        if (el.release_date) { el.release_date = el.release_date.slice(0, 4); } else { el.release_date = el.first_air_date.slice(0, 4); }
        }
          appendArticlesMarkup(results);
          renderPages(); 
        })
        
      });
    
  } else {
    
    if (document.querySelector(".pagination-buttons1200")) { return };
    if (document.querySelector(".pagination-buttons767")) {
      document.querySelector(".pagination-buttons767").innerHTML = ""
      document.querySelector(".pagination-buttons767").remove()
    }
      
      const paginationButtons = new PaginationButton(totalPages, 7,1200);

      paginationButtons.render();

      paginationButtons.onChange(e => {
        let pageCurrent = e.target.value;
        console.log(pageCurrent);
        nextApi.pageSet(pageCurrent);
        nextApi.fetchMovie()
        .then(({results}) => {for (const el of results) {
        if (el.release_date) { el.release_date = el.release_date.slice(0, 4); } else { el.release_date = el.first_air_date.slice(0, 4); }
        }
          appendArticlesMarkup(results);
          renderPages(); 
        })
        
      });
  }
}



































// import Pagination from 'tui-pagination';

// const ITEMS_PER_PAGE_HOME = 20;
// createPagination();
// export function createPagination() {
//   const options = {
//     itemsPerPage: ITEMS_PER_PAGE_HOME,
//     visiblePages: 3,
//     page: 1,
//     totalItems: 1000,
//     centerAlign: true,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     usageStatistics: false,
//   };
//   const container = document.getElementById('tui-pagination-container');
//   window.pagination = new Pagination(container, options);
  
// }


// import { createPagination } from './js/pagination';


// // Подключение пагинации к мейну
// window.pagination.on('beforeMove', event => {
//   renderPopularMovies(event.page);
// });