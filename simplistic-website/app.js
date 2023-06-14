'use strict';
// switcher is now a reference to the button in the page.
const switcher = document.querySelector('.btn');

// add the event handler for the click event. 
// In the following code, you add a listener for the click event and 
// define an event handler function to be executed by the browser when the click event
//  occurs.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);

});