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

import { booksDisp } from './modules/navigation.js'

navAdd.addEventListener('click', booksDisp);

import { addDisp } from './modules/navigation.js'

navList.addEventListener('click',addDisp);

import { contactDisp } from './modules/navigation.js'

navContact.addEventListener('click', contactDisp);

const dateSection = document.querySelector('.date');

setInterval(() => {
  const dt = DateTime.now();

  dateSection.textContent = dt
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
    .slice(0, -5);
}, 1000);
