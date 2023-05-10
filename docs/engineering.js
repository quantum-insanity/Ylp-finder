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
      

      // Check if each image property exists before appending it to the HTML
      for (let i = 1; i <= 7; i++) {
        const propName = 'image' + i;
        if (engineering.hasOwnProperty(propName)) {
          $( `.column-${index}` ).append( `<img src="${engineering[propName]}" alt="Image ${propName}" width="400" height="300"></img>` );
        }
      }
    })
  })
  .catch(err => {
    console.error(err)
  })