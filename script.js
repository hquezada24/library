const myLibrary = [];
const button = document.querySelector("button");
const table = document.querySelector("table");
const dialog = document.querySelector("dialog");
const submit = document.querySelector("#submit");

class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = String(year);
  }
}

function addBookToLibrary(newName, newAuthor, newYear) {
  // look for duplicates
  const duplicate = myLibrary.find(
    (book) =>
      book.name === newName.trim() &&
      book.author === newAuthor.trim() &&
      book.year === String(newYear).trim()
  );

  if (duplicate) {
    console.log(myLibrary);
    alert("Book already in the list");
  } else {
    myLibrary.push(new Book(newName, newAuthor, newYear));
    display(myLibrary[myLibrary.length - 1]);
  }
}

function display(book) {
  const tBody = document
    .querySelector("table")
    .getElementsByTagName("tbody")[0];

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
  removeButton.classList.add(
    `${book.name.replace(/[^a-zA-z\u00C0-\u017F]/g, "-")}`
  );
  removeButton.textContent = "🗑️";
  removeCell.appendChild(removeButton);

  bookRow.appendChild(bookCell);
  bookRow.appendChild(authorCell);
  bookRow.appendChild(yearCell);
  bookRow.appendChild(readCell);
  bookRow.appendChild(removeCell);

  //newBook.innerHTML = `<td>${book.name}</td><td>${book.author}</td><td>${book.year}</td><td class="read"><input type="checkbox"></input></td><td><button class="remove">🗑️</button></td>`;
  tBody.appendChild(bookRow);
}

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const row = e.target.closest("tr");
    row.remove();
    let removing = e.target.classList[1].replace(
      /[^a-zA-Z\u00C0-\u017F]/g,
      " "
    );
    for (let book of myLibrary) {
      if (book.name === removing) {
        const index = myLibrary.indexOf(book);
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
  const bookName = document.querySelector("#name").value.trim();
  const bookAuthor = document.querySelector("#book-author").value.trim();
  const bookYear = document.querySelector("#book-year").value.trim();

  if (
    bookName.length === 0 ||
    bookAuthor.length === 0 ||
    bookYear.length === 0
  ) {
    alert("All fields are required");
    return;
  } else {
    addBookToLibrary(bookName, bookAuthor, bookYear);
  }
  console.log(myLibrary);

  // Clear input fields
  bookName.value = "";
  bookAuthor.value = "";
  bookYear.value = "";

  // Close the dialog
  dialog.close();
});

addBookToLibrary("Cien años de soledad", "Gabriel Garcia Marquez", 1967);
addBookToLibrary("Pedro Páramo", "Juan Rulfo", 1955);
addBookToLibrary("El fantasma de Canterville", "Oscar Wilde", 1891);
