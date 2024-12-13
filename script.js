const myLibrary = [];
const table = document.querySelector("table");
const button = document.querySelector("button");

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(name, author, year) {
    myLibrary.push(new Book(name, author, year));
    table.innerHTML += `<tr><td>${name}</td><td>${author}</td><td>${year}</td><td class="read"><input type="checkbox"></input></td></tr>`;
}
addBookToLibrary("Cien años de soledad", "Gabriel Garcia Marquez", 1967);
addBookToLibrary("Pedro Paramo", "Juan Rulfo", 1955);
addBookToLibrary("Fiesta en la madriguera", "Juan Pablo Villalobos", 2010);
console.log(myLibrary);
