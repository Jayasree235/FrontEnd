let book={
    title:"ABC",
    author:"John"
};
function hasproperty(book,title){
    return title in book;
}
console.log(hasproperty(book,"title"));
console.log(hasproperty(book,"tittle"));
