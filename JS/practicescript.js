const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const title = bookTitle.value;
const author = bookAuthor.value;

class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

class BookShelf {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addBook (title, author) {
        let newBook = new Book(title, author);
        if(!this.head){
            this.head = newBook;
            this.tail = newBook;
          }
          else {
            this.tail.next = newBook;
            this.tail = newBook;
          }
          this.length++;
          console.log(newBook);
          return;
        }

    get(index) {
        if(index < 0 || index > this.length-1){return false}
        let current = this.head;
        let counter = 0;
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current;
        }
}

const shelf = new BookShelf()
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', shelf.addBook);
//shelf.addBook(bookTitle.value, author.value)
//console.log(shelf);
//shelf.addBook(title, author);