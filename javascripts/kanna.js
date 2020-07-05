// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (document.getElementsByClassName('botao-menu')[0].contains(event.target)){
    document.getElementById("moonshine").classList.toggle("show");
    document.getElementById("moonglade").classList.remove("show");
    document.getElementById("moondust").classList.remove("show");

  } else if (document.getElementsByClassName('botao-menu')[1].contains(event.target)){

    document.getElementById("moonshine").classList.remove("show");
    document.getElementById("moonglade").classList.toggle("show");
    document.getElementById("moondust").classList.remove("show");

  } else if (document.getElementsByClassName('botao-menu')[2].contains(event.target)){

    document.getElementById("moonshine").classList.remove("show");
    document.getElementById("moonglade").classList.remove("show");
    document.getElementById("moondust").classList.toggle("show");

  } else{
    document.getElementById("moonshine").classList.remove("show");
    document.getElementById("moonglade").classList.remove("show");
    document.getElementById("moondust").classList.remove("show");
  }
}
