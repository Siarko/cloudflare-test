window.onload = function () {
  var mainImage = document.getElementById("mainImage");
  var images = [];
  var thumbnails = document.getElementsByClassName("thumbnail");
  var currentThumbnail = thumbnails[0];
  currentThumbnail.className += " current";
  
  for (var i = 0; i < thumbnails.length; i++) {
    images.push(new Image());
    images[i].id = "image_" + i;
    mainImage.appendChild(images[i]);
    thumbnails[i].onmouseover = (function () {
      currentThumbnail.className += " current";
      document.getElementById("image_") = this.getAttribute("src");
    });
    thumbnails[i].onmouseleave = function () {
      mainImage.classList.remove("visible");
    };
  }
};
