const myLibrary = [];
const button = document.querySelector("button");
const table = document.querySelector("table");
const dialog = document.querySelector("dialog");
const submit = document.querySelector("#submit");

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(newName, newAuthor, newYear) {
  if(myLibrary.length === 0){
    myLibrary.push(new Book(newName, newAuthor, newYear));
  } else {
    for(let i = 0; i < myLibrary.length; i++){
      if(myLibrary[i].name === newName && myLibrary[i].author === newAuthor && myLibrary[i].year === newYear){
        console.log("book already in the list");
      } else {
        myLibrary.push(new Book(newName, newAuthor, newYear));
        console.log(newName);
        display();
        break;
      }
    }
  }
}

addBookToLibrary("Cien años de soledad", "Gabriel Garcia Marquez", 1967);

function display(){
  myLibrary.forEach((book) => {
    const tBody = document.querySelector("table").getElementsByTagName("tbody")[0];

    const bookRow = document.createElement("tr");

    let bookCell = document.createElement("td");
    bookCell.textContent = book.name;

    let authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    let yearCell = document.createElement("td");
    yearCell.textContent = book.year;

    let readCell = document.createElement("td");
    let readInput = document.createElement("input");
    readInput.type = "checkbox";
    readCell.appendChild(readInput);

    let removeCell = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.classList.add(`${book.name.replace(/[^a-zA-z\u00C0-\u017F]/g, "-")}`);
    removeButton.textContent = "🗑️";
    removeCell.appendChild(removeButton);

    bookRow.appendChild(bookCell);
    bookRow.appendChild(authorCell);
    bookRow.appendChild(yearCell);
    bookRow.appendChild(readCell);
    bookRow.appendChild(removeCell);

    //newBook.innerHTML = `<td>${book.name}</td><td>${book.author}</td><td>${book.year}</td><td class="read"><input type="checkbox"></input></td><td><button class="remove">🗑️</button></td>`;
    tBody.appendChild(bookRow);
  });
}

table.addEventListener("click", (e) => {
  if(e.target.classList.contains("remove")){
    const row = e.target.closest("tr");
    row.remove();
    let removing = e.target.classList[1].replace(/[^a-zA-Z\u00C0-\u017F]/g, " ");
    for(let book of myLibrary){
      if(book.name === removing){
        const index = myLibrary.indexOf(book);
        console.log(myLibrary);
        console.log(`you are deleting ${book.name}`);
        myLibrary.splice(index, 1);
        console.log(myLibrary);
      }
    }
  }
});

button.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const bookName = document.querySelector("#name");
  const bookAuthor = document.querySelector("#book-author");
  const bookYear = document.querySelector("#book-year");
  addBookToLibrary(bookName.value, bookAuthor.value, bookYear.value);
  console.log(myLibrary);
  dialog.close();
});

display();