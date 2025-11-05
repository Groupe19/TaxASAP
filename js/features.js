const wrapper = document.querySelector('.img_comps_wrapper');
wrapper.addEventListener('mouseenter', () => {
  wrapper.classList.add('paused');
});
wrapper.addEventListener('mouseleave', () => {
  wrapper.classList.remove('paused');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.feature-row').forEach(row => observer.observe(row));