module.exports = {
  regex: /^\[([0-9.:-]+)]\[([ 0-9]*)]LogSquad: (.+) \(Steam ID: ([0-9]{17})\) has created Squad (\d+) \(Squad Name: (.+)\) on (.+)/,
  onMatch: async (args) => {
    const data = {
      raw: args[0],
      time: args[1],
      chainID: args[2],
      winner: args[3],
      layer: args[4],

      eventType: 'roundEnded'
    }
    return data
  }
}
