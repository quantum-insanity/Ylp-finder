console.log("Welcome to the beta of this website")

fetch("./games.json")
    .then(res => res.json())
    .then(json => {
        var index = 0
        json.forEach(game => {
            index++

            $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
            $( `.column-${index}` ).append( `<h2>${game.name}</h2>` );
            $( `.column-${index}` ).append( `<h3>${game.description}</h3>` );
            $( `.column-${index}` ).append( `<a href='${game.link}'><img src="${game.image}" alt="Game Image didnt load" style = "width="400"; height="300px";""></img></a>` );

        })
    })
    .catch(err => {
        console.error(err)
    })
