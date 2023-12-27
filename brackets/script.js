document.addEventListener('DOMContentLoaded', () => {
    const participants = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'];
    shuffleArray(participants); // Shuffle the participants
    generateBracket(participants);

    document.getElementById('nextRoundButton').addEventListener('click', () => {
        const currentRound = document.querySelector('.round:last-child');
        const winners = Array.from(currentRound.querySelectorAll('.matchup')).map(matchup => matchup.dataset.winner);
        const nextRoundNumber = parseInt(currentRound.dataset.roundNumber) + 1;

        // If there's only one winner, the tournament is complete
        if (winners.length === 1) {
            alert('Tournament complete! Winner: ' + winners[0]);
            return;
        }

        createRound(winners, nextRoundNumber);
        document.getElementById('nextRoundButton').disabled = true;
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateBracket(participants) {
    const bracketContainer = document.getElementById('bracket');
    bracketContainer.innerHTML = '';
    createRound(participants, 1);
}

function createRound(participants, roundCount) {
    const bracketContainer = document.getElementById('bracket');
    const roundDiv = document.createElement('div');
    roundDiv.classList.add('round');
    roundDiv.dataset.roundNumber = roundCount;
    roundDiv.innerHTML = `<h2>Round ${roundCount}</h2>`;

    for (let i = 0; i < participants.length; i += 2) {
        const matchupDiv = document.createElement('div');
        matchupDiv.classList.add('matchup');
        matchupDiv.innerHTML = createMatchupHtml(participants[i], participants[i + 1]);
        roundDiv.appendChild(matchupDiv);

        matchupDiv.addEventListener('click', function() {
            selectWinner(this, participants[i], participants[i + 1]);
            checkForNextRound();
        });
    }

    bracketContainer.appendChild(roundDiv);
}

function createMatchupHtml(player1, player2) {
    return `
        <div class="player">${player1 || ''}</div>
        <div class="vs">vs</div>
        <div class="player">${player2 || ''}</div>
    `;
}

function selectWinner(matchupDiv, player1, player2) {
    const players = matchupDiv.querySelectorAll('.player');
    players.forEach(player => player.classList.remove('winner'));

    if (matchupDiv.dataset.winner === player1) {
        matchupDiv.dataset.winner = player2;
        players[1].classList.add('winner');
    } else {
        matchupDiv.dataset.winner = player1;
        players[0].classList.add('winner');
    }
}

function checkForNextRound() {
    const currentRound = document.querySelector('.round:last-child');
    const matchups = currentRound.querySelectorAll('.matchup');
    const allDecided = Array.from(matchups).every(matchup => matchup.dataset.winner);

    if (allDecided) {
        const nextRoundButton = document.getElementById('nextRoundButton');
        nextRoundButton.disabled = false;
    }
}


