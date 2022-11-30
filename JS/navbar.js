const listBook = document.getElementById('bookList');
const bookAdd = document.getElementById('addBook');
const contact = document.getElementById('contact');

listBook.addEventListener('click', () => {
    document.querySelector('#booklistSection').classList.toggle('show');
  });
