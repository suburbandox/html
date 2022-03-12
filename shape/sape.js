let child = document.getElementById("child");

child.addEventListener("click", function (event) {
  console.log("child clicked");
  event.cancelBubble = true;
  event.target.style.backgroundColor = "red";
});

let parent = document.getElementById("parent");
parent.addEventListener("click", function (event) {
  console.log("parent clicked");
  event.target.children[0].style.backgroundColor = "blue";
});

let box = document.getElementById("box");
let bod = document.body;
box.addEventListener("click",function(event){
    event.cancelBubble = true;
    box.style.backgroundColor = "brown";
    box.style.height = "100px";
})
bod.addEventListener("click",function(event){

    box.style.backgroundColor = "green";
    box.style.height = "300px";
})
