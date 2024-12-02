const ghostContainer = document.getElementById('ghostContainer');
let summoning = false;

function createGhost() {
    const ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.style.left = Math.random() * window.innerWidth + 'px';
    ghost.style.animationDuration = Math.random() * 3 + 2 + 's';
    ghostContainer.appendChild(ghost);

    setTimeout(() => {
        ghost.remove();
    }, 5000);
}

function toggleGhosts() {
    summoning = !summoning;
    if (summoning) {
        ghostInterval = setInterval(createGhost, 200);
    } else {
        clearInterval(ghostInterval);
    }
}

document.getElementById('toggleGhosts').addEventListener('click', toggleGhosts);