import { books } from "./modules/books.js";
import { buttonsIdAndLinks } from "./modules/buttonsWithTransition.js";


const buttonOfNav = {
  RU: document.querySelector('.navigation__button > span'),
  ENG: document.querySelector(`.navigation__button`),
  turn: false
};

buttonOfNav.ENG.addEventListener(`click`, function () {
  if (buttonOfNav.turn) {
    buttonOfNav.ENG.style.color = `black`;
    buttonOfNav.RU.style.color = `#666`;
    buttonOfNav.turn = !buttonOfNav.turn;
  }
  else {
    buttonOfNav.ENG.style.color = `#666`;
    buttonOfNav.RU.style.color = `black`;
    buttonOfNav.turn = !buttonOfNav.turn;
  }
});



function linkSliceForDomen(link) {
  link = link.slice(8);
  return link.slice(0, link.indexOf(`/`));
}

function addTransitionEventOnButton(id, link) {
  document.querySelector(`${id}`).addEventListener(`click`, function() {
    if(confirm(`переход на ${linkSliceForDomen(link)}`)) {
      location.href = link;
    }
  });
}

for(let [id, link] of buttonsIdAndLinks) {
  addTransitionEventOnButton(id, link)
}



function addEventOnBooks(bookInObject) {
  bookInObject.id.addEventListener('click', function () {
    books.book_cover.alt = bookInObject.alt
    books.book_cover.src = bookInObject.src
    books.book_description.innerHTML = `<p><br>${bookInObject.text}</p>`
  });
}

for (let bookInObject of Object.keys(books)) {
  addEventOnBooks(books[bookInObject]);
}
