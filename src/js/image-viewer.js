import PhotoSwipeLightbox from "/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "/dist/photoswipe.esm.js";

const options = {
    gallery: ".image-gallery",
    children: ".image",
    showHideAnimationType: "zoom",
    wheelToZoom: true,
    escKey: true,
    arrowKeys: true,
    mouseMovePan: true,
    initialZoomLevel: "fit",
    secondaryZoomLevel: 2,
    maxZoomLevel: 7,
    pswpModule: PhotoSwipe,
};

const lightbox = new PhotoSwipeLightbox(options);

lightbox.init();
