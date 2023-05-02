
function videoAllign(windowSize) {
    if (windowSize.matches) {

        document.getElementById("hiddenVid").style.display = "none";
    } else {
        document.getElementById("hiddenVid").style.display = "block";
    }
}

var windowSize = window.matchMedia("(max-width: 700px)");
videoAllign(windowSize);
windowSize.addListener(videoAllign); 

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

function updateGalleryPos() {
    for (let index = 0; index < (images.length - 1); index++) {
        document.getElementById(`galleryPic${index + 1}`).src = images[(counter + 1 + index) % images.length];
   }
}

function next() {
    counter--;
    if (counter < 0) {counter += images.length;}
    document.getElementById("mainImg").src =
        images[counter % images.length];
    bigPic = images[counter % images.length];
    document.getElementById("picCounter").innerText =
        (counter % images.length) + 1;

    updateGalleryPos()
    updateCounter();
    updateGallerySrc();
}

function back() {
    counter++;
    document.getElementById("mainImg").src =
        images[counter % images.length];
    document.getElementById("picCounter").innerText =
        (counter % images.length) + 1;
    updateGalleryPos()
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
