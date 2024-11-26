function Tabs() {
    const tabs = document.querySelectorAll(".tab");
    const inactiveClass = "text-[var(--primaryColor)]";
    const activeClass = ["bg-[var(--color-primary)]", "text-white"];
    const tab1 = document.querySelector("#tab1");
    const tabContent = document.querySelectorAll(".tab-content");
    tabs[0].classList.remove(inactiveClass);
    tabs[0].classList.add(...activeClass);

    tab1.classList.remove("hidden");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetContent = document.querySelector(tab.dataset.target);
            tabContent.forEach((content) => {
                content.classList.add("hidden");
            });
            targetContent.classList.remove("hidden");
            tabs.forEach((activeTab) => activeTab.classList.remove(...activeClass));
            tab.classList.remove(inactiveClass);
            tab.classList.add(...activeClass);
        });
    });
}

function Accordin() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
        header.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const targetBody = document.querySelector(header.dataset.target);

            if (targetBody.classList.contains("hidden")) {
                targetBody.classList.remove("hidden");
                targetBody.style.maxHeight = targetBody.scrollHeight + "px";
            } else {
                targetBody.style.maxHeight = 0;

                targetBody.addEventListener(
                    "transitionend",
                    () => {
                        targetBody.classList.add("hidden");
                    },
                    { once: true },
                );
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    Tabs();
    Accordin();
});
