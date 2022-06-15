<template>
  <p></p>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Game Console</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <h4>Level: <span class="badge bg-success">{{ game.level }}</span></h4>
          <h4>Tries: <span class="badge bg-danger">{{ game.tries }}</span> of <span
              class="badge bg-warning">{{ game.maxTries }}</span></h4>
          <h4>Lives: <span class="badge bg-info">{{ game.lives }}</span></h4>
        </div>
        <div class="col-md-3">
          <label class="form-label" for="guess">Guess:</label>
          <input type="text" class="form-control" v-model="game.guess">
          <button class="btn btn-success"
                  @click="play">Play
          </button>
        </div>
        <p></p>
        <div class="row">
          <table class="table table-bordered table-hover table-striped">
            <thead>
            <tr>
              <th>No</th>
              <th>Guess</th>
              <th>Evaluation</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="move in game.moves" :key="move.guess">
              <td></td>
              <td>{{ move.guess }}</td>
              <td>{{ move.evaluation }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Move from "@/model/move";

export default {
  name: 'MasterMind',
  props: {},
  methods: {
    evaluateMove() {
      let guessAsString = this.game.guess.toString();
      let secretAsString = this.game.secret.toString();
      let perfectMatch = 0, partialMatch = 0;
      for (let i = 0; i < guessAsString.length; ++i) {
        let g = guessAsString.charAt(i);
        for (let j = 0; j < secretAsString.length; ++j) {
          let s = secretAsString.charAt(j);
          if (g === s) {
            if (i === j) {
              perfectMatch++;
            } else {
              partialMatch++;
            }
          }
        }
      }
      return new Move(this.game.guess, perfectMatch, partialMatch);
    },
    play() {
      this.game.tries++;
      if (Number(this.game.secret) === Number(this.game.guess)) {
        this.game.level++;
        this.initGame();
      } else {
        if (this.game.tries >= this.game.maxTries) {
          this.game.lives--;
          if (this.game.lives === 0) {
            //TODO: player loses!
          } else {
            this.initGame();
          }
        } else {
          this.game.moves.push(this.evaluateMove())
        }
      }
    },
    getRandomDigit(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    initGame() {
      this.game.tries = 0;
      this.game.secret = this.createSecret();
      this.game.moves = [];
    },
    createSecret() {
      let digits = []; // [5, 4, 9]
      digits.push(this.getRandomDigit(1, 9));
      while (digits.length < this.game.level) {
        let digit = this.getRandomDigit(0, 9);
        if (digits.includes(digit)) continue;
        digits.push(digit);
      }
      return digits.reduce((s, d) => 10 * s + d, 0); // 549
    }
  },
  data: function () {
    return {
      game: {
        secret: 123,
        guess: 456,
        level: 3,
        tries: 0,
        lives: 3,
        maxTries: 10,
        moves: []
      },
      statistics: {
        wins: 0,
        loses: 0
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
