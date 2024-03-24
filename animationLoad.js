let intersectionOptions = {
    rootMargin: "0px",
    threshold: 0.01,
};

function createSwoopFunction(elementId) {
    function updateSwoop(entries) {
        if (!entries) {
            return;
        }
        let element = document.getElementById(elementId)
        let mostRecentEntry = entries[entries.length - 1]
        let isInView = mostRecentEntry.isIntersecting;
        let isHidden = element.classList.contains("hidden");

        if (isInView && isHidden) {
            element.classList.add("w3-container", "w3-center", "w3-animate-left");
            element.classList.remove("hidden");
        } else if (!isInView && !isHidden) {
            element.classList.add("hidden");
            element.classList.remove("w3-container", "w3-center", "w3-animate-left");
        }
    }

    return updateSwoop;
}

function updateHeader(entries) {
    if (!entries) {
        return;
    }
    let newestEntry = entries[entries.length - 1];
    let headerElement = document.getElementById("navbar");
    if (newestEntry.isIntersecting) {
        headerElement.classList.remove("black");
    } else {
        headerElement.classList.add("black");
    }
}

let lastScrollPosition = 0;

function hideHeaderOnScroll(_scrollEvent) {
    console.log("scroll");
    let container = document.getElementById("container");
    let newScrollPosition = container.scrollTop;

    let headerElement = document.getElementById("navbar")

    if (newScrollPosition > lastScrollPosition) {
        headerElement.classList.add("hidden");
    } else {
        headerElement.classList.remove("hidden");
    }

    lastScrollPosition = newScrollPosition;
}

// Set up swoop animations
let elementIdsToSwoop = []  // Add IDs to this list to swoopify them
for (let elementId of elementIdsToSwoop) {
    let theElement = document.getElementById(elementId);
    theElement.classList.add("hidden");
    let swoopFunction = createSwoopFunction(elementId)
    let theObserver = new IntersectionObserver(swoopFunction, intersectionOptions);
    theObserver.observe(theElement);
}

// Make the header transparent when the video is in view
let videoElement = document.getElementById("videoWrapper");
let videoObserver = new IntersectionObserver(updateHeader, intersectionOptions);
videoObserver.observe(videoElement);

// Hide the header when scrolling down
document.getElementById("container").addEventListener("scroll", hideHeaderOnScroll);


