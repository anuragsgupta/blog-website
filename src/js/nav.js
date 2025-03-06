const sd = document.querySelectorAll("[data-nav-link]");
    
// console.log(window.location.pathname);

sd.forEach(link => {
    if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("class", "active");
}
})