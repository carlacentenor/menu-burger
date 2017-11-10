var button = document.getElementById('btn');


var showMenu= function(){
  var menu = document.getElementById('option-menu');
if(menu.classList.contains("disabled-menu")){
  menu.classList.remove("disabled-menu");
  menu.classList.add("enabled-menu");
}
else {
menu.classList.add("disabled-menu");
menu.classList.remove("enabled-menu");
}
}

button.addEventListener('click',showMenu);
