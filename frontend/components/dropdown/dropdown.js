// /* global $ */

// // dropdown function that removes "hidden" class from dropdown while
// // adding hideDropdown listener to document and cleaning up out-of-date listener
// const revealDropdown = (event) => {
//     event.stopPropagation(); // prevent event from being picked up by body
//     $('#gear-dropdown').removeClass('hidden');
//     $('#gear-dropdown-btn').off('click', revealDropdown);
//     $(document).on('click', hideDropdown);
// };

// // add "hidden" class to dropdown and update event listeners
// const hideDropdown = () => {
//     $('#gear-dropdown').addClass('hidden');
//     $('#gear-dropdown-btn').on('click', revealDropdown);
//     $(document).off('click', hideDropdown);
// };

// // Add click listener to gear icon which invokes reveal function
// $(() => $('#gear-dropdown-btn').on('click', revealDropdown));

export const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}