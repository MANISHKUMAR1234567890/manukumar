

const actual=Math.floor(Math.random()*1000+1);
function get_num() {

    const num = document.getElementById('num').value;
    // let actual = 5;
    if (actual == num) {
        correct.style.display = "block";
        incorrect.style.display = "none";
    }
    else {
        incorrect.style.display = "block";
        correct.style.display = "none";


    }
}

function playSound()
{
    const audio=new Audio("key_press.mp3");
    audio.play();
}



