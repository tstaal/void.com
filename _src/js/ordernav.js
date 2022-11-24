var s1next = document.getElementById("slide-1-next");
var s2prev = document.getElementById("slide-2-prev");
var s2next = document.getElementById("slide-2-next");
var s3prev = document.getElementById("slide-2-prev");
var order = document.getElementById("order");

var bc = document.querySelector(".breadcrumbs");
var bc2 = document.getElementById("breadcrumb-2");
var bc3 = document.getElementById("breadcrumb-3");

var crumbs = document.querySelectorAll(".breadcrumbs__link");

var bodyRect = document.body.getBoundingClientRect(),
    elemRect = bc.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top - 100;

var navbuttons = document.querySelectorAll(".btn__order");

function scrolltop() {
    window.scrollTo({top: offset, behavior: 'smooth'});
}

navbuttons.forEach(btn => {
    btn.addEventListener("click", ev => {
        if (btn.id == "slide-1-next" || btn.id === "slide-3-prev") {
            order.classList.remove("page__3");
            order.classList.add("page__2");
            bc2.classList.remove("disabled");
            bc3.classList.add("disabled");
            scrolltop();
        } else if (btn.id == "slide-2-prev" ) {
            order.classList.remove("page__2");
            order.classList.remove("page__3");
            bc2.classList.add("disabled");
            scrolltop();
        } else if (btn.id == "slide-2-next" ) {
            order.classList.remove("page__2");
            order.classList.add("page__3");
            bc3.classList.remove("disabled");
            scrolltop();
        }
    })
});

crumbs.forEach(crumb => {
    crumb.addEventListener("click", ev => {
        if (crumb.parentElement.id == "breadcrumb-2") {
            order.classList.remove("page__3");
            order.classList.add("page__2");
            bc2.classList.remove("disabled");
            bc3.classList.add("disabled");
            scrolltop();
        } else if (crumb.parentElement.id == "breadcrumb-1") {
            order.classList.remove("page__2");
            order.classList.remove("page__3");
            bc2.classList.add("disabled");
            bc3.classList.add("disabled");
            scrolltop();
        } else if (crumb.parentElement.id == "breadcrumb-3") {
            order.classList.remove("page__2");
            order.classList.add("page__3");
            bc3.classList.remove("disabled");
            scrolltop();
        }
    })
});