const $arenas = document.querySelector(".arenas");
const $randomButtom = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["огонь", "меч"],

  attack: function (name) {
    console.log(name + " " + "Figth!!!");
  },
};

const player2 = {
  player: 2,
  name: "Sab-zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["лед", "меч"],

  attack: function (name) {
    console.log(name + " " + "Figth!!!");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement("div", "player" + playerObj.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

function changeHp(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = player.hp + "%";

  console.log(player.hp);

  if (player.hp <= 0) {
    player.hp = 0;
    $arenas.appendChild(playerLose(player.name));
    $randomButton.disabled = true;
  }
}

function playerWins(name) {
  const $winTitle = createElement("div", "winTitle");
  $winTitle.innerText = name + " wins";

  //тут наверное должна быть логика , ну у меня не получилось

  return $winTitle;
}

function playerLose(name) {
  const $loseTitle = createElement("div", "loseTitle");
  $loseTitle.innerText = name + " lose";

  return $loseTitle;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

$randomButtom.addEventListener("click", function () {
  changeHp(player1);
  changeHp(player2);
});
