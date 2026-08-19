// ==========================================
// 1. FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// 2. MOBILE NAVIGATION MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    // Close menu when clicking a navigation link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}


// ==========================================
// 3. LIGHT / DARK MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");


        if (document.body.classList.contains("light")) {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        } else {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        }

    });

}


// ==========================================
// 4. REMEMBER THEME
// ==========================================

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.textContent = "☾";
    }

}


// ==========================================
// 5. TERMINAL TYPING EFFECT
// ==========================================

const typingElement =
    document.querySelector(".typing");

const commands = [

    "docker ps",

    "git push origin main",

    "kubectl get nodes",

    "terraform plan",

    "az storage account list",

    "jenkins build deploy"

];

let commandIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeCommand() {

    if (!typingElement) {
        return;
    }


    const currentCommand =
        commands[commandIndex];


    // Typing

    if (!deleting) {

        typingElement.textContent =
            currentCommand.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        // Finished typing

        if (
            characterIndex ===
            currentCommand.length
        ) {

            deleting = true;

            setTimeout(
                typeCommand,
                1500
            );

            return;

        }

    }


    // Deleting

    else {

        typingElement.textContent =
            currentCommand.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        // Finished deleting

        if (characterIndex === 0) {

            deleting = false;

            commandIndex =
                (commandIndex + 1)
                % commands.length;

        }

    }


    setTimeout(
        typeCommand,
        deleting ? 45 : 80
    );

}


// Start terminal animation

typeCommand();


// ==========================================
// 6. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


// ==========================================
// 7. NAVBAR ACTIVE SECTION
// ==========================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


// ==========================================
// 8. BUTTON HOVER EFFECT
// ==========================================

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-3px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0)";

        }
    );

});


// ==========================================
// 9. PROJECT CARD INTERACTION
// ==========================================

const projectCard =
    document.querySelector(
        ".project-card"
    );


if (projectCard) {

    projectCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                projectCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) *
                -1.5;


            const rotateY =
                ((x - centerX) /
                    centerX) *
                1.5;


            projectCard.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-3px)`;

        }
    );


    projectCard.addEventListener(
        "mouseleave",
        () => {

            projectCard.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

        }
    );

}


// ==========================================
// 10. CONSOLE MESSAGE
// ==========================================

console.log(
    "%cVipperla Tharun | Multi-Cloud DevOps Engineer",
    "color:#63e6a0;font-size:18px;font-weight:bold;"
);

console.log(
    "%cPortfolio initialized successfully 🚀",
    "color:#6ca8ff;font-size:14px;"
);