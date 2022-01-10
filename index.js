import { DateTime } from './node_modules/luxon/src/luxon.js';
import Book from './modules/book.js';
import Collection from './modules/collection.js';

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');

const coll = new Collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}

submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});

/* navigation */

const navAdd = document.querySelector('#addNew');
const navList = document.querySelector('#list');
const navContact = document.querySelector('#contact');
const booksWindow = document.querySelector('.books-section');
const addWindow = document.querySelector('.add-books');
const contactWindow = document.querySelector('.contact-section');

navAdd.addEventListener('click', (evt) => {
  evt.preventDefault();
  addWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
});

navList.addEventListener('click', (evt) => {
  evt.preventDefault();
  booksWindow.classList.remove('toggle');
  addWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
});

navContact.addEventListener('click', (evt) => {
  evt.preventDefault();
  contactWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  addWindow.classList.add('toggle');
});

const dateSection = document.querySelector('.date');

setInterval(() => {
  const dt = DateTime.now();

  dateSection.textContent = dt
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
    .slice(0, -5);
}, 1000);
