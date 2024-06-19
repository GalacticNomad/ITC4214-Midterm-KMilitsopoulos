$(document).ready(function() {

    // Dark Mode Toggle
    document.querySelector('#dark-mode-toggle').addEventListener('click', function() {
      document.querySelector('body').classList.toggle('dark-mode');
    });
  });