diff --git a/index.js b/index.js
index a8ded7ddc23174bf31d9abe19c429843546b3915..a937b305b4f8658e9f41041879d63592fb5bb245 100644
--- a/index.js
+++ b/index.js
@@ -1,19 +1,28 @@
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
 
-document.addEventListener('DOMContentLoaded', updateGreeting);
+document.addEventListener('DOMContentLoaded', () => {
+  updateGreeting();
+  const toggle = document.querySelector('.topbar-toggle');
+  const panel = document.querySelector('.topbar-panel');
+  if (toggle && panel) {
+    toggle.addEventListener('click', () => {
+      panel.classList.toggle('open');
+    });
+  }
+});
