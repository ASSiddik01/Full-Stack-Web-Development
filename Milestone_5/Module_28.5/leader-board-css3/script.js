// Title color
function colorChange(title) {
    document.getElementById(title + "_title").style.color = "red";
}

// Player BG
const playerBg = document.getElementById('top-players');
playerBg.onclick = redRGBA();

function redRGBA(){
    document.getElementById('top-players').style.backgroundColor = "rgba(255, 0, 0, 0.25)";
}

// list create
const getButton = document.getElementById('createButton').addEventListener('click',function(){

    const li = document.createElement('li');
    li.innerText = "New list";

    const newList = document.getElementById('list');
    newList.appendChild(li);
})