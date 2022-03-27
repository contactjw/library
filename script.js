let myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}


let booksContainer = document.querySelector(".books-container");
let addBookButton = document.querySelector(".add-book-button");


addBookButton.onclick = function(event) {

    document.body.style.pointerEvents = "none";

    let newBookContainer = document.createElement("div");
    newBookContainer.setAttribute("class", "new-book-container");

    let newBookHeading = document.createElement("div");
    newBookHeading.setAttribute("class", "new-book-heading");
    newBookHeading.innerHTML="New Book";
    newBookContainer.appendChild(newBookHeading);

    let form = document.createElement("form");
    form.setAttribute("action", "#");
    newBookContainer.appendChild(form);

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "title");
    form.appendChild(titleInput);

    let authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("placeholder", "author");
    form.appendChild(authorInput);

    let pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "text");
    pagesInput.setAttribute("placeholder", "pages");
    form.appendChild(pagesInput);

    let haveReadButton = document.createElement("button");
    haveReadButton.setAttribute("class", "read");
    haveReadButton.innerHTML="Read";
    form.appendChild(haveReadButton);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("class", "submit");
    submitButton.innerHTML="Submit";
    form.appendChild(submitButton);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove");
    removeButton.innerHTML="Remove";
    form.appendChild(removeButton);

    booksContainer.appendChild(newBookContainer);

    booksContainer.style.pointerEvents = "auto";

}


document.addEventListener('click', function(event) {
    let book = booksContainer.lastChild;
    let bookButton = document.querySelector(".add-book-button");
    let isClickInside = (book.contains(event.target) || bookButton.contains(event.target));
  
    if (!isClickInside) {
        document.body.style.pointerEvents = "auto";
        book.remove();
    }
})

