console.log("Welcome to the beta of this website")

fetch("./design.json")
    .then(res => res.json())
    .then(json => {
        var index = 0
        json.forEach(design => {
            index++

            $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
            $( `.column-${index}` ).append( `<h2>${design.name}</h2>` );
            $( `.column-${index}` ).append( `<h3>${design.creator}</h3>` );
            $( `.column-${index}` ).append( `<img src="${design.image}" alt="Game Image didnt load = "width="400"; height="300px";"">${design.image}'}</img>` );
        })
    })
    .catch(err => {
        console.error(err)
    })