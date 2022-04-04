const newBookButton = document.querySelector(".add-book-button");
const overlay = document.getElementById("overlay");
const titleInput =  document.getElementById("title");
const authorInput =  document.getElementById("author");
const pagesInput =  document.getElementById("pages");
const hasReadInput = document.getElementById("hasRead");
const submitBookButton = document.getElementById("submit-book");
let removeBookButtons = document.getElementsByClassName("remove-book");
let readBookButtons = document.getElementsByClassName("read-book");
const booksContainer = document.querySelector(".books-container");




let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}
  
function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, hasReadInput.checked);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks();
    for (let i = 0; i < removeBookButtons.length; i++) {
        removeBookButtons[i].addEventListener("click", () => {
            myLibrary.splice(i, 1);
            console.log(myLibrary);
            removeBookButtons[i].parentElement.remove();
        })
    }

    for (let i = 0; i < readBookButtons.length; i++) {
        readBookButtons[i].addEventListener("click", () => {
            if (readBookButtons[i].innerHTML == "Read") {
                readBookButtons[i].innerHTML = "Not Read";
                notRead(readBookButtons[i]);
            }
            else {
                readBookButtons[i].innerHTML = "Read";
                read(readBookButtons[i]);
            }
        })
    }    
}


function displayBooks() {
    resetBooks();
    myLibrary.forEach(Book => {

    let newBookContainer = document.createElement("div");
    newBookContainer.setAttribute("class", "new-book-container");

    let titleInfo = document.createElement("div");
    titleInfo.innerHTML = Book.title;
    titleInfo.setAttribute("class", "title");
    titleInfo.setAttribute("class", "new-book-heading");
    newBookContainer.appendChild(titleInfo);

    let authorInfo = document.createElement("div");
    authorInfo.innerHTML = "By: " + Book.author;
    authorInfo.setAttribute("class", "author");
    newBookContainer.appendChild(authorInfo);

    let pagesInfo = document.createElement("div");
    pagesInfo.innerHTML = Book.pages + " Pages";
    pagesInfo.setAttribute("class", "pages");
    newBookContainer.appendChild(pagesInfo);

    let haveReadButton = document.createElement("button");
    haveReadButton.setAttribute("class", "read-book");
    if (Book.hasRead) {
        haveReadButton.innerHTML = "Read";
        read(haveReadButton);
    } else {
        haveReadButton.innerHTML = "Not Read";
        notRead(haveReadButton);
    }
    newBookContainer.appendChild(haveReadButton);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-book");
    removeButton.innerHTML = "Remove";
    newBookContainer.appendChild(removeButton);

    booksContainer.appendChild(newBookContainer);
    })
}


// Event Listeners

newBookButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    openModal(modal);
})

submitBookButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal.active");
    addBookToLibrary();
    close(modal);
    clearForm();
})

overlay.addEventListener("click", () => {
    const modal = document.querySelector(".modal.active");
    close(modal);
    clearForm();
})




// Utility Functions

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function close(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}


// Change color of read button to green or red based on if user read the book
function read(element) {
    element.classList.remove("not-read-color");
    element.classList.add("read-color");
}

function notRead(element) {
    element.classList.add("not-read-color");
    element.classList.remove("read-color");
}

function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    hasReadInput.checked = false;
}

function resetBooks() {
    booksContainer.innerHTML = "";
}