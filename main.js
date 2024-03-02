/**
 * Ensures that the alert container is always positioned below the navbar.
 * This function adjusts the position of the alert container to maintain its
 * correct position both in desktop mode and in responsive mode, accommodating
 * changes when the navbar is collapsed and expanded.
 */

window.addEventListener('resize', adjustAlertContainerHeight);
window.addEventListener('load', adjustAlertContainerHeight);

var navbar = document.querySelector('.navbar');
navbar.addEventListener('shown.bs.collapse', adjustAlertContainerHeight);
navbar.addEventListener('hidden.bs.collapse', adjustAlertContainerHeight);

function adjustAlertContainerHeight() {
    var navbarHeight = navbar.offsetHeight;
    var alertContainer = document.querySelector('.alert-container');
    alertContainer.style.marginTop = navbarHeight + 'px';

      // Hide the alert container after 15 seconds
      setTimeout(function() {
        alertContainer.style.display = 'none';
    }, 15000);  // 15000 milliseconds = 15 seconds
}

