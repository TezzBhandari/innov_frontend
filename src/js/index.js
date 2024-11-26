const CircleWidth = 10;
const CircleHeight = 10;

function GetCursorPosition() {
    document.addEventListener("mousemove", (e) => {
        MoveCircle(e.clientX, e.clientY);
    });
}


function ToggleMobileSubmenu() {
    const mobileDropBtn = document.getElementById("mob_drop_submenu");
    const mobileSubMenu = document.getElementById("mob_submenu");

    let open = false;
    mobileDropBtn.addEventListener("click", () => {
        if (open) {
            mobileSubMenu.style.height = "100%";
            mobileDropBtn.style.transform = "rotate(180deg)";
        } else {
            mobileSubMenu.style.height = "0";
            mobileDropBtn.style.transform = "rotate(0)";
        }
        open = !open;
    });
}

function ToggleNavbar() {
    const crossBtn = document.getElementById("cross_btn");
    const hamburgerBtn = document.getElementById("hamburger_btn");
    const mobileNav = document.getElementById("mobile_menu");

    hamburgerBtn.addEventListener("click", () => {
        mobileNav.style.transform = "translateX(0)";
    });

    crossBtn.addEventListener("click", () => {
        mobileNav.style.transform = "translateX(102%)";
    });
}

function ServiceCardObserverAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("card_animate");
            } else {
                entry.target.classList.remove("card_animate");
            }
        });
    });

    const serviceCards = document.querySelectorAll(".service_card");
    serviceCards.forEach((sc) => observer.observe(sc));
}

function PortfolioTitleObserverAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("portfolio_title_animation");
            } else {
                entry.target.classList.remove("portfolio_title_animation");
            }
        });
    });

    const portfolioHeading = document.getElementById("portfolio_heading");
    observer.observe(portfolioHeading);
}

function TechStackObserverAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("portfolio_title_animation");
            } else {
                entry.target.classList.remove("portfolio_title_animation");
            }
        });
    });

    const techStackHeading = document.getElementById("tech_stack_heading");
    observer.observe(techStackHeading);
}

function MoveCircle(x, y) {
    const circle = document.getElementById("circle");
    if (x <= 0 || y <= 0) {
        circle.style.width = 0;
        circle.style.height = 0;
        return;
    } else {
        circle.style.width = `${CircleWidth}px`;
        circle.style.height = `${CircleHeight}px`;
    }
    circle.style.transform = `translate(${x - CircleWidth / 2}px, ${y - CircleHeight / 2}px)`;
}

function CurtainWelcomeMessage() {
    window.addEventListener("load", () => {
        // Selecting the SVG to create the timeline
        const svg = document.getElementById("svg");
        const tl = gsap.timeline();

        // SVG paths for animation
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        // Animate heading text
        tl.from(".loader-wrap-heading", {
            y: 200,
        })
            .to(".loader-wrap-heading", {
                delay: 1,
                y: -500,
                ease: "power2.in",
            })
            // Animate SVG path to curve and then flatten
            .to(svg, {
                duration: 0.8,
                attr: { d: curve },
                ease: "power2.in",
            })
            .to(svg, {
                duration: 0.8,
                attr: { d: flat },
                ease: "power2.out",
            })
            .add(() => {
                const frame = document.getElementById("curtain");
                frame.remove();
            });
    });
}

function AddCopyrightDate() {
    const copyrightDate = document.getElementById("copyright_date");
    const date = new Date();
    copyrightDate.innerHTML = `${date.getFullYear()}`;
}

function BannerObserverAnimation() {
    const bannerDescObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("banner_animation");
            } else {
                entry.target.classList.remove("banner_animation");
            }
        });
    });

    const bannerImgObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("banner_animation");
            } else {
                entry.target.classList.remove("banner_animation");
            }
        });
    });

    const bannerDesc = document.getElementById("banner_desc");
    const bannerImg = document.getElementById("banner_img");

    bannerDescObserver.observe(bannerDesc);
    bannerImgObserver.observe(bannerImg);
}
function InnovObserverAnimation() {
    const innovDescObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("innov_animation");
            } else {
                entry.target.classList.remove("innov_animation");
            }
        });
    });

    const innovImgObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("innov_animation");
            } else {
                entry.target.classList.remove("innov_animation");
            }
        });
    });

    const innovDesc = document.getElementById("innov_desc");
    const innovImg = document.getElementById("innov_img");

    innovDescObserver.observe(innovDesc);
    innovImgObserver.observe(innovImg);
}

document.addEventListener("DOMContentLoaded", () => {
    ToggleNavbar();
    ServiceCardObserverAnimation();
    PortfolioTitleObserverAnimation();
    AddCopyrightDate();
    CurtainWelcomeMessage();
    TechStackObserverAnimation();
    BannerObserverAnimation();
    InnovObserverAnimation();
    ToggleMobileSubmenu();
    GetCursorPosition();
});
