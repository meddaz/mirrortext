
textInput.addEventListener("keyup", enterText);
reset.addEventListener('click', resetTextArea);

  
function enterText(event) {
  var inputVal = document.getElementById("textInput");


output.innerText = event.target.value;
}

 function resetTextArea() {
   output.innerHTML = " ";
 }

 