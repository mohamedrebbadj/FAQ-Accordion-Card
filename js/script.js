"use strict";
// Wait until
window.onload = function () {
    let accordionItemsTitle = document.querySelectorAll(".accordion .accordion__item-title");
    accordionItemsTitle.forEach(accordionItemTitle => {
        // When click accordion item title the content is displayed
        accordionItemTitle.addEventListener("click", function () {
            let accordionItem = this.parentNode;
            accordionItem.classList.remove("hidden");
            accordionItem.classList.toggle("active");
        });
        // Hide the content of the accordion items using javascript
        accordionItemTitle.nextElementSibling.classList.add("hidden");
    });
    // Add custom scrollbar using simplebar framework
    let accordion = document.querySelectorAll(".accordion");
    new SimpleBar(accordion[0], {autoHide: false /* Prevent scrollbar from hiding when it's not focused */})
};