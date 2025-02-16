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

    addBook.addEventListener('click', () =>{
        dialog.show();
    });

    closeBtn.addEventListener('click', () =>{
        dialog.close();
    });

    readStatus.forEach(read => {
        read.addEventListener('click', () =>{
            alert('read read...');
        });
    });
    
    deleteBtn.forEach(del => {
        del.addEventListener('click', () =>{
            alert('Delete delete...');
        });
    });
    
});