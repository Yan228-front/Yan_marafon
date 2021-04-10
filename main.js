const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["огонь", "меч"],

  attack: function () {
    console.log(`${this.name} Figth!!!`);
  },
};

const player2 = {
  name: "Sab-zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["лед", "меч"],

  attack: function () {
    console.log(`${this.name} Figth!!!`);
  },
};

function createPlayer(player, obj) {
  const $div = document.createElement("div");
  const $player1 = $div.classList.add("player1");

  const $div_progressbar = document.createElement("div");
  const $progressbar = $div_progressbar.classList.add("progressbar");
  $div.appendChild($div_progressbar);

  const $div_character = document.createElement("div");
  const $character = $div_character.classList.add("character");
  $div.appendChild($div_character);

  const $div_life = document.createElement("div");
  const $life = $div_life.classList.add("life");
  $div_progressbar.appendChild($div_life);

  const $div_name = document.createElement("div");
  const $name = $div_name.classList.add("name");
  $div_name.innerText = obj.name;
  $div_progressbar.appendChild($div_name);

  const $img1 = document.createElement("img");
  $img1.src = obj.img;
  $div_character.appendChild($img1);

  const $div_arenas = document.querySelector(".arenas");
  $div_arenas.appendChild($div);

  console.log($div_arenas);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
