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
