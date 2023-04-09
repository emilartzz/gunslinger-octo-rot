class Menu extends rune.scene.Scene {

  constructor() {
    super();
  }

  init() {
    super.init();

    const gameTitle = new rune.text.BitmapField("Gunslinger's Anarchy");
    gameTitle.centerX = this.application.screen.centerX - 100;
    gameTitle.centerY = this.application.screen.centerY - 50;
    gameTitle.autosize = true;

    this.stage.addChild(gameTitle);

    this.gs_mainMenu = new rune.ui.VTMenu();
    this.gs_mainMenu.centerX = 50;
    this.gs_mainMenu.centerY = 100;

    this.gs_mainMenu.add("Single Player");
    this.gs_mainMenu.add("Multiplayer");
    this.gs_mainMenu.add("Options");

    this.gs_mainMenu.onSelect(this.m_onMenuSelect, this);

    this.stage.addChild(this.gs_mainMenu);

    this.stage.forEachChild((child) => {
      child.debug = true;
    });

  }

  update() {
    super.update();

    this.gs_menuInput();
  }

  dispose() {
    super.dispose();
  }

  gs_menuInput() {

    if (this.keyboard.justPressed('DOWN')){
      this.gs_mainMenu.down();
    }

    if (this.keyboard.justPressed('UP')){
      this.gs_mainMenu.up();
    }

    if (this.keyboard.justPressed('ENTER')){
      this.gs_mainMenu.select();
    }

    if (this.keyboard.justPressed('ESC')){
      this.application.exit();
    }

    if (this.keyboard.pressed('X')){
      if (this.keyboard.justPressed('S')){
        this.application.scenes.load([new Gunslinger.scene.Game(1)]);
      }
      if (this.keyboard.justPressed('D')){
        this.application.scenes.load([new Gunslinger.scene.Game(2)]);
      }
    }

  }


}

Menu.prototype.m_onMenuSelect = function(element) {
    switch (element.text) {
        case "Single Player":
            this.application.scenes.load([new Gunslinger.scene.Game(1)]);
            break;
        case "Multiplayer":
            this.application.scenes.load([new Gunslinger.scene.Game(2)]);
            break;
        case "Options":
            this.application.scenes.load([new Gunslinger.scene.Options()]);
            break;
    }
};

Gunslinger.scene.Menu = Menu;