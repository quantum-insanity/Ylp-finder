console.log("Welcome to the beta of this website")

fetch("./art.json")
  .then(res => res.json())
  .then(json => {
    var index = 0
    json.forEach(art => {
      index++
      $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
      $( `.column-${index}` ).append( `<h2>${art.name}</h2>` );
      $( `.column-${index}` ).append( `<h3>${art.creator}</h3>` );

      // Check if each image property exists before appending it to the HTML
      for (let i = 1; i <= 7; i++) {
        const propName = 'image' + i;
        if (art.hasOwnProperty(propName)) {
          $( `.column-${index}` ).append( `<img src="${art[propName]}" alt="Image ${propName}" width="400" height="300"></img>` );
        }
      }
    })
  })
  .catch(err => {
    console.error(err)
  })