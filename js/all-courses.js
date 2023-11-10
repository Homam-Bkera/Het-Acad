
function filterBtn(para, text) {
    loading();
    const elements = document.querySelectorAll('#list-btn .btn-filter');

    if (para == 'all') {
        elements.forEach(element => {
            element.classList.remove('category-active');
        });
        document.getElementById(para).classList.add('category-active');
        itemsFilter(para, text);
        let _itemsFilter = document.querySelector('.viewer-filter #items-filter')
        while (_itemsFilter.firstChild) {
            _itemsFilter.removeChild(_itemsFilter.firstChild);
        }
    }else{
        document.getElementById('all').classList.remove('category-active');

        document.getElementById(para).classList.add('category-active');
        itemsFilter(para, text);
    
    }


}

function itemsFilter(para, text) {

    let _itemsFilter = document.querySelector('.viewer-filter #items-filter')

    if (document.getElementById('item-filter-' + para)) {
        onRemoveFilterClicked(para)
        return;

    }
    // create item filter
    let item = document.createElement('div');
    item.classList.add('item-filter');
    item.id = 'item-filter-' + para;

    // add remove btn to item filter
    let removeItem = document.createElement('div');
    removeItem.classList.add('remove-item');
    removeItem.addEventListener(
        "click",
        () => {
            onRemoveFilterClicked(para)
        });

    let spanRemove_1 = document.createElement('span');
    let spanRemove_2 = document.createElement('span');
    removeItem.appendChild(spanRemove_1);
    removeItem.appendChild(spanRemove_2);
    item.appendChild(removeItem);

    let paragraph = document.createElement('p');
    let textParagraph = document.createTextNode(text);
    paragraph.appendChild(textParagraph);
    item.appendChild(paragraph);
    _itemsFilter.appendChild(item)
}
function onRemoveFilterClicked(para) {
    document.getElementById('item-filter-' + para).remove();
    document.getElementById(para).classList.remove('category-active');
    showFilterdCourses()
    loading();

}

// filter courses of Category
let btnsCategories = document.querySelectorAll("#list-btn .btn-filter");

btnsCategories.forEach((element) => {
    element.addEventListener("click", showFilterdCourses)
})

function ActiveCategory() {
    this.classList.add("category-active");
}

function showFilterdCourses() {
    let categoriesCourses = document.querySelectorAll(".viewer-courses .viewer-course");

    const categoryAnimate = [
        { transform: "scale(0)" },
        { transform: "scale(1)" },
    ];
    const categoryAnimateTiming = {
        duration: 700,
        iterations: 1,
    };
    categoriesCourses.forEach((el) => {
        el.style.display = "none";
        el.animate(categoryAnimate, categoryAnimateTiming);
    });

    const elements = document.querySelectorAll('.category-active');
    const elementIds = [];
    elements.forEach(item => elementIds.push(item.id));
    categoriesCourses.forEach((el) => {
        const found = elementIds.some(item => el.classList.contains(item));
        if (found)
            el.style.display = "inline-block";
    });
}

function loading() {
    let loading=document.querySelector("#section-loading");
    loading.style.display="block";
    setTimeout(() => {
        loading.style.display="none";
    }, 800);
}
