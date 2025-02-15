document.addEventListener('DOMContentLoaded', () => {
    // Declaring variables to use during library development
    const addBook = document.querySelector('#add-book');
    const readButtons = document.querySelectorAll('.status');
    const deleteButtons = document.querySelectorAll('.delete');
    let noBookMsg = document.querySelector('.book-avail')

    // Adding event listener to the 'add-book' button
    addBook.addEventListener('click', () => {
        alert('Add Book button clicked');
    });

    // Adding event listeners to each 'status' button
    readButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            alert('Read button clicked');
        });
    });

    // Adding event listeners to each 'delete' button
    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            alert('Delete button clicked');
        });
    });
});
