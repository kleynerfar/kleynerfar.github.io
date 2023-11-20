//segundos
$(document).ready(function() {
    let currentImageIndex = 0;
    const $images = $(".carousel-image");
    const totalImages = $images.length;
  
    function showImage(index) {
      $images.hide();
      $images.eq(index).show();
    }
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      showImage(currentImageIndex);
    }
  
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
      showImage(currentImageIndex);
    }
  
    showImage(currentImageIndex);
  
    const interval = setInterval(nextImage, 8000);
  
    $(".right-arrow").click(function() {
      clearInterval(interval);
      nextImage();
      interval = setInterval(nextImage, 8000);
    });
  
    $(".left-arrow").click(function() {
      clearInterval(interval);
      prevImage();
      interval = setInterval(nextImage, 8000);
    });
  });
//pasar imagenes 

(function () {

    let boton = document.getElementById("boton");
    let nav = document.getElementById("menu")
    let con = true
    function menu() {
        if (con) {
            nav.style.left = "0"
            con = false
        } else {
            nav.style.left = "-200%"
            con = true
        }

    }


    boton.addEventListener("click", menu)

    $(".item").click(function(){
        let target=$(this).parent().children(".slide")
        $(target).slideToggle()
    })

}())