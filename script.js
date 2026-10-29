document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");

  btn.addEventListener("click", () => {
    somClick();

    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (document.body.classList.contains("dark")) {
      btn.innerHTML = "🌙";
    } else {
      btn.innerHTML = "☀️";
    }
  });

  document.querySelectorAll("button, a").forEach(item => {
    item.addEventListener("click", somClick);
  });

  setTimeout(() => {
    document.getElementById("loading").classList.add("sumir");
  }, 1200);

  const reveals = document.querySelectorAll(".reveal");

  function aparecer() {
    reveals.forEach(sec => {
      const topo = sec.getBoundingClientRect().top;

      if (topo < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", aparecer);
  aparecer();
});

function somClick() {
  const som = new Audio("som de click.mp3");
  som.volume = 0.25;
  som.play();
}