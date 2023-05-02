console.log("Welcome to the beta of this website")

fetch("./engineering.json")
    .then(res => res.json())
    .then(json => {
        var index = 0
        json.forEach(engineering => {
            index++

            $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
            $( `.column-${index}` ).append( `<h2>${engineering.name}</h2>` );
            $( `.column-${index}` ).append( `<h3>${engineering.description}</h3>` );
            $( `.column-${index}` ).append( `<img src="${engineering.image}" alt="Image didnt load" style = "width="400px"; height="300px";""></img>` );

        })
    })
    .catch(err => {
        console.error(err)
    })