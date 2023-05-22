console.log("Welcome to the beta of this website")

fetch("./education.json")
  .then(res => res.json())
  .then(json => {
    var index = 0
    json.forEach(education => {
      index++
      $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
      $( `.column-${index}` ).append( `<h2>${education.name}</h2>` );
      $( `.column-${index}` ).append( `<h3>${education.description}</h3>` );
      

      // Check if each image property exists before appending it to the HTML
      for (let i = 1; i <= 7; i++) {
        const propName = 'image' + i;
        if (education.hasOwnProperty(propName)) {
          $( `.column-${index}` ).append( `<img src="${education[propName]}" alt="Image ${propName}" width="400" height="300"></img>` );
        }
      }
    })
  })
  .catch(err => {
    console.error(err)
  })