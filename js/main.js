/* =====================================
   EXPERIENCES CAROUSEL
===================================== */

const experienceSlider = document.getElementById("experience-grid");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

if (experienceSlider && nextBtn && prevBtn) {

    nextBtn.addEventListener("click", () => {
        experienceSlider.scrollBy({
            left: 420,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        experienceSlider.scrollBy({
            left: -420,
            behavior: "smooth"
        });
    });

}

/* =====================================
   GALLERY CAROUSEL
===================================== */

const gallerySlider = document.getElementById("gallery-grid");

const nextGallery = document.querySelector(".next-gallery");
const prevGallery = document.querySelector(".prev-gallery");

if (gallerySlider && nextGallery && prevGallery) {

    nextGallery.addEventListener("click", () => {
        gallerySlider.scrollBy({
            left: 420,
            behavior: "smooth"
        });
    });

    prevGallery.addEventListener("click", () => {
        gallerySlider.scrollBy({
            left: -420,
            behavior: "smooth"
        });
    });

}
