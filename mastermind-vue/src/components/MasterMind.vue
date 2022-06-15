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
                  @click="play">Play</button>
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
            <tr>
              <td>1</td>
              <td>123</td>
              <td>-1 +1</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MasterMind',
  props: {},
  methods: {
     play() {
       this.game.tries++;
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
