document.getElementById("Load").addEventListener("click", function() {

    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
        result.json().then((data) => {
            console.log(data);
        })
    })
})