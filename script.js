const myLibrary = [];
const table = document.querySelector("table");
const button = document.querySelector("button");
const remove = document.querySelector("#remove");

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
    table.innerHTML += `<tr><td>${book.name}</td><td>${book.author}</td><td>${book.year}</td><td class="read"><input type="checkbox"></input></td><th><button>🗑️</button></th></tr>`;
  });
}

function deleteBook(){

}

display();
console.log(myLibrary);
