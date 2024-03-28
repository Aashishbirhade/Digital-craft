
// Smooth scrolling for anchor links
// Add JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Form validation
$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});
// Function to enable automatic scrolling for carousels
function enableAutomaticScrolling(carouselId, intervalTime) {
    setInterval(function () {
        $(carouselId).carousel('next');
    }, intervalTime);
}

// Call the function with desired parameters
enableAutomaticScrolling('#galleryCarousel', 30000000); // Adjust the carousel ID and interval time as needed




