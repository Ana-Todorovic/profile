let options = {
    rootMargin: "0px",
    threshold: 1.0,
};

function onView(entries) {
    if (entries && entries[0].isIntersecting) {
        document.getElementById("process").classList.add("w3-container", "w3-center", "w3-animate-left");
    }
}

let myCoolElement = document.getElementById("process");
console.log(myCoolElement);
let myCoolObserver = new IntersectionObserver(onView, options);
myCoolObserver.observe(myCoolElement);
