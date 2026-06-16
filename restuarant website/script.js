/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hideLoader");
        }, 700);
    }

});

/* ==========================================
   MOBILE MENU
========================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("activeMenu");

    });

}

/* ==========================================
   DARK MODE
========================================== */

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkMode");
}

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("darkMode");

        if (document.body.classList.contains("darkMode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (topButton) {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    }

});

if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================================
   SCROLL ANIMATION
========================================== */

const animateItems = document.querySelectorAll(".animateItem");

function revealAnimation() {

    animateItems.forEach(function (item) {

        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < window.innerHeight - 100) {
            item.classList.add("showAnimation");
        }

    });

}

window.addEventListener("scroll", revealAnimation);
window.addEventListener("load", revealAnimation);

/* ==========================================
   MENU SEARCH
========================================== */

const menuSearch = document.getElementById("menuSearch");
const menuCards = document.querySelectorAll(".menuCard");

if (menuSearch) {

    menuSearch.addEventListener("keyup", function () {

        const searchValue = menuSearch.value.toLowerCase();

        menuCards.forEach(function (card) {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

/* ==========================================
   MENU CATEGORY FILTER
========================================== */

const filterButtons = document.querySelectorAll(".filterButton");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("activeFilter");
        });

        button.classList.add("activeFilter");

        const category = button.getAttribute("dataCategory");

        menuCards.forEach(function (card) {

            if (
                category === "all" ||
                card.getAttribute("dataCategory") === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".galleryImage");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        if (lightbox && lightboxImage) {

            lightbox.style.display = "flex";
            lightboxImage.src = image.src;

        }

    });

});

if (lightboxClose) {

    lightboxClose.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counterNumbers = document.querySelectorAll(".counterNumber");

function startCounter() {

    counterNumbers.forEach(function (counter) {

        const target = Number(counter.getAttribute("dataTarget"));

        let current = 0;

        const increase = target / 200;

        function updateCounter() {

            current += increase;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        }

        if (
            counter.getBoundingClientRect().top <
            window.innerHeight - 100
        ) {
            updateCounter();
        }

    });

}

window.addEventListener("scroll", startCounter);

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");

        const successMessage = document.getElementById("successMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let valid = true;

        if (name.value.trim() === "") {
            nameError.textContent = "Name is required";
            valid = false;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            emailError.textContent = "Email is required";
            valid = false;

        } else if (!emailPattern.test(email.value)) {

            emailError.textContent = "Enter a valid email";
            valid = false;

        }

        if (subject.value.trim() === "") {
            subjectError.textContent = "Subject is required";
            valid = false;
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Message is required";
            valid = false;
        }

        if (valid) {

            successMessage.textContent =
                "Your message has been sent successfully.";

            contactForm.reset();

        }

    });

}

/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

const navigationItems =
    document.querySelectorAll(".navLinks a");

navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("activeMenu");
        }

    });

});

/* ==========================================
   PAGE READY
========================================== */

console.log("Restaurant Website Loaded Successfully");