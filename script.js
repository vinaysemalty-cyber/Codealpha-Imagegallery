// ============================
// GRAB THE ELEMENTS WE NEED
// ============================

const gallery = document.getElementById("gallery");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeBtn");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");


// ============================
// GET ALL GALLERY IMAGES
// ============================

const galleryImages = gallery.querySelectorAll(".gallery-item img");


// Current Image Index

let currentIndex = 0;


// ============================
// OPEN THE LIGHTBOX
// ============================

galleryImages.forEach(function (image, index) {

    image.addEventListener("click", function () {

        currentIndex = index;

        lightboxImg.src = image.src;

        lightboxImg.alt = image.alt;

        lightbox.classList.add("active");

    });

});


// ============================
// SHOW IMAGE FUNCTION
// ============================

function showImage(index) {

    if (index < 0) {

        currentIndex = galleryImages.length - 1;

    }

    else if (index >= galleryImages.length) {

        currentIndex = 0;

    }

    else {

        currentIndex = index;

    }


    lightboxImg.src = galleryImages[currentIndex].src;

    lightboxImg.alt = galleryImages[currentIndex].alt;

}


// ============================
// NEXT BUTTON
// ============================

nextBtn.addEventListener("click", function () {

    showImage(currentIndex + 1);

});


// ============================
// PREVIOUS BUTTON
// ============================

prevBtn.addEventListener("click", function () {

    showImage(currentIndex - 1);

});


// ============================
// CLOSE LIGHTBOX
// ============================

closeBtn.addEventListener("click", function () {

    lightbox.classList.remove("active");

});


// Close by clicking background

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


// ============================
// KEYBOARD SHORTCUTS
// ============================

document.addEventListener("keydown", function (event) {

    // ESC = Close Lightbox

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }


    // Only navigate when lightbox is open

    if (!lightbox.classList.contains("active")) {

        return;

    }


    // RIGHT ARROW = NEXT IMAGE

    if (event.key === "ArrowRight") {

        event.preventDefault();

        showImage(currentIndex + 1);

    }


    // LEFT ARROW = PREVIOUS IMAGE

    else if (event.key === "ArrowLeft") {

        event.preventDefault();

        showImage(currentIndex - 1);

    }


    // HOME = FIRST IMAGE

    else if (event.key === "Home") {

        event.preventDefault();

        showImage(0);

    }


    // END = LAST IMAGE

    else if (event.key === "End") {

        event.preventDefault();

        showImage(galleryImages.length - 1);

    }

});
