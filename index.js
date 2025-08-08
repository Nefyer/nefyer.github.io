function updateGreeting() {
  const greetingElement = document.querySelector('.intro h1');
  const now = new Date();
  const hours = now.getHours();

  let greetingText;

  if (hours < 12) {
    greetingText = "Good Morning, Flandre here!";
  } else if (hours < 18) {
    greetingText = "Good Afternoon, Flandre here!";
  } else {
    greetingText = "Good Evening, Flandre here!";
  }

  greetingElement.textContent = greetingText;
}

document.addEventListener('DOMContentLoaded', () => {
  updateGreeting();
  const toggle = document.querySelector('.topbar-toggle');
  const panel = document.querySelector('.topbar-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
    });
  }
});
