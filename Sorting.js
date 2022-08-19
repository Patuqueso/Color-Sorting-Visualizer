let bar_container = document.getElementById("bar_container");
let slider = document.getElementById("slider");
let numOfBars = slider.value;
let unsorted = new Array(numOfBars);
let randomize_array_btn = document.getElementById("randomize_array_btn");
let sort_array_btn = document.getElementById("sort_btn");

slider.addEventListener("input", function(){
    numOfBars = slider.value;
    maxRange = slider.value;
    bar_container.innerHTML = "";
    unsorted = randomArray();
    createBars(unsorted);
});

randomize_array_btn.addEventListener("click", function(){
    numOfBars = slider.value;
    maxRange = slider.value;
    bar_container.innerHTML = "";
    unsorted = randomArray();
    createBars(unsorted);
});


sort_array_btn.addEventListener("click", function(){
    bubbleSort(unsorted);
});

document.addEventListener("DOMContentLoaded", function () {
    unsorted = randomArray();
    createBars(unsorted);
});

function createBars(array) {
    for(let i = 0; i < numOfBars; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.backgroundColor = "rgb(" + 256 + ", " + array[i] + ", " + 256 + ")";
        bar_container.appendChild(bar);
    }
}

function randomArray() {
    let array = new Array(numOfBars);
    for (let i = 0; i < numOfBars; i++) {
    array[i] = randomColor();
    }
    return array;
}

function randomColor(){
    //let color = (Math.floor(Math.random()*16777215)+1).toString(16);
    let color = Math.floor(Math.random()*256);
    return color;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/*

function bubbleSort(array){
    let bar = document.getElementsByClassName("bar");

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j] > array[j+1]){
                for(let k = 0; k < bar.length; k++){
                    if(k !== j && k !== (j + 1)) {
                        bar[k].style.height = "100px";
                    }
                }
                var temp = array[j];
                array[j] = array[j+1]; 
                bar[j].style.backgroundColor = "rgb(" + 256 + ", " + array[j+1] + ", " + 256 + ")";
                bar[j].style.height = "150px";
                array[j+1] = temp;
                bar[j+1].style.backgroundColor = "rgb(" + 256 + ", " + temp + ", " + 256 + ")";
                bar[j+1].style.height = "150px";

                await sleep(100);
            }
        }
        //await sleep(100);
    }
    return array;
}
*/

async function bubbleSort(array) {
    console.log("here");
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                for (let k = 0; k < bars.length; k++) {
                    if (k !== j && k !== j + 1) {
                        bars[k].style.height = "100px";
                    }
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.backgroundColor = "rgb(" + 256 + ", " + array[j] + ", " + 256 + ")";
                bars[j].style.height = "150px";
                //bars[j].innerText = array[j];
                bars[j+1].style.backgroundColor = "rgb(" + 256 + ", " +  array[j+1] + ", " + 256 + ")";
                bars[j+1].style.height = "150px";
                //bars[j + 1].innerText = array[j + 1];
                await sleep(1);
            }
        }
      await sleep(1);
    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = "100px";
    }
    return array;
}

function colorToNumber(string){
    return parseInt(string, 16);
}

function numberToColor(number){
    return number.toString(16);
}