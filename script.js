'use strict';

/* NOTES:
Sometimes, inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. This is called the EVENT OBJECT, and it is automatically passed to event handlers to provide extra features and information.
    - This is pertaining line 32
*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden"); // Don't add a period before hidden i.e (".hidden") when manipulating class
    // modal.style.display = "block" // Manipulating CSS is impractical bc a style might have 10 properties
}

const closeModal = function () {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

// Brackets are not necessary because it's only one line of code, thus no need for code block
for (let i = 0; i < btnsShowModal.length; i++)
    // console.log(btnsShowModal[i].textContent);
    btnsShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener('keydown', function (e) {
    // console.log("A key was pressed");
    // console.log(e) // This will give you a keyboardEvent and a list of properties when pressing down a key. 
    console.log(e.key) // Adding ".key" will provide the specific "key" property in the console when pressing ESC (or any key)

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal()
    }
})