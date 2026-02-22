const STORAGE_KEY = "BOOKSHELF_APPS";
let books = [];


// CEK STORAGE

function isStorageExist() {
  if (typeof Storage === "undefined") {
    alert("Browser tidak mendukung local storage");
    return false;
  }
  return true;
}


// SAVE & LOAD

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function loadDataFromStorage() {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    books = JSON.parse(storedData);
  }
}


// TAMBAH BUKU

function addBook(title, author, year, isComplete) {
  const book = {
    id: new Date().getTime(),
    title,
    author,
    year: Number(year),
    isComplete,
  };

  books.push(book);
  saveData();
  renderBooks();
}


// HAPUS BUKU

function deleteBook(id) {
  books = books.filter((book) => book.id !== id);
  saveData();
  renderBooks();
}


// PINDAH RAK

function toggleBook(id) {
  const book = books.find((book) => book.id === id);
  if (book) {
    book.isComplete = !book.isComplete;
    saveData();
    renderBooks();
  }
}

// RENDER SEMUA BUKU

function renderBooks() {
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  for (const book of books) {
    createBookElement(book, incompleteBookList, completeBookList);
  }
}


// RENDER HASIL FILTER

function renderFilteredBooks(filteredBooks) {
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  for (const book of filteredBooks) {
    createBookElement(book, incompleteBookList, completeBookList);
  }
}


// TEMPLATE ELEMEN BUKU
function createBookElement(book, incompleteBookList, completeBookList) {
  const bookElement = document.createElement("div");
  bookElement.setAttribute("data-bookid", book.id);
  bookElement.setAttribute("data-testid", "bookItem");

  bookElement.innerHTML = `
    <h3 data-testid="bookItemTitle">${book.title}</h3>
    <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
    <p data-testid="bookItemYear">Tahun: ${book.year}</p>
    <div>
      <button data-testid="bookItemIsCompleteButton">
        ${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
      </button>
      <button data-testid="bookItemDeleteButton">Hapus Buku</button>
    </div>
  `;

  bookElement
    .querySelector('[data-testid="bookItemIsCompleteButton"]')
    .addEventListener("click", function () {
      toggleBook(book.id);
    });

  bookElement
    .querySelector('[data-testid="bookItemDeleteButton"]')
    .addEventListener("click", function () {
      deleteBook(book.id);
    });

  if (book.isComplete) {
    completeBookList.append(bookElement);
  } else {
    incompleteBookList.append(bookElement);
  }
}

// DOM READY

document.addEventListener("DOMContentLoaded", function () {
  if (isStorageExist()) {
    loadDataFromStorage();
    renderBooks();
  }

  // FORM TAMBAH
  const bookForm = document.getElementById("bookForm");

  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("bookFormTitle").value;
    const author = document.getElementById("bookFormAuthor").value;
    const year = document.getElementById("bookFormYear").value;
    const isComplete = document.getElementById("bookFormIsComplete").checked;

    addBook(title, author, year, isComplete);
    bookForm.reset();
  });

  // FORM SEARCH
  const searchForm = document.getElementById("searchBook");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTitle = document
      .getElementById("searchBookTitle")
      .value.toLowerCase();

    if (searchTitle === "") {
      renderBooks();
      return;
    }

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTitle)
    );

    renderFilteredBooks(filteredBooks);
  });
});