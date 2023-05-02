
function videoAllign(windowSize) {
    if (windowSize.matches) {

        document.getElementById("hiddenVid").style.display = "none";
    } else {
        document.getElementById("hiddenVid").style.display = "block";
    }
}

var windowSize = window.matchMedia("(max-width: 700px)");
videoAllign(windowSize); // Call listener function at run time
windowSize.addListener(videoAllign); // Attach listener function on state changes

let images = [
    "media/3352671.jpg",
    "media/pexels-polina-kovaleva-8405035.jpg",
    "media/8310253.jpg",
    "media/3376428.jpg",
    "media/hush-naidoo-jade-photography-_Pyzu4BgTa8-unsplash.jpg",
    "media/pexels-polina-kovaleva-8404994.jpg",
    "media/pexels-hatice-baran-13617132.jpg",
];
hideLightbox();
let counter = 0;
let bigPic = images[0];
let galleryPic6Src = "";
let galleryPic5Src = "";
let galleryPic4Src = "";
let galleryPic3Src = "";
let galleryPic2Src = "";
let galleryPic1Src = "";

function updateGallerySrc() {
    galleryPic6Src = document.getElementById("galleryPic6").src;
    galleryPic5Src = document.getElementById("galleryPic5").src;
    galleryPic4Src = document.getElementById("galleryPic4").src;
    galleryPic3Src = document.getElementById("galleryPic3").src;
    galleryPic1Src = document.getElementById("galleryPic1").src;
    galleryPic2Src = document.getElementById("galleryPic2").src;
}

function updateCounter() {
    document.getElementById("maxPics").innerText = images.length;
}

function next() {
    counter--;
    if (counter < 0) {
        counter += images.length;
    }
    document.getElementById("mainImg").src =
        images[counter % images.length];
    bigPic = images[counter % images.length];
    document.getElementById("picCounter").innerText =
        (counter % images.length) + 1;
    document.getElementById("galleryPic1").src =
        images[(counter + 1) % images.length];
    document.getElementById("galleryPic2").src =
        images[(counter + 2) % images.length];
    document.getElementById("galleryPic3").src =
        images[(counter + 3) % images.length];
    document.getElementById("galleryPic4").src =
        images[(counter + 4) % images.length];
    document.getElementById("galleryPic5").src =
        images[(counter + 5) % images.length];
    document.getElementById("galleryPic6").src =
        images[(counter + 6) % images.length];
    updateCounter();
    updateGallerySrc();
}

function back() {
    counter++;
    // let counterback = 1;

    document.getElementById("mainImg").src =
        images[counter % images.length];
    document.getElementById("picCounter").innerText =
        (counter % images.length) + 1;
    // counter;
    bigPic = images[counter % images.length];
    document.getElementById("galleryPic1").src =
        images[(counter + 1) % images.length];
    document.getElementById("galleryPic2").src =
        images[(counter + 2) % images.length];
    document.getElementById("galleryPic3").src =
        images[(counter + 3) % images.length];
    document.getElementById("galleryPic4").src =
        images[(counter + 4) % images.length];
    document.getElementById("galleryPic5").src =
        images[(counter + 5) % images.length];
    document.getElementById("galleryPic6").src =
        images[(counter + 6) % images.length];

    updateCounter();
    updateGallerySrc();
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
hideLightbox();
