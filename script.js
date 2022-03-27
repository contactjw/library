let booksContainer = document.querySelector(".books-container");
let addBookButton = document.querySelector(".add-book-button");
let submitBookButton;
let removeBookButton;


let myLibrary = [];

function Book() {

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
    titleInput.required = true;
    form.appendChild(titleInput);

    let authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("placeholder", "author");
    authorInput.required = true;
    form.appendChild(authorInput);

    let pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "text");
    pagesInput.setAttribute("placeholder", "pages");
    pagesInput.required = true;
    form.appendChild(pagesInput);

    let haveReadButton = document.createElement("button");
    haveReadButton.setAttribute("id", "read");
    haveReadButton.innerHTML="Read";
    form.appendChild(haveReadButton);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-book");
    submitButton.innerHTML="Submit";
    form.appendChild(submitButton);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("id", "remove");
    removeButton.innerHTML="Remove";
    form.appendChild(removeButton);

    booksContainer.appendChild(newBookContainer);

    submitBookButton = document.querySelector(".submit-book");
    removeBookButton = document.querySelector(".remove");
    
}

function addBookToLibrary() {

}


addBookButton.addEventListener('click', function(event) {

    document.body.style.pointerEvents = "none";

    let newBook = new Book();
    myLibrary.push(newBook);

    booksContainer.style.pointerEvents = "auto";
});

document.addEventListener('click', function(event) {
    let book = booksContainer.lastChild;
    let bookButton = document.querySelector(".add-book-button");
    let isClickInside = (book.contains(event.target) || bookButton.contains(event.target));
  
    if (!isClickInside) {
        document.body.style.pointerEvents = "auto";
        // book.remove();
    }
});


// Weird way to remove elements parents, but it works!

document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'remove'){
        console.log("Hello");
        let target = e.target;
        let parent = e.target.parentElement;
        let grandparent = parent.parentElement;
        grandparent.remove();
        //do something
     }
 });


 document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'submit-book'){
        let target = e.target;
        let parent = e.target.parentElement;
        let grandparent = parent.parentElement;
        grandparent.style.boxShadow = 'none';
        document.body.style.pointerEvents = "auto";
        //do something
     }
 });



