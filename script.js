const header = document.querySelector('header');
const vp1 = document.querySelector('.viewport-1');

const sectionOneOptions = {
  rootMargin: '-200px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('show');
    } else {
      header.classList.remove('show');
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(vp1);
