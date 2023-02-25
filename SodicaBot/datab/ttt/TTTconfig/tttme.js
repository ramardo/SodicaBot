const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 Ta Te Ti 💮🌀 」
by: RamaTwo
❖ USUARIO: ${pushname} 

    ➣ Victorias: ${userWins} 🎊
    ➣ Derrotas: ${userDefeats} 💥
    ➣ Empates: ${userTies} 🌀
    ➣ Puntos: ${userPoints} ✨
    `
}

exports.tttme = tttme