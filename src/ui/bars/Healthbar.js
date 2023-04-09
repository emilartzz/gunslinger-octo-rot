class Healthbar extends rune.ui.Progressbar{
  constructor(width, height, backgroundColor, forgroundColor){
    super(width, height, backgroundColor, forgroundColor);

    this.gs_health = 0;
  }
  init() {
    super.init();
  }
  update(step) {
    super.update();

    this.progress = this.gs_health;
  }
  dispose() {
    super.dispose();
  }

  setHealthProgress(health) {
    this.gs_health = health;
  }

  getHealthProgress() {
    return this.gs_health;
  }
}