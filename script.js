let slides = document.querySelectorAll(".hero-slider .slide");
let current = 0;

function nextSlide() {
  if (slides.length === 0) return;
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}



setInterval(nextSlide, 3000); // Auto sliding every 5 seconds

const elements = document.querySelectorAll('.scroll-animate');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add('active');
    }
  });
});



const items = document.querySelectorAll('.gallery-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

items.forEach(item => {
  observer.observe(item);
});





AOS.init({
  duration: 1000,
  once: true
});






const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    alert("✅ Message Sent Successfully!");
    form.reset();
  } else {
    alert("❌ Something went wrong!");
  }
});






  const toggler = document.querySelector('.navbar-toggler');
  const body = document.body;

  toggler.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });




document.querySelectorAll('.navbar a').forEach(function(link) {
  link.addEventListener('click', function(e) {

    // If it's a dropdown toggle → DON'T close
    if (this.classList.contains('dropdown-toggle')) {
      return;
    }

    // Close navbar after clicking real link
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }

  });
});






window.onload = function () {

  const scrollBtn = document.querySelector(".scroll-top-btn");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.visibility = "hidden";
    }
  };

  scrollBtn.onclick = function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

};




document.addEventListener("DOMContentLoaded", function () {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {

        question.addEventListener("click", function () {

            const faqItem = this.closest(".faq-item");

            document.querySelectorAll(".faq-item").forEach(item => {

                if(item !== faqItem){
                    item.classList.remove("active");
                    item.querySelector(".faq-question span").innerHTML = "+";
                }

            });

            faqItem.classList.toggle("active");

            const icon = this.querySelector("span");

            if(faqItem.classList.contains("active")){
                icon.innerHTML = "−";
            } else {
                icon.innerHTML = "+";
            }

        });

    });

});

