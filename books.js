document.addEventListener('DOMContentLoaded', ()=>{
    const addBook = document.querySelector('#add-book');
    const dialog = document.querySelector('dialog');
    const closeBtn = document.querySelector('#close');
    const readStatus = document.querySelectorAll('.status');
    const deleteBtn = document.querySelectorAll('.delete');
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const status = document.querySelector('#read');
    const newBook = document.querySelector('#new-book');
    const bookCover = document.querySelector('.book-cover')


    //main things

    const myLibrary = [];

    function Book(title, author, pages,status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    function addBookToLibrary(){
        const bookTitle = title.value;
        const bookAuthor = author.value;
        const bookPage = pages.value;
        const bookStatus = status.checked ? 'Read' : 'Not Read';

        const book = new Book(bookTitle, bookAuthor, bookPage,bookStatus);

        myLibrary.push(book);
        displayBook();
        dialog.close();
    }

    // Functions to do the work

    function checkBookAvailability(){
        if (bookCover.children.length === 0){
            document.querySelector('.book-avail').style.display = 'block';
        }
        else{
            document.querySelector('.book-avail').style.display = 'none';
        }
    }

    function displayBook(){
        myLibrary.forEach((book, index) =>{
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
            <div class="book-design">
                <p class="book-title">${book.title}</p>
                <p class="book-author"><span>&bullet;</span>${book.author}</p>
                <p class="book-pages">${book.pages}</p>
                <p class="book-read">${book.status}</p>
                <div class="book-btn">
                    <button class="status" data-index="${index}">${book.status}</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </div>
            </div>
            `;
            bookCover.appendChild(bookDiv);
        });

        readStatus.forEach((btn) => {
            btn.addEventListener('click', changeStatus);
        });

        deleteBtn.forEach((del) =>{
            del.addEventListener('click', removeBook);
        });
    }

    addBook.addEventListener('click', () =>{
        dialog.show();
    });

    checkBookAvailability();

    closeBtn.addEventListener('click', () =>{
        dialog.close();
    });
    
});