for (let p of pixel) {




    p.onclick = function() {





        if (eraser.checked) {
            p.style.backgroundColor = 'white';
        } else {
            p.style.backgroundColor = chosencolor.value;
        }
    }
};