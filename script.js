/* ==========================================
       PAGE NAVIGATION
       ========================================== */

    function nextPage(pageNumber) {

        document.querySelectorAll(".page").forEach(function(page) {
            page.classList.remove("active");
        });

        const next = document.getElementById("page" + pageNumber);

        if (next) {
            next.classList.add("active");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* ==========================================
       FLOATING HEARTS
       ========================================== */

    function createHeart() {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        const hearts = ["❤️", "💕", "💗", "💖", "💓"];

        heart.innerText =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        heart.style.animationDuration =
            (Math.random() * 2 + 3) + "s";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 5000);
    }


    setInterval(createHeart, 1800);