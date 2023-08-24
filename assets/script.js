const scores = [
  {
    Nicolas: 629,
    Samir: 857,
    Tom: 483,
    Loanne: 567,
  },
  {
    Nicolas: 234,
    Samir: 647,
    Tom: 737,
    Loanne: 235,
  },
  {
    Nicolas: 962,
    Samir: 346,
    Tom: 346,
    Loanne: 865,
  },
  {
    Nicolas: 317,
    Samir: 347,
    Tom: 853,
    Loanne: 734,
  },
];

for (const game of scores) {
  let winnerName;
  let winnerScore;
  let loserName;
  let loserScore;

  for (const playerName in game)

    if (winnerScore === undefined || winnerScore < game[playerName]) {
      winnerScore = game[playerName];
      winnerName = playerName;
    }console.log(winnerName, winnerScore);

}
