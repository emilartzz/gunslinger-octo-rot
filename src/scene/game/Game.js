class Game extends rune.scene.Scene {

  constructor(players = 1) {
    if (players <= 0) {
      throw new Error("Invalid number of players.");
    }
    super();

    this.gs_players = players;
    this.gs_activePlayers = new Array();
    this.debugHuds = new Array();
  }

  init() {
    super.init();

    const w = this.application.screen.width;
    const h = this.application.screen.height;

    console.log(this);

    for (var i = 0; i < this.gs_players; i++) {
      const player = new Player(i);

      const debugHud = new PlayerDebugHud(player.width * 3, 40);
      debugHud.centerX = this.application.screen.centerX;
      debugHud.centerY = 20 + (i + i * 20);

      this.stage.addChild(debugHud);
      this.debugHuds.push(debugHud);

      player.x = this.application.screen.centerX + (i + i * 22);
      player.y = 100;

      this.stage.addChild(player);
      this.gs_activePlayers.push(player);
    }

    console.log(this.debugHuds);
    console.log(this.gs_activePlayers);


    this.stage.forEachChild((child) => {
      child.debug = true;
    });
  }

  update(step) {
    super.update(step);

    this.debugHuds.forEach((hud) => {
      
      const index = this.debugHuds.indexOf(hud);
      const player = this.gs_activePlayers[index];
      hud.updateInfo(player.gs_playerID, player.gs_playerLife, player.gs_playerScore, player.gs_playerWeapon);
      hud.centerX = player.left + (player.width / 2);
      hud.y = player.top - hud.height;
    });

  }

  dispose() {
    super.dispose();
  }

}
Gunslinger.scene.Game = Game;