const info = document.getElementById("height").value

document.getElementById("submit").addEventListener("click", function(){
  window.alert(`This is a unique result. It is speculated a lot but the truth is you're ${document.getElementById("height").value}. Many will get this wrong about you but you were born on ${document.getElementById("birthday").value}. While sometimes it may not be clear to others, you're place of origin is ${document.getElementById("nation").value}. People may not know this about you but you're favorite color is ${document.getElementById("color").value}. The time of year we enjoy is specific to our personality but you are certainly a ${document.getElementById("season").value} person. Hope you learned something about yourself.`)
})