function startCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const format = counter.getAttribute("data-format"); // Get format type
    const speed = target / 100; // Adjust speed for smooth animation

    let count = 0;

    const updateCount = () => {
        count += speed;
        if (count < target) {
            counter.innerText = Math.ceil(count) + format; // Append correct symbol
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = target + format; // Final number with correct symbol
        }
    };

    updateCount();
}

function checkVisibility() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        
        // Ensure animation runs **ONLY IF NOT ALREADY STARTED**
        if (rect.top < window.innerHeight && rect.bottom > 0 && !counter.classList.contains("counted")) {
            counter.classList.add("counted"); // Mark as counted
            startCounter(counter);
        }
    });
}

// Run once on load and on scroll
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);