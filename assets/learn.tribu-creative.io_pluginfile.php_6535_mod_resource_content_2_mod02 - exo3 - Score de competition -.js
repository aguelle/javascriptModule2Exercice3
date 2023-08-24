const scores = [
    {
        Nicolas: 629,
        Samir: 857,
        Tom: 483,
        Loanne: 857
    },
    {
        Nicolas: 234,
        Samir: 647,
        Tom: 737,
        Loanne: 235
    },
    {
        Nicolas: 962,
        Samir: 346,
        Tom: 346,
        Loanne: 865
    },
    {
        Nicolas: 317,
        Samir: 347,
        Tom: 853,
        Loanne: 734
    }
];

// This array will contain the summary for all players
let playerSummary = {};

// This array will contain the summary for all rounds
let gameSummary = [];

// Browsing main array, round by round
for (const game of scores) {
    // Init vars for a round
    let max;
    let min;
    let winners = [];
    let losers = [];
    let sum = 0;

    // Browsing the score object for the round
    for (const playerName in game) {
        // Init the summary for a new player
        if (playerSummary[playerName] === undefined) {
            playerSummary[playerName] = {
                wins: 0,
                losses: 0,
                averageScore: 0
            };
        }

        // Adding the score to round total
        sum += game[playerName];

        // Is this the maximum score for the round ?
        if (max === undefined || max < game[playerName]) {
            max = game[playerName];
            winners = [playerName];
        }
        else if (max === game[playerName]) {
            winners.push(playerName);
        }

        // Is this the minimum score for the round ?
        if (min === undefined || game[playerName] < min) {
            min = game[playerName];
            losers = [playerName];

        }
        else if (min === game[playerName]) {
            losers.push(playerName);
        }

        // Adding the score to player's total
        playerSummary[playerName].averageScore += game[playerName];
    }

    // Incrementing winners summaries
    for (const winner of winners) {
        playerSummary[winner].wins++;
    }

    // Incrementing losers summaries
    for (const loser of losers) {
        playerSummary[loser].losses++;
    }

    // Adding round summary datas
    gameSummary.push({
        winners: winners.join(', '),
        losers: losers.join(', '),
        averageScore: sum / Object.values(game).length
    });
}

// Calculating each player's average score
for (const playerName in playerSummary) {
    playerSummary[playerName].averageScore /= scores.length;
}

// Displaying summaries
console.info("Games summary:");
console.table(gameSummary);

console.info("Players summary:");
console.table(playerSummary);
