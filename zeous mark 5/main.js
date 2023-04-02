{
    <script src=" https://cdn.jsdelivr.net/npm/typed.js@2.0.12">

    </script>
    let menuBox = document.getElementById("menuBox");
    let menuIcon = document.getElementById("menuIcon");

    menuIcon.onclick = function () {
        menuBox.classList.toggle("open-menu");
        // if (menuBox.classList.contains("open-menu"));
        // menuIcon.src = <i class="fa-solid fa-xmark-large"></i>
    }


    var options = {
        strings: ["Coder",
            "Developer",
            "programmer"],
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 1500,
        loop: true
    };

    var typed = new Typed('.auto-type', options);
}
