console.log("Welcome to the beta of this website")

fetch("./games.json")
    .then(res => res.json())
    .then(json => {
        var index = 0
        json.forEach(game => {
            index++

            $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
            $( `.column-${index}` ).append( `<h2>${art.name}</h2>` );
            $( `.column-${index}` ).append( `<h3>${art.creator}</h3>` );
            $( `.column-${index}` ).append( `<a href='${game.link}'>Link to ${game.name}</a>` );
        })
    })
    .catch(err => {
        console.error(err)
    })