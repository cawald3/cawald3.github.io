document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.zoomable').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.onload=function(){
                centerModal();
            };

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
    window.onresize = centerModal;

    function centerModal() {
        var modalContent = document.querySelector('.modal-content');
        var closeContent = document.querySelector('.close');
        var windowHeight = window.innerHeight;
        var windowWidth = window.outerWidth;
        var contentHeight = modalContent.offsetHeight;
        var top = (windowHeight - contentHeight) / 2;
        modalContent.style.marginTop = top + 'px';   
        var xPosition = top+contentHeight + 10;
        if (xPosition > (windowHeight*.9)) {
            xPosition = windowHeight*.75
        }
        closeContent.style.top = xPosition +'px';
        closeContent.style.right = (windowWidth/2-20)+'px';
    }
});