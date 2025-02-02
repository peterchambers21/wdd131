const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    const menu = document.querySelector("#menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img class="full" src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");  
    if (viewer) {
        viewer.remove(); 
    }
}

function viewHandler(event) {
    const clickedImage = event.target;

    if (clickedImage.tagName === "IMG") {
        const imageName = clickedImage.src.split("-");
        const newName = imageName[0] + "-full.jpeg";

        const viewerHTML = viewerTemplate(newName, "Full Image");
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
