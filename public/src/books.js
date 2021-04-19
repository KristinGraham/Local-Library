// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

//The Above are Complete
/*

- An array of books.

It returns an array with two arrays inside of it. All of the inputted books are present 
in either the first or second array.

The first array contains books _that have been loaned out, and are not yet returned_ while 
the second array contains 
books _that have been returned._ You can check for the return status by looking 
at the first transaction in the `borrows` array.
*/

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  result.push(borrowed, returned);
  return result;
}

  //use filter array
  //needs to create 2 arrays


function getBorrowersForBook(book, accounts) {
 const { borrows } = book;
 const borrowers = borrows.map(({ id, returned })=> {
   const account = accounts.find(account => account.id === id);
   return {
     ...account,
     returned,
   };
 });

 return borrowers
   .sort((borrowerA, borrowerB) => {
     const companyA = borrowerA.company;
     const companyB = borrowerB.company;
     return companyA.localeCompare(companyB);
   })
   .slice(0, 10);
  }


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
