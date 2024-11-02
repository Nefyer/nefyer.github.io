function updateGreeting() {
  const greetingElement = document.querySelector('.intro h1');
  const now = new Date();
  const hours = now.getHours();

  let greetingText;

  if (hours < 12) {
    greetingText = "Good Morning, Chloe here!";
  } else if (hours < 18) {
    greetingText = "Good Afternoon, Chloe here!";
  } else {
    greetingText = "Good Evening, Chloe here!";
  }

  greetingElement.textContent = greetingText;
}

document.addEventListener('DOMContentLoaded', updateGreeting);

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#ad1457';
    link.style.transition = 'color 0.3s ease';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = '#d81b60';
  });
});
