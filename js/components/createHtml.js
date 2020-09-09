export function createGames(games) {
    let html = "";

    games.forEach(function (game) {
        html += `<span class="game">${game.name}</span>`;
    });

    return html;
}

export default function createPublisher(publisher) {
    return `<div class="result">
                <h4>${publisher.name}</h4>
                <div class="games">${createGames(publisher.games)}</div>
            </div>`;
}
