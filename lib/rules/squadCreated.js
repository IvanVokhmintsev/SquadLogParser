module.exports = {
  regex: /^\[([0-9.:-]+)]\[([ 0-9]*)]LogSquad: (.+) \(Steam ID: ([0-9]{17})\) has created Squad (\d+) \(Squad Name: (.+)\) on (.+)/,
  onMatch: async (args) => {
    const data = {
      raw: args[0],
      time: args[1],
      chainID: args[2],
      playerName: args[3],
      playerSteamID: args[4],
      squadID: args[5],
      squadName: args[6],
      teamName: args[7],

      eventType: 'squadCreated'
    }
    return data
  }
}
