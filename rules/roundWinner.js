const layerAndSide = require('../db.js')[1]

module.exports = {
  regex: /^\[([0-9.:-]+)]\[([ 0-9]*)]LogSquadTrace: \[DedicatedServer](?:ASQGameMode::)?DetermineMatchWinner\(\): (.+) won on (.+)/,
  onMatch: async (args) => {
    const data = {
      raw: args[0],
      time: args[1],
      chainID: args[2],
      winner: args[3],
      layer: args[4],

      eventType: 'roundEnded'
    }
    const founded = await layerAndSide.findOne({
      where: {
        layer: data.layer,
        side: data.winner
      }
    })

    if (founded) {
      founded.increment('wins')
    } else {
      layerAndSide.create({
        layer: data.layer,
        side: data.winner,
        wins: 1
      })
    }

    return data
  }
}
