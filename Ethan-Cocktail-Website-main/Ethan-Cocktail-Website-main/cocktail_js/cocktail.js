const search = document.getElementById("mySearch");
const index = document.getElementById("myMenu");
const about = document.getElementById("about");
const list = document.getElementById("list");
const root = document.getElementById("root");


search.addEventListener("click",function(event){
  event.cancelBubble = true;
  index.style.display = "block";
})
document.addEventListener("click",function(){
  index.style.display = "none";
})


if (window.matchMedia("(max-width: 803px)").matches) {
    about.innerHTML = "About";
    root.innerHTML = "Root";
    list.innerHTML = "List";
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }