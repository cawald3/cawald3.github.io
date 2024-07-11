document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.zoomable').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});