function points(games) {
    let points = 0;
    
    games.forEach(game => {
      const [x, y] = game.split(':').map(Number);
      if (x > y) {
        points += 3;
      } else if (x < y) {
        points += 0;
      } else {
        points += 1;
      }
    });
    
    return points;
  }
  