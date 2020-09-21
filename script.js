var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o','p', 'a','s', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x','c', 'v', 'b','n', 'm', ',', '.', ';'];

var cont = document.getElementById("container")

for(var i = 0; i < letters.length; i++) {
  
  var button = document.createElement("button");
  button.innerHTML = letters[i];
  cont.appendChild(button);  
  button.addEventListener("click", makeGreen);

}

function makeGreen(e) {
  console.log(e)
  e.target.style.background = "green"
}

