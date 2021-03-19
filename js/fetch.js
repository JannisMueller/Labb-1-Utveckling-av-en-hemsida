function createNode(element){
    return document.createElement(element)
}

function append(parent, el){
    return parent.appendChild(el)
}

const ul = document.querySelector('#shows');
const url = 'data/data.json';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.shows);
        console.log("Visa första i json-objektet: " + data.shows[0].showTitle);
        let shows = data.shows;

        return shows.map(function(show) {
            let li = createNode('li');
            li.innerHTML = show.showTitle + " " +  "Place: " + show.showPlace;

            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
