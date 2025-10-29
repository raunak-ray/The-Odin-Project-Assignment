// References
const container = document.querySelector("#container");
const dialog = document.querySelector("dialog");
const addNewBook = document.querySelector("#addBook");
const submitForm = document.querySelector("#submitForm");
const form = document.querySelector("form");
const cancel = document.querySelector("#cancel");

// Library array
let myLibrary = [];

// Book constructor
function Book(title, author, totalPages, isReaded) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.isReaded = isReaded;
}

// Toggle read status
Book.prototype.toggleReadStatus = function () {
  this.isReaded = !this.isReaded;
};

// Add book to library
function addBook(data) {
  const newBook = new Book(data[0], data[1], data[2], data[3]);
  myLibrary.push(newBook);
}

// Create book card
function createBookCard(book, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-header">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
    </div>

    <div class="card-body">
      <p class="book-pages">📄 ${book.totalPages} pages</p>
      <p class="book-status ${book.isReaded ? "read" : "unread"}">
        ${book.isReaded ? "✅ Read" : "📘 Not Read"}
      </p>
    </div>

    <div class="card-actions">
      <button class="toggle-btn" title="Toggle Read">
        ${book.isReaded ? "📘" : "✅"}
      </button>
      <button class="remove-btn" title="Remove Book">🗑️</button>
    </div>
  `;

  // Toggle read
  card.querySelector(".toggle-btn").addEventListener("click", () => {
    book.toggleReadStatus();
    showBooks();
  });

  // Remove book
  card.querySelector(".remove-btn").addEventListener("click", () => {
    removeBook(index);
  });

  return card;
}

// Show all books
function showBooks() {
  container.innerHTML = ""; // Clear container
  myLibrary.forEach((book, index) => {
    container.appendChild(createBookCard(book, index));
  });
}

// Remove book
function removeBook(index) {
  myLibrary = myLibrary.filter((_, i) => i !== index);
  showBooks();
}

// Form validation
function validation(input) {
  return !!input;
}

// Open dialog
addNewBook.addEventListener("click", () => dialog.showModal());

// Submit form
submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const totalPages = formData.get("totalPages");
  const isReaded = formData.get("isReaded") === "true"; // convert to boolean

  if (validation(title) && validation(author) && validation(totalPages) && validation(isReaded !== null)) {
    addBook([title, author, totalPages, isReaded]);
    showBooks();
    dialog.close();
    form.reset();
  } else {
    alert("All fields must be filled");
  }
});

// Cancel dialog
cancel.addEventListener("click", () => dialog.close());

// Initial sample books
addBook(["Harry Potter", "J.K. Rowling", 309, true]);
addBook(["The Hobbit", "J.R.R. Tolkien", 310, false]);
addBook(["1984", "George Orwell", 328, true]);

// Display initial books
showBooks();
