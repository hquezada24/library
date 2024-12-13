const myLibrary = [];
const table = document.querySelector("table");
const button = document.querySelector("button");
const dialog = document.querySelector("dialog");

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(name, author, year) {
    myLibrary.push(new Book(name, author, year));
}

addBookToLibrary("Cien años de soledad", "Gabriel Garcia Marquez", 1967);
addBookToLibrary("Pedro Paramo", "Juan Rulfo", 1955);
addBookToLibrary("Fiesta en la madriguera", "Juan Pablo Villalobos", 2010);

function display(){
  myLibrary.forEach((book) => {
    table.innerHTML += `<tr><td>${book.name}</td><td>${book.author}</td><td>${book.year}</td><td class="read"><input type="checkbox"></input></td><td><button class="remove">🗑️</button></td></tr>`;
  });
}

table.addEventListener("click", (e) => {
  if(e.target.classList.contains("remove")){
    const row = e.target.closest("tr");
    row.remove();
  }
});

button.addEventListener("click", () => {
  dialog.showModal();
});

display();
