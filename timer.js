let pixel = document.querySelectorAll('.pixel');
let eraser = document.querySelector('.eraser');
let chosencolor = document.querySelector('.chosen-color');
let gameButton = document.querySelector(".game");
let pics = document.querySelectorAll(".pics");
let picsb = document.querySelectorAll(".picsb");
let fail = document.querySelector(".fail");
let victory = document.querySelector(".victory");
let timerId = setTimeout(chasy);
let secundomer = document.querySelector(".secundomer");
let n = 0;
let k = 0;
let num2 = 0;
let e = 0;
let num = 0;
let seconds = 30;

function zalup(){

    --seconds;
    secundomer.textContent = seconds;
}


function recover() {
    clearTimeout(chasy);
    gameButton.classList.remove("lock");
    pixel.forEach(elem => {
        num2 = 0;
        num = 0;
        k = 0;
        e = 0;
        elem.classList.remove("lock");
        elem.style.backgroundColor = "white";
        victory.style.display = "none";
        fail.style.display = "none";
        elem.onclick = function() {
            if (eraser.checked) {
                elem.style.backgroundColor = 'white';
            } else {
                elem.style.backgroundColor = chosencolor.value;
            }

        }

    })



}


    pixel.forEach(elem => {
        if (elem.classList.contains("pics") || elem.classList.contains("picsb")) {
            n += 1;
        }
    })
    console.log(n);



function chasy(num) {
    if (num2 >= 40) {
        setTimeout(recover, 1000);
        return;
    }


    if (num < 11 && num2 != 50) {
        console.log(num);
        setTimeout(chasy, 1000, ++num);
        pixel.forEach(elem => {
            elem.style.backgroundColor = "white";
        })
        pixel.forEach(elem => {
            if (elem.classList.contains("pics")) {
                elem.style.backgroundColor = "orange";
            } else if (elem.classList.contains("picsb")) {
                elem.style.backgroundColor = "black";
            }
            elem.classList.add("lock");
        })

    } else if (num === 11) {

        setTimeout(
            pixel.forEach(element => {
                element.classList.remove("lock");
                element.style.backgroundColor = "white";
            }), 10);
    };


    if (num > 10 && num < 300) {
        console.log(num);
        setTimeout(chasy, 100, ++num);
        
        
        
        pixel.forEach(elem => {
            console.log(k);
            elem.onclick = function() {

                if (elem.classList.contains("pics") || elem.classList.contains("picsb")) {
                    k += 1;
                    elem.classList.add("lock");
                    elem.style.backgroundColor = "green";

                } else {
                    elem.classList.add("lock");
                    elem.style.backgroundColor = "red";
                    e += 1;

                }


            };



        })



        if (k === n) {
            victory.style.display = "block";
            console.log("NICE!!!!");
            num2 = 50;
            pixel.forEach(element => {
                element.classList.add("lock");



            })


        } else if (e === 3 || num === 300) {
            fail.style.display = "block";
            console.log("HUESOS!!!!!!!!!!");
            num2 = 50;
            pixel.forEach(element => {
                element.classList.add("lock");
                

            })

        };
    }


};




gameButton.onclick = function() {

    setTimeout(chasy, 10, 1);
    gameButton.classList.add("lock");



    

}

