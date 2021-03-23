const elBtnWatchInstead = document.querySelector('#btnWatchInstead');
const ul = document.querySelector('#shows');
const url = 'data/watchInstead.json';

function createNode(element){
    return document.createElement(element)
}

function append(parent, el){
    return parent.appendChild(el)
}



function fetchShows(event) {

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let shows = data.shows;

            return shows.map(function (show) {
                let li = createNode('li');
                li.innerHTML = show.showTitle;

                append(ul, li);
            })
        })
        .catch(function (error) {
            console.log(error);
        });


}

elBtnWatchInstead.addEventListener("click",fetchShows,false)