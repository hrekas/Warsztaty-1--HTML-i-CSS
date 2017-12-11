//slider
var slides = document.querySelectorAll(".slide");
var buttonPrev = document.querySelector(".left-bird");
var buttonNext = document.querySelector(".right-bird");
var counter = 0;
// slides[0].classList.add("visible");
slides[0].classList.add("show-slide");

buttonNext.addEventListener("click", function(){
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("hide-slide");
      slides[i].classList.remove("hide-slide-reverse");
      if(slides[i].className.indexOf("show-slide-reverse") === -1) {
        slides[i].classList.remove("slide-right");
      }
      if (slides[i].className.indexOf("show-slide-reverse")>-1) {
        slides[i].classList.remove("slide-right");
        slides[i].classList.remove("show-slide-reverse");
        slides[i].classList.add("show-slide");
      }
    }
    if (slides[counter].className.indexOf("show-slide")>-1) {
      slides[counter].classList.remove("show-slide");
      slides[counter].classList.add("hide-slide");
    }
    counter++;
    if (counter === slides.length) {
      counter = 0;
    }
    slides[counter].classList.add("show-slide");
});

buttonPrev.addEventListener("click", function(){
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("hide-slide");
      slides[i].classList.remove("hide-slide-reverse");
          if(slides[i].className.indexOf("show-slide") === -1) {
            slides[i].classList.add("slide-right");
          }
          if (slides[i].className.indexOf("show-slide")>-1) {
            slides[i].classList.add("slide-right");
            slides[i].classList.remove("show-slide");
            slides[i].classList.add("show-slide-reverse");
          }
    }
    if (slides[counter].className.indexOf("show-slide-reverse")>-1) {
      slides[counter].classList.remove("show-slide-reverse");
      slides[counter].classList.add("hide-slide-reverse");
    }

    counter--;
    if (counter < 0) {
      counter = slides.length-1;
    }
    slides[counter].classList.add("show-slide-reverse");
});

// zdjęcia------------------------------------------------------
var images = document.querySelectorAll(".middle-img img");

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
//calculator---------------------------------------------------
var arrow = document.querySelectorAll(".calc-arrow");
var chairList = document.querySelectorAll(".calc-list.chair li");
var fabricList = document.querySelectorAll(".calc-list.fabric li");
var checkbox = document.querySelector('#checkbox_1');

var chairNameSpan = document.querySelector(".chair-name");
var chairFabricSpan = document.querySelector(".fabric-name");
var TransportSpan = document.querySelector(".transport");

var chairNameData = document.querySelector(".chair-name-data");
var chairFabricData = document.querySelector(".fabric-data");
var TransportData = document.querySelector(".transport-data");
var sumSpan = document.querySelector(".calc-sum-span");

var sum = 0;
var chairP = 0;
var fabricP = 0;
var transP = 0;


for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("visible");
  });
}
function getSum(chairP, transP, fabricP){
  sum = (chairP + transP + fabricP);
  sumSpan.innerHTML = sum + " zł";
};
getSum();

for (var i = 0; i < chairList.length; i++) {
  chairList[i].addEventListener("click", function(){
  chairNameSpan.innerHTML = this.innerText;
  chairNameData.innerHTML = this.dataset.price;
  chairP = Number(this.dataset.price);
  getSum(chairP, transP, fabricP);
});//dorobić funkcjonalność przy zmianie fotela zmiana ceny
}


for (var i = 0; i < fabricList.length; i++) {
  fabricList[i].addEventListener("click", function(){
    chairFabricSpan.innerHTML = this.innerText;
    chairFabricData.innerHTML = this.dataset.price;
    fabricP = Number(this.dataset.price);
    getSum(chairP, transP, fabricP);

  });//dorobić funkcjonalność przy zmianie fotela zmiana ceny
}

checkbox.addEventListener("change", function(){
    if (checkbox.checked === true) {
    TransportSpan.innerText = "Transport";
    TransportData.innerText = 80;
    transP = 80;
    }
    else {
    TransportSpan.innerText = "";
    TransportData.innerText = "";
    transP = 0;
    }
    getSum(chairP, transP, fabricP);

});
