function createGame(player1, hour1, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}" />
        <strong>${hour1}</strong>
        <img src="./assets/incon-${player2}.svg" alt="${player2}" />
      </li>
  `
}

function createCard(name, date, day, games) {
  return `
    <div class="card">
          <h2>Grupo G</h2>
          <h3>${name} </h3>
          <h4>${date} <span>${day}</span></h4>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
        <img src="./assets/logo.svg" alt="logo nlw-copa" />
  </header>
      <main id="cards">
        ${createCard(
          "1ª RODADA",
          "24/11",
          "Quinta",
          createGame("switzerland", "07:00", "cameroon") +
            createGame("brazil", "16:00", "serbia")
        )}
        ${createCard(
          "2ª RODADA",
          "28/11",
          "Segunda",
          createGame("cameroon", "07:00", "serbia") +
            createGame("brazil", "13:00", "switzerland")
        )}
        ${createCard(
          "3ª RODADA",
          "02/12",
          "Sexta",
          createGame("serbia", "16:00", "switzerland") +
            createGame("cameroon", "16:00", "brazil")
        )}
      </main>
`
