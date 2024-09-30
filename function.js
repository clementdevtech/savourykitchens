//general items.................................
let genres = document.querySelectorAll('.details');
let menudetails = document.querySelectorAll('.menu-details');
let servicedetails = document.querySelectorAll('.service-details');
let eventsdetails = document.querySelectorAll('.events-details');
let genreContainer = document.getElementById("genre-container");
const genreappend = document.getElementById('image-container1');

// about us  .............

document.addEventListener('DOMContentLoaded', function() {
let buttons = document.querySelectorAll('.button');
let section = document.getElementById('section');
let section1 = document.getElementById('section1');
let content = document.getElementById('content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    section.style.display = 'none';
    section1.style.display = 'none';
    content.style.display = 'block';
  });
});

});



// gallery page fuctionallity............... 
let img = document.querySelectorAll(".album0")
let currentIndex = -1;

img.forEach((photo, index) => {
    photo.addEventListener("click", (event) => {
        var albumImages = document.getElementsByClassName('album');
        for (var j = 0; j < albumImages.length; j++) {
            albumImages[j].style.display = 'none';
        }

        let avoid = document.getElementById('avoid');
        let overlay = document.createElement("div");
        overlay.setAttribute('class', 'overlay');
        let imageContainer = document.createElement("div");
        imageContainer.setAttribute('class', 'image-container');
        let fullScreenImage = document.createElement('img');
        fullScreenImage.src = event.target.src;
        fullScreenImage.alt = event.target.alt;

        let prevArrow = document.createElement('div');
        prevArrow.setAttribute('class', 'arrow arrow-left');
        prevArrow.innerHTML = '&#8249;';

        let nextArrow = document.createElement('div');
        nextArrow.setAttribute('class', 'arrow arrow-right');
        nextArrow.innerHTML = '&#8250;';

        imageContainer.append(fullScreenImage);

        overlay.appendChild(prevArrow);
        overlay.appendChild(imageContainer);
        overlay.appendChild(nextArrow);
        avoid.appendChild(overlay);

        currentIndex = index;

        // Example usage in 'prevArrow' event listener:
        prevArrow.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateFullScreenImage();
            } else {
                prevArrow.style.background = 'none';
                overlay.remove();
                for (var j = 0; j < albumImages.length; j++) {
                    albumImages[j].style.display = 'block';
                }
            }
        });

        // Example usage in 'nextArrow' event listener:
        nextArrow.addEventListener('click', () => {
            if (currentIndex < img.length - 1) {
                currentIndex++;
                updateFullScreenImage();
            } else {
                nextArrow.style.background = 'none';
                overlay.remove();
                for (var j = 0; j < albumImages.length; j++) {
                    albumImages[j].style.display = 'block';
                }
            }
        });
        let historyback = document.getElementById("backarrow");
        historyback.addEventListener('click', () =>{
                           overlay.remove();
                for (var j = 0; j < albumImages.length; j++) {
                    albumImages[j].style.display = 'block';
                }

        });

        function updateFullScreenImage() {
            let nextImageSrc = `photos/img1 (${currentIndex + 1}).jpg`;
            let nextImageAlt = img[currentIndex]; 
            fullScreenImage.src = nextImageSrc;
            fullScreenImage.alt = nextImageAlt;
        }
    });
});



let page = document.getElementById('page');
let gallery = document.getElementById('gallery');
gallery.addEventListener('click',()=>{

    page.style.display='block';
   section.style.display='none';
   section1.style.display='none';
   content.style.display='none';
 document.getElementById("img").style.display='none';  
});


  genres.forEach(genre => {
    genre.parentNode.addEventListener('click', () => {
      genreContainer.innerHTML = '';
      const albumDetails = document.querySelectorAll(".details1");
      genreContainer.style.display = 'flex';
      genreappend.style.display = 'none';
      albumDetails.forEach(detail => {
        document.getElementById("album1").style.display = 'none';
        const text = detail.textContent.toLowerCase();
        const genreText = genre.textContent.toLowerCase();

        if (text.includes(genreText)) {
          const imageClone = detail.parentNode.cloneNode(true);
          genreContainer.appendChild(imageClone);
          
          const historyBack = document.getElementById("backarrow");
          historyBack.addEventListener('click', () => {
            genreContainer.innerHTML = '';
            document.getElementById("album1").style.display = 'flex';
          });
fullScreenInit(imageClone);

        }
      });
    });
  });

  function fullScreenInit(imageClone) {
    imageClone.addEventListener("click", (event) => {
        genreappend.innerHTML='';
        genreContainer.style.display = 'none';
        genreappend.style.display = 'flex';
        let fullScreenImage = document.createElement('img');
        fullScreenImage.src = event.target.src;
        fullScreenImage.alt = event.target.alt;


        genreappend.append(fullScreenImage);

        let historyback = document.getElementById("backarrow");
        historyback.addEventListener('click', () =>{
            genreappend.innerHTML='';
            genreContainer.style.display = 'flex';

        });


    });


  }
menudetails.forEach(genre => {
    genre.addEventListener('click', () => {
        genreContainer.innerHTML = ''; 
       if (page.style.display!="block"){
              page.style.display='block';
   section.style.display='none';
   section1.style.display='none';
   content.style.display='none';
 document.getElementById("img").style.display='none'; 
 console.log('genre');
       }
        let imggenre = document.querySelectorAll(".details1");
        imggenre.forEach(detail => {
            document.getElementById("album1").style.display = 'none';
            let text = detail.textContent.toLowerCase();
            let text1 = genre.textContent.toLowerCase();

            if (text.includes(text1)) {
                let image = detail.parentNode.cloneNode(true); 
                genreContainer.appendChild(image);
                fullScreenInit(image);
            }
                      const historyBack = document.getElementById("backarrow");
          historyBack.addEventListener('click', () => {
            genreContainer.innerHTML = '';
            document.getElementById("album1").style.display = 'flex';
          });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll("img[data-src]");

    function lazyLoad() {
        lazyImages.forEach(function(img) {
            if (isInViewport(img)) {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
            }
        });
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Attach lazyLoad function to the scroll event
    window.addEventListener("scroll", lazyLoad);

    // Initial lazy load on page load
    lazyLoad();
});
