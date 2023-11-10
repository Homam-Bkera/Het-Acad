// Get Slider Item 
var articles = Array.from(document.querySelectorAll('.articles .article'))

// Get Count Of Slides
var SlideCount = articles.length;

// Set Current Slide
let CurrentSlide=1;

// Create btn Slide
var paginationElement = document.createElement('ul');

// Set Id on Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (let i = 1; i <= SlideCount; i++) {

    // Create  li
    var paginationItem = document.createElement('li');

    // Set Id on Created Ul Element
    paginationItem.setAttribute('date-index',i);

    // append Items to The Main Ul List
    paginationElement.appendChild(paginationItem);
}

// Add the Ul list to The Page
document.getElementById('slider-btn').appendChild(paginationElement);

// Get The New Created Ul 
var paginationCreatedUl = document.getElementById('pagination-ul');

// Create The Checker Function
function theChecker() {

    // Remove All Active Classes on articles
    articles.forEach(element => {
        element.classList.remove('article-active')
    });

    // Remove All Active Classes On slider-btn
    var sliderBtn = Array.from(document.querySelectorAll('#pagination-ul li'))
    sliderBtn.forEach(element => {
        element.classList.remove('active-btn')
    });


    // set Active class On Current Slide
    articles[CurrentSlide - 1].classList.add('article-active');

    // Set Active Class On Current Pagination Item
    paginationCreatedUl.children[CurrentSlide - 1].classList.add('active-btn');

}

// Loop Trough All slider-Btn
var sliderBtns = Array.from(document.querySelectorAll('#pagination-ul li'))

for (var i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].onclick = function () {
        CurrentSlide = parseInt(this.getAttribute('date-index'));
        theChecker();
    }
}


// Trigger The Checker Function
theChecker();

// Animation Scrolling
if (document.querySelectorAll('#landing').length>=1) {
    
// Animation Categories
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-categories-animation')
        }
    })
});

let sectionCategories = document.querySelectorAll('#section-categories');
for (let i = 0; i < sectionCategories.length; i++) {
    const elements = sectionCategories[i];
    observer1.observe(elements);
}

// Animation Article
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('image-main-article-animation')
        }
    })
});

let imageMainArticleAnimation=document.querySelectorAll("#image-main-article-animation");
for (let i = 0; i < imageMainArticleAnimation.length; i++) {
    const elements = imageMainArticleAnimation[i];
    observer2.observe(elements);
}
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('content-main-article-animation')
        }
    })
});

let articleContent=document.querySelectorAll("#article-content");
for (let i = 0; i < articleContent.length; i++) {
    const elements = articleContent[i];
    observer3.observe(elements);
}

// Animation best teacher
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('best-teachers-animation')
        }
    })
});

let bestTeachersAnimation=document.querySelectorAll("#best-teachers-animation");
for (let i = 0; i < bestTeachersAnimation.length; i++) {
    const elements = bestTeachersAnimation[i];
    observer4.observe(elements);
}

// Animation  Form contact us
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('picture-form-animation')
        }
    })
});

let pictureFormAnimation=document.querySelectorAll("#picture-form-animation");
for (let i = 0; i < pictureFormAnimation.length; i++) {
    const elements = pictureFormAnimation[i];
    observer5.observe(elements);
}

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('form-animation')
        }
    })
});

let formAnimation=document.querySelectorAll("#form-animation");
for (let i = 0; i < formAnimation.length; i++) {
    const elements = formAnimation[i];
    observer6.observe(elements);
}

// Animation  Footer
const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footer-content-column-animation')
        }
    })
});

let footerContentColumn=document.querySelectorAll(".footer-content-column");
for (let i = 0; i < footerContentColumn.length; i++) {
    const elements = footerContentColumn[i];
    observer7.observe(elements);
}
}


// Show Popup
var showPopup=document.querySelector("#showPopup");
showPopup.onclick=function(){
    document.querySelector("#section-popup").classList.add("section-popup");
    document.querySelector("#section-popup").classList.remove("section-popup-display-none-1");
}

// Close Popup
var sectionPopup=document.querySelector("#section-popup");
var btnPopup=document.querySelector(".btn-popup");
btnPopup.onclick=function () {
    document.querySelector("#section-popup").classList.add("section-popup-display-none-1");
}

sectionPopup.onclick=function () {
    document.querySelector("#section-popup").classList.add("section-popup-display-none-1")
}

// Navbar Mobile
function closeNav(){
    document.querySelector('#main-nav-mobile').classList.add('main-nav-mobile-close')
}
function openNav(){
    document.querySelector('#main-nav-mobile').classList.remove('main-nav-mobile-close')
}
    // dropdown slide bar
function dropdownRemove() {
    var dropdown=document.querySelector('#dropdown');
    let itemRemove=document.querySelector('#dropdown').className;
    if (itemRemove=='dropdown-remove') {
        dropdown.classList.remove("dropdown-remove");
        dropdown.classList.add("dropdown");
    } else {
        dropdown.classList.remove("dropdown");
        dropdown.classList.add("dropdown-remove");
    }
}

// filter courses of Category
let btnCategory = document.querySelectorAll(".categories .category");
let categoryCourses = document.querySelectorAll(".viewer-courses .viewer-course");

btnCategory.forEach((element)=>{
    element.addEventListener("click",removeActiveCategory)
    element.addEventListener("click",showCourses)
})

function removeActiveCategory(){
    btnCategory.forEach((element)=>{
        element.classList.remove("category-active");
        this.classList.add("category-active")
    })
}
function showCourses() {
    const categoryAnimate = [
        { transform: "scale(0)" },
        { transform: "scale(1)" },
    ];
    const categoryAnimateTiming = {
        duration: 700,
        iterations: 1,
    };
    categoryCourses.forEach((el) => {
        el.style.display = "none";
        el.animate(categoryAnimate, categoryAnimateTiming);
    });
    document.querySelectorAll(this.dataset.category).forEach((el => {
        el.style.display = "inline-block";
    }))
}