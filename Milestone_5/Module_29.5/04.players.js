function setPlayersStyle(player) {
    player.style.border = "1px solid red";
    player.style.borderRadius = "10px";
    player.style.margin = "10px";
    player.style.padding = "10px";
}

const players = document.getElementsByClassName('player');

for (const player of players) {
    setPlayersStyle(player);
}

function addPlayers() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player_name">New Player</h4>
    <p>Quisquam ullam reprehenderit aliquid inventore sed quaerat dolore dicta vero similique optio aut provident quas odio, cum, laborum explicabo dolor, veniam eligendi harum distinctio. Ea temporibus possimus aliquid pariatur minima?</p>
    `
    setPlayersStyle(player);
    playerContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == "div") {
        event.target.style.backgroundColor = "yellow";
    } else{
        event.target.parentNode.style.backgroundColor = "yellow";
    }
})