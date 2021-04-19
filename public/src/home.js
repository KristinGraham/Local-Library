// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  let totalBooks = 0;
  for (let i=0; i<books.length; i++){
    totalBooks +=1;
  }
  return totalBooks;
}
  

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  for (let i=0; i<accounts.length; i++){
    totalAccounts +=1;
  }
  return totalAccounts;
}


function getBooksBorrowedCount(books) {
let result = 0;
books.forEach(book => {
  if(book.borrows.find(item => item.returned === false)){
    result += 1;
  }
})
return result;
}


function getMostCommonGenres(books) {
 let booksGenres = books.map((book) => book.genre);
 console.log(booksGenres);
 const topGenres = [];
 booksGenres.map((genre) =>{
  
  const genreThere = topGenres.findIndex((item) => item.name === genre);
  if(genreThere >=0){
    topGenres[genreThere].count = topGenres[genreThere].count +1;
  } else{
    topGenres.push({name: genre, count:1 });
  }
});
topGenres.sort((a, b) => b.count - a.count);
if (topGenres.length > 5) {
  return topGenres.slice(0, 5);
}
return topGenres;
}


function getMostPopularBooks(books) {
  let result = [];
  const borrows = books.reduce((acc, book) => {
    result.push({ name: book.title, count: book.borrows.length});
  }, []);
  return topFive(result);
  }
 // const topBooks = books.map((book) => book.borrows.length);
  //console.log(topBooks);
      //book['count'] = book.borrows.length    
//return result.sort((a, b) => b.count - a.count).slice(0, 5);

function topFive(array){
  let result = array
  .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
  .slice(0,5);
  return result;
}


//The Above are Complete


function getMostPopularAuthors(books, authors) {
    const popularAuthors = [];
    for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
    if (author.id === book.authorId) {
    count += book.borrows.length;
    }
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject);
    }
    
    return topFive(popularAuthors);
    
    }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
