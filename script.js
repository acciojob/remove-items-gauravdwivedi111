//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const button = document.querySelector('input[type="button"]');

	button.addEventListener("click", function () {

        const select = document.getElementById("colorSelect");

        const selectedIndex = select.selectedIndex;

        if (selectedIndex !== -1) {
            select.remove(selectedIndex);
        }

    });

});