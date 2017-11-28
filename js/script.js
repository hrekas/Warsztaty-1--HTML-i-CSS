var images = document.querySelectorAll(".middle-img img");
console.log(images);


for (var i = 0; i < images.length; i++) {
   images[i].addEventListener("mouseover",function(){
     this.nextElementSibling.style.display = "none";
  });
}
for (var i = 0; i < images.length; i++) {
   images[i].addEventListener("mouseout",function(){
     this.nextElementSibling.style.display = "block";
  });
}
