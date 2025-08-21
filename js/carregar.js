document.addEventListener('DOMContentLoaded', function() {

      carregar_dados();

});


  function carregar_dados(){
  const footer = document.getElementById("footer");
  if (footer) {
    console.log('Element footer exists');
    footer.innerHTML = `

    `;
} else {
  console.error('Element topper does not exist');
}


    if (document.getElementById("footer")) {
        document.getElementById("footer").innerHTML = `
                    
        `;
    }}
    
