class PlayerDebugHud extends rune.display.DisplayObjectContainer{

  constructor(w, h) {

    super(0,0, w, h);

    this.gs_playerHealth = new Array();
    this.gs_playerScore = new Array();
    this.gs_playerWeapon = new Array();

    this.scoreCounter = null;
    this.healthCounter = null;
    this.weaponInfo = null;
  }

  init() {
    super.init();

    this.initScoreCounter();
    this.initHealthCounter();
    this.initWeaponInfo();
    
    this.forEachChild((child, index) => {
      child.y = this.height / this.getChildren().length * index;
    });

  }

  initScoreCounter() {
    this.gs_playerScore.push(0);
    this.scoreCounter = new rune.text.BitmapField("null");
    this.scoreCounter.text = "0";
    this.addChild(this.scoreCounter);
  }

  initHealthCounter() {
    this.gs_playerHealth.push(100);
    this.healthCounter = new rune.text.BitmapField("null");
    this.addChild(this.healthCounter);
  }

  initWeaponInfo() {
    this.gs_playerWeapon.push("null");
    this.weaponInfo = new rune.text.BitmapField("null");
    this.addChild(this.weaponInfo);
  }

  update(step) {
    super.update();

    this.scoreCounter.text = this.gs_playerScore[0];
    this.healthCounter.text = this.gs_playerHealth[0];
    this.weaponInfo.text = this.gs_playerWeapon[0];

    // console.log(this.gs_playerHealth);
    // console.log(this.gs_playerScore);
    // console.log(this.gs_playerWeapon);
  }

  dispose() {
    super.dispose();
  }

  setPlayerHealth(player, health) {
    this.gs_playerHealth[player] = health;
  }

  setPlayerScore(player, score) {
    this.gs_playerScore[player] = score;
  }

  setPlayerWeapon(player, weapon) {
    this.gs_playerWeapon[player] = weapon;
  }

  updateInfo(player, health, score, weapon) {
    console.log("Updating info for player " + player);
    this.setPlayerHealth(player, health);
    this.setPlayerScore(player, score);
    this.setPlayerWeapon(player, weapon);
  }

}