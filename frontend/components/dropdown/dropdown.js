export const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

export const myPinFunction = () => {
    document.getElementById("myPinDropdown").classList.toggle("show");
}

export const myEditFunction = () => {
    document.getElementById("myEditDropdown").classList.toggle("show");
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