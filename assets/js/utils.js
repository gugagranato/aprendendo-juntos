console.log('init')

function pikachu() {
    document.getElementById('modalCongrats').style.display = 'block';
}

  // document.getElementById -> serve para pegar o id no html
  // document.getElementsByClassName -> pegar a classe no html
  
var modal = document.getElementById("modalCharmander");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}