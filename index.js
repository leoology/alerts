const info = document.getElementById("height").value

document.getElementById("submit").addEventListener("click", function(){
  window.alert(`Your height is ${document.getElementById("height").value}`)
})