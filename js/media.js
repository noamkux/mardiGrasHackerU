const images = [
    "Media/luckyDog.jpeg",
    "Media/mardiGrasAtNight2.jpeg",
    "Media/mardiGrassYardFreddie.jpg",
    "Media/MArdiGrasPradeAtNight.jpeg",
    "Media/mardiGrassYard4.jpg",
    "Media/MardiGrassGroupPhoto2.jpeg",
    "Media/mardi-gras-fish-eye.avif",
    "Media/pexels-kendall-hoopes-2432110.jpg",
    "Media/mardiGrassYard3.jpg",
    "Media/mardiGrassYard2.jpg",
    "Media/threeWomanWearingMasks.jpg",
    "Media/womanHoldingUmbrella.jpg",
    "Media/womanWaringMasks.jpg",
    "Media/train.jpeg",
    "Media/pexels-mikhail-nilov-9393577.jpg",
    "Media/paradeBackround.jpg",
    "Media/blueMardiGrass.jpg",
    "Media/faisDoSo.jpg"];

let counter = 0;
let bigPic = images[0];

const galleryPics = Array.from({ length: 6 }, (_, index) => document.getElementById(`galleryPic${index + 1}`));

function updateGallerySrc() {
    for (let i = 0; i < galleryPics.length; i++) {
        galleryPics[i].src = images[(counter + i + 1) % images.length];
    }
}

function updateCounter() {
    document.getElementById("maxPics").innerText = images.length;
}

function next() {
    counter--;
    if (counter < 0) {
        counter += images.length;
    }
    document.getElementById("mainImg").src = images[counter % images.length];
    bigPic = images[counter % images.length];
    document.getElementById("picCounter").innerText = (counter % images.length) + 1;

    updateGallerySrc();
    updateCounter();
}

function back() {
    counter++;
    document.getElementById("mainImg").src = images[counter % images.length];
    bigPic = images[counter % images.length];
    document.getElementById("picCounter").innerText = (counter % images.length) + 1;

    updateGallerySrc();
    updateCounter();
}

function showImage(src) {
    document.getElementById("lightbox-image").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function hideImage() {
    document.getElementById("lightbox").style.display = "none";
}

function hideLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// updateGallerySrc();
updateCounter();
hideLightbox();