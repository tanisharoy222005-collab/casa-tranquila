const experienceSlider = document.getElementById("experience-grid");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

if(nextBtn && prevBtn){

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
