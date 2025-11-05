button.addEventListener('click', () => {
  button.textContent = "Loading...";
  button.style.transform = "scale(0.9)";
  button.style.backgroundColor = "#ffb366";
  button.style.boxShadow = "0 0 40px rgba(255,179,102,0.8)";
  button.style.transition = "all 0.2s ease";

  setTimeout(() => {
    button.textContent = "✓ Done!";
    button.style.transform = "scale(1)";
    button.style.backgroundColor = "#F98125";
    button.style.boxShadow = "0 6px 15px rgba(208,128,37,0.5)";
  }, 1000);

  setTimeout(() => {
    button.textContent = "Get Started";
  }, 2000);
});