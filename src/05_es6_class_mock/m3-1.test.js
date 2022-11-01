/*
spy, getter, static

getter還沒試出來，會有error: Cannot set property foo of #<SoundPlayer> which has only a getter
*/

import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";

it("spy", () => {
  // 直接mock SoundPlayer.prototype
  const playSoundFileMock = jest
    .spyOn(SoundPlayer.prototype, "playSoundFile")
    .mockImplementation(() => {
      console.log("mocked function");
    }); // comment this line if just want to "spy"

  const player = new SoundPlayerConsumer();
  player.playSomethingCool();
  expect(playSoundFileMock).toHaveBeenCalled();
});

// it("針對getter做mock", () => {
//   const getterMethodMock = jest
//     .spyOn(SoundPlayer.prototype, "foo", "get")
//     .mockImplementation(() => "some-mocked-result");

//   const player = new SoundPlayer();
//   const foo = player.foo;
//   expect(getterMethodMock).toHaveBeenCalled();
// });

it("針對static做mock", () => {
  const staticMethodMock = jest
    .spyOn(SoundPlayer, "brand")
    .mockImplementation(() => "some-mocked-brand");

  const player = new SoundPlayer();
  const brand = SoundPlayer.brand();
  expect(staticMethodMock).toHaveBeenCalled();
});
