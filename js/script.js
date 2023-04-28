// Табки Our service
const tabsName = document.querySelectorAll(".tabs-title");
const contents = document.querySelectorAll(".content");

for (let i = 0; i < tabsName.length; i++) {
  tabsName[i].addEventListener("click", (event) => {
    let tabsCurrent = event.target.parentElement.children;
    for (let t = 0; t < tabsCurrent.length; t++) {
      tabsCurrent[t].classList.remove("active");
    }
    tabsName[i].classList.add("active");

    let contentsCurrent =
      event.target.parentElement.nextElementSibling.children;
    for (let c = 0; c < contentsCurrent.length; c++) {
      contentsCurrent[c].classList.remove("content-active");
    }
    contents[i].classList.add("content-active");
  });
}
// Табки Our amazing work
const tabsAmazingWork = document.querySelectorAll(".tabs-title-amazing-work");
const contentsAmazingWork = document.querySelectorAll(".content-amazing-work");

for (let i = 0; i < tabsAmazingWork.length; i++) {
  tabsAmazingWork[i].addEventListener("click", (event) => {
    let tabsCurrent = event.target.parentElement.children;
    for (let t = 0; t < tabsCurrent.length; t++) {
      tabsCurrent[t].classList.remove("active");
    }
    tabsAmazingWork[i].classList.add("active");

    let contentsAmazingWorkCurrent =
      event.target.parentElement.nextElementSibling.children;
    for (let c = 0; c < contentsAmazingWorkCurrent.length; c++) {
      contentsAmazingWorkCurrent[c].classList.remove("work-active");
    }
    contentsAmazingWork[i].classList.add("work-active");
  });
}

// Кнопка Load More

const btnLoadMore = document.querySelector(".loadMore");
const cards = Array.from(document.querySelectorAll(".card"));

function openCatalog(){
    btnLoadMore.addEventListener("click", () => {
        cards.forEach(item => item.classList.remove("hidden"));
        btnLoadMore.classList.add("hidden");
    })
}

function response1(){
    if(window.innerWidth > 989){
        btnLoadMore.classList.add("hidden");
        
        cards.forEach((item, index) => {
            item.classList.add("hidden")
            if(index <= 10){
                item.classList.remove("hidden");
            } else if(index > 10){
            btnLoadMore.classList.remove("hidden");
        }
        openCatalog()
        })
    }
}
response1()

// Галерея masonry

let $grid = $(".grid").masonry({
  itemSelector: ".grid-item",
  percentPosition: true,
  columnWidth: ".grid-sizer",
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.masonry();
});

// Карусель співробітників

window.addEventListener("load", () => {
  const left = document.querySelector(".btn-left");
  const right = document.querySelector(".btn-right");

  const slider = document.querySelector(".carusel_slide");
  const images = document.querySelectorAll(".carusel_slide img");

  let counter = 0;
  const stepSize = images[0].clientWidth;

  slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;

  right.addEventListener("click", () => {
    counter >= images.length - 1 ? (counter = -1) : null;
    counter++;
    slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;
  });
  left.addEventListener("click", () => {
    if (counter <= 0) counter = images.length;
    counter--;
    slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;
  });
});

const left = document.querySelector(".btn-left");
const right = document.querySelector(".btn-right");
const texts = document.querySelectorAll(".position");
const minImg = document.querySelectorAll(".carusel-img-min");
let i = 0;

right.addEventListener("click", () =>{

});
left.addEventListener("click", () =>{

});
console.log(texts);