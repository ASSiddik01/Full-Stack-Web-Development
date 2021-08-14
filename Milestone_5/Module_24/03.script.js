const blueButton = document.getElementById('makeBule');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

// anonymus function
const greenButton = document.getElementById('green');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = "green";
};

// addEventListener
const goldenrodButton = document.getElementById('goldenrod');
goldenrodButton.addEventListener('click',makeGreenrod)

function makeGreenrod(){
    document.body.style.backgroundColor = "goldenrod";

}

// anonymus function by addEventListener
const hotpinkButton = document.getElementById('hotpink');
hotpinkButton.addEventListener('click',function (){
    document.body.style.backgroundColor = "hotpink";

})

// direct shortcut
document.getElementById('lightblue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'lightblue';
});
