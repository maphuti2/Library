document.addEventListener('DOMContentLoaded', () => {
    const addBook = document.querySelector('#add-book');
    const dialog = document.querySelector('dialog');
    const closeBtn = document.querySelector('#close');
    const newBook = document.querySelector('#new-book');
    const bookCover = document.querySelector('.book-cover');
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const status = document.querySelector('#read');
    const myLibrary = [];

    function Book(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    function addBookToLibrary() {
        const bookTitle = title.value;
        const bookAuthor = author.value;
        const bookPage = pages.value;
        const bookStatus = status.checked ? 'Read' : 'Not Read';

        const book = new Book(bookTitle, bookAuthor, bookPage, bookStatus);
        myLibrary.push(book);
        displayBooks();
        dialog.close();
    }

    function checkBookAvailability() {
        if (bookCover.children.length === 0) {
            document.querySelector('.book-avail').style.display = 'block';
        } else {
            document.querySelector('.book-avail').style.display = 'none';
        }
    }

    function displayBooks() {
        bookCover.innerHTML = ''; 

        myLibrary.forEach((book, index) => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
            <div class="book-design">
                <p class="book-title">${book.title}</p>
                <p class="book-author"><span>&bullet;</span>${book.author}</p>
                <p class="book-pages">${book.pages} pages</p>
                <p class="book-read">${book.status}</p>
                <div class="book-btn">
                    <button class="status" data-index="${index}">${book.status}</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </div>
            </div>
            `;
            bookCover.appendChild(bookDiv);
        });

        document.querySelectorAll('.status').forEach((btn) => {
            btn.addEventListener('click', changeStatus);
        });

        document.querySelectorAll('.delete').forEach((del) => {
            del.addEventListener('click', removeBook);
        });

        checkBookAvailability();
    }

    function changeStatus(e) {
        const index = e.target.dataset.index;
        myLibrary[index].status = myLibrary[index].status === 'Read' ? 'Not Read' : 'Read';
        displayBooks();
    }

    function removeBook(e) {
        const index = e.target.dataset.index;
        myLibrary.splice(index, 1);
        displayBooks();
    }

    newBook.addEventListener('click', (e) => {
        e.preventDefault(); 
        const pagesInput = document.querySelector('#pages');
    if (pagesInput.value < 10) {
        document.querySelector('#pg').textContent = 'Pages must be more than 9';
        document.querySelector('#pg').style.color = 'red';
       
    } else {
        addBookToLibrary();
        document.querySelector('#pg').textContent = 'Pages';
        document.querySelector('#pg').style.color = 'gray';
    }
    });

    addBook.addEventListener('click', () => {
        dialog.showModal();
    });

    closeBtn.addEventListener('click', () => {
        dialog.close();
    });

    checkBookAvailability();
});
