export class SoundPlayer {
  constructor() {
    this.foo = "bar";
  }

  playSoundFile(fileName) {
    console.log("Playing sound file " + fileName);
  }

  static brand() {
    return "player-brand";
  }
}