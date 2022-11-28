const booksArr = []
const booksIn = document.querySelector('#booksIn')

const add = document.querySelector('#add')


add.addEventListener('click', () => {
        const title = document.querySelector('#title')
        const author = document.querySelector('#author')
        let model = {title:title.value,author:author.value}
        const getBooks_1 = JSON.parse(localStorage.getItem("books"))

        if(getBooks_1 == undefined) {
                booksArr.push(model)
                localStorage.setItem("books", JSON.stringify(booksArr));
        }else{
                getBooks_1.push(model)
                localStorage.setItem("books", JSON.stringify(getBooks_1));
        }
        location.reload();
    
})