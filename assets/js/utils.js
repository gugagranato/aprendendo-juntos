console.log('init')

function pokemons() {
    document.getElementById('modalCongrats').style.display = 'block';
}

  // document.getElementById -> serve para pegar o id no html
  // document.getElementsByClassName -> pegar a classe no html

var modalPikachu = document.getElementById("modalPikachu");
var CardPikachu = document.getElementById("CardPikachu");
var spanPikachu = document.getElementsByClassName("closePikachu")[0];

CardPikachu.onclick = function() {
  modalPikachu.style.display = "block";
}
spanPikachu.onclick = function() {
  modalPikachu.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalPikachu) {
    modalPikachu.style.display = "none";
  }
}

var modalCharmander = document.getElementById("modalCharmander");
var CardCharmander = document.getElementById("CardCharmander");
var spanCharmander = document.getElementsByClassName("closeCharmander")[0];

CardCharmander.onclick = function() {
  modalCharmander.style.display = "block";
}
spanCharmander.onclick = function() {
  modalCharmander.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalCharmander) {
    modalCharmander.style.display = "none";
  }
}

var modalBulbasauro = document.getElementById("modalBulbasauro");
var CardBulbasauro = document.getElementById("CardBulbasauro");
var spanBulbasauro = document.getElementsByClassName("closeBulbasauro")[0];

CardBulbasauro.onclick = function(){
  modalBulbasauro.style.display = "block";
}
spanBulbasauro.onclick = function(){
  modalBulbasauro.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modalBulbasauro){
      modalBulbasauro.style.display = "none";
  }
}

function AddCard(){
  var card = document.getElementById("CardSquirtle");
  card.style.display = "block";
}

function CapturaForca(){
  var forca = "";

  var forca = document.getElementById("forcaPikachu").value;
  document.getElementById("valorPikachu").innerHTML = forca;
  document.getElementById("forcaPikachu").value = "";

  var forca = document.getElementById("forcaCharmander").value;
  document.getElementById("valorCharmander").innerHTML = forca;
  document.getElementById("forcaCharmander").value = "";

  var forca = document.getElementById("forcaBulbasauro").value;
  document.getElementById("valorBulbasauro").innerHTML = forca;
  document.getElementById("forcaBulbasauro").value = "";
  
}
