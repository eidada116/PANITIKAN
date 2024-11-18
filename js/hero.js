let currentIndex = 0;
        const images = document.querySelectorAll('.hero-image');
        const totalImages = images.length;

        function changeImage() {
            images[currentIndex].style.opacity = 0;
            images[currentIndex].style.transition = 'opacity 1s ease-in-out';
            
            currentIndex = (currentIndex + 1) % totalImages;
            
            images[currentIndex].style.opacity = 1;
            images[currentIndex].style.transition = 'opacity 1s ease-in-out';
        }

        setInterval(changeImage, 5000);