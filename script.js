// This could be used for additional animations, hover effects, etc.
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header h1');
    header.addEventListener('mouseover', function() {
        header.style.textShadow = "0px 0px 20px rgba(0, 255, 255, 1)";
    });
    header.addEventListener('mouseout', function() {
        header.style.textShadow = "0px 0px 10px rgba(0, 255, 255, 0.8)";
    });
});
