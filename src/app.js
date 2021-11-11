const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div><h3>' + article.title + '</h3><p>' + article.url + '</p></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
    }) 