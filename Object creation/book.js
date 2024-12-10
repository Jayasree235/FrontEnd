let book={
    title:"ABC",
    author:"John"
};
function sree(book,title){
    return title in book;
}
console.log(sree(book,"title"));
console.log(sree(book,"tittle"));
