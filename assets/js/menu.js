document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggleOpen = document.getElementById("menu-toggle-open");
    const menuToggleClose = document.getElementById("menu-toggle-close");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggleOpen) {
        menuToggleOpen.addEventListener("click", function () {
            if (mobileMenu) {
                mobileMenu.classList.remove("hidden");
            }
            menuToggleOpen.classList.add("hidden");
            if (menuToggleClose) {
                menuToggleClose.classList.remove("hidden");
            }
        });
    }

    if (menuToggleClose) {
        menuToggleClose.addEventListener("click", function () {
            if (mobileMenu) {
                mobileMenu.classList.add("hidden");
            }
            if (menuToggleOpen) {
                menuToggleOpen.classList.remove("hidden");
            }
            menuToggleClose.classList.add("hidden");
        });
    }

    // Contact Form JavaScript
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const subjectSelect = document.getElementById('subject'); // Get the subject select
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Validate Name
            if (nameInput && nameInput.value.trim() === '') {
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                nameError.classList.add('hidden');
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailPattern.test(emailInput.value.trim())) {
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                emailError.classList.add('hidden');
            }

            // Validate Message
            if (messageInput && messageInput.value.trim() === '') {
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                messageError.classList.add('hidden');
            }

            if (isValid) {
                // In a real application, you would send the form data to a server here.
                // For this example, we'll just log the data to the console.
                console.log('Form Submitted!', {
                    name: nameInput.value,
                    email: emailInput.value,
                    subject: subjectSelect ? subjectSelect.value : 'N/A', // Get subject value
                    message: messageInput.value
                });

                if (formSuccess) {
                    formSuccess.classList.remove('hidden'); // Show success message
                }
                contactForm.reset(); // Clear the form

                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (formSuccess) {
                        formSuccess.classList.add('hidden');
                    }
                }, 5000);
            }
        });
    }
});

