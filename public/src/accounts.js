// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  //takes in the accounts array and finds the account that matches the id given
  return accounts.find((account) => account.id === id)
}

//It returns a sorted array of objects. The objects are sorted alphabetically by last name. I think it only returns that first and last name array.
function sortAccountsByLastName(accounts) {
  
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
 
}

function getTotalNumberOfBorrows(account, books) {
    const accountId = account.id;
    let total = 0;
    books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++));
    return total;
}



/*
- An account object.
- An array of all books objects.
- An array of all author objects.

It returns an array of books and authors that represents all books _currently checked out_ 
by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.

*/
function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      booksPossessed.push(book);
    }
  })
  booksPossessed.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return booksPossessed;
}







module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
