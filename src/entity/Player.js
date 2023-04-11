class Player extends rune.display.Sprite {
  constructor(playerID = 0) {
    if (playerID < 0) {
      throw new Error("Invalid player ID.");
    }
    else if (playerID > 4) {
      throw new Error("Too many players.");
    }


    super(0, 0, 20, 63);

    this.gs_gamepad = null;
    this.gs_gamepads = Array();
    this.gs_playerID = playerID || 0;
    this.gs_playerSpeed = 2;
    this.gs_playerLife = 100;
    this.gs_playerScore = 0;
    this.gs_playerWeapon = 0;
  }

  init() {
    super.init();

    this.initGamepad();

    this.gs_player_hp = new Healthbar(this.width, 2, '', '');
    const gs_head = new rune.display.Sprite(0, 0, 14, 15, "head_mohawk");
    const gs_body = new rune.display.Sprite(0, 0, 20, 20, "body_tux");
    const gs_legs = new rune.display.Sprite(0, 0, 20, 23, "legs_cowboy");

    this.gs_player_hp.x = 0;
    this.gs_player_hp.y = 0;

    gs_head.y = this.gs_player_hp.height + 4;
    gs_body.y = this.gs_player_hp.height + gs_head.height + 3;
    gs_legs.y = this.gs_player_hp.height + gs_head.height + gs_body.height + 3;

    this.addChild(this.gs_player_hp);
    this.addChild(gs_legs);
    this.addChild(gs_body);
    this.addChild(gs_head);


    this.getChildren().forEach((child) => {
      child.debug = true;
      child.centerX = this.width / 2;
    });
  }

  update(step) {
    super.update(step);

    this.updateInput();
    this.gs_player_hp.setHealthProgress(this.gs_playerLife / 100);

  }

  dispose() {
    super.dispose();
  }

  initGamepad() {
    if (this.gamepad == null && this.gamepads != null) {
      this.gs_gamepad = this.gamepads.get(this.gs_playerID);
      this.gs_gamepads.push(this.gs_gamepad);
    }
  }

  updateInput() {

    if (!this.keyboard && !this.gamepad) throw new Error("No input devices found.");

    if (this.gamepad) {
      this.updateGamepad();
    }
    else {
      this.updateKeyboard();
    }
  }

  updateKeyboard() {

    const keyboard = this.keyboard;

    if (keyboard.pressed(this.gs_playerKeys[this.gs_playerID].UP)) {
      this.y -= this.gs_playerSpeed;
    }

    if (keyboard.pressed(this.gs_playerKeys[this.gs_playerID].DOWN)) {
      this.y += this.gs_playerSpeed;
    }

    if (keyboard.pressed(this.gs_playerKeys[this.gs_playerID].LEFT)) {
      this.x -= this.gs_playerSpeed;
    }

    if (keyboard.pressed(this.gs_playerKeys[this.gs_playerID].RIGHT)) {
      this.x += this.gs_playerSpeed;
    }

    if (keyboard.pressed(this.gs_playerKeys[this.gs_playerID].DEBUG)) {
      if (keyboard.pressed("C")) {
        this.setPlayerLife(this.getPlayerLife() - 10);
      }
      if (keyboard.pressed("V")) {
        this.setPlayerLife(this.getPlayerLife() + 10);
      }
      if (keyboard.pressed("B")) {
        this.setPlayerLife(100);
      }
      if (keyboard.pressed("N")) {
        this.setPlayerLife(0);
      }
      if (keyboard.pressed("J")) {
        this.setPlayerScore(this.getPlayerScore() + 50);
      }
      if (keyboard.pressed("K")) {
        this.setPlayerScore(this.getPlayerScore() - 50);
      }
      if (keyboard.pressed("L")) {
        this.setPlayerScore(0);
      }

      if (keyboard.pressed("U")) {
        console.log("Player " + this.gs_playerID + " has weapon " + this.getPlayerWeapon() + " and " + this.getPlayerLife() + " life points.");
        // go to previous weapon in the array of gs_playerWeapons
        let currentWeapon = this.getPlayerWeapon();
        let currentWeaponIndex = this.gs_playerWeapons.indexOf(currentWeapon);
        let nextWeaponIndex = currentWeaponIndex - 1;
        if (nextWeaponIndex < 0) {
          nextWeaponIndex = this.gs_playerWeapons.length - 1;
        }
        this.setPlayerWeapon(this.gs_playerWeapons[nextWeaponIndex]);
      }
      if (keyboard.pressed("I")) {

        // go to next weapon in the array of gs_playerWeapons
        let currentWeapon = this.getPlayerWeapon();
        let currentWeaponIndex = this.gs_playerWeapons.indexOf(currentWeapon);
        let nextWeaponIndex = currentWeaponIndex + 1;
        if (nextWeaponIndex >= this.gs_playerWeapons.length) {
          nextWeaponIndex = 0;
        }
        this.setPlayerWeapon(this.gs_playerWeapons[nextWeaponIndex]);

      }
    }

  }

  getPlayerLife() {
    return this.gs_playerLife;
  }

  getPlayerScore() {
    return this.gs_playerScore;
  }

  getPlayerWeapon() {
    return this.gs_playerWeapon;
  }

  setPlayerLife(life) {
    this.gs_playerLife = life;
  }

  setPlayerScore(score) {
    this.gs_playerScore = score;
  }

  setPlayerWeapon(weapon) {
    this.gs_playerWeapon = weapon;
  }


}

Player.prototype.gs_playerKeys = {
  0: {
    UP: "W",
    DOWN: "S",
    LEFT: "A",
    RIGHT: "D",
    DEBUG: "Z",
  },
  1: {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    DEBUG: "X",
  }
};

Player.prototype.gs_playerWeapons = {
  0: {
    "name": "Pistol",
    "type": "Pistol",
    "cooldown": 0.1,
    "image": "weapon_glock"
  },
  1: {
    "name": "Revolver",
    "type": "Pistol",
    "cooldown": 1,
    "image": "weapon_revolver"
  },
  2: {
    "name": "Shotgun",
    "type": "Shotgun",
    "cooldown": 1.5,
    "image": "weapon_shotgun"
  },
  3: {
    "name": "Rifle",
    "type": "Rifle",
    "cooldown": 0.5,
    "image": "weapon_rifle"
  }
}