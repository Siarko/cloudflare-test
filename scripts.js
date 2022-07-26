document.addEventListener('DOMContentLoaded', function () {
  let thumbnails = document.getElementsByClassName("thumbnail");
  let mainImage = document.getElementById('mainImage');

  for (let i = 0; i < thumbnails.length; i++) {
    let image = document.createElement('img'); //to samo co new Image();
    let thumb = thumbnails[i];
    let imageId = "image_" + i;

    thumb.dataset.id = imageId;
    image.id = imageId;
    image.src = thumb.src;
    mainImage.appendChild(image);

    thumb.addEventListener('mouseover', function () {
      let bigImage = document.getElementById(this.dataset.id);
      bigImage.classList.add('visible');
    });

    thumb.addEventListener('mouseleave', function () {
      let bigImage = document.getElementById(this.dataset.id);
      bigImage.classList.remove('visible');
    });

  }

});
