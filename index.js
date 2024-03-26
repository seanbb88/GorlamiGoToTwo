function scrollToContainer() {

    var hash = window.location.hash;

    if (hash === "#conditionsContainer" || hash === "#contactContainer") {

        var targetElement = document.querySelector(hash);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

window.onload = function () {
    scrollToContainer();
};
