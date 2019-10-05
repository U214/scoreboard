let book = {title: "자스", price: 15000};

// 쉘로우 카피
// let copyBook = book;

// es5 assign 메서드로 딥카피
// let copyBook = Object.assign({}, book);

// es6 spread 연산자로 딥카피
const copyBook = {...book, ...{name: 'aaa'}};
copyBook.price = 20000;

console.log(book);
console.log(copyBook);