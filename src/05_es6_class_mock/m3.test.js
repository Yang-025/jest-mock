/*
總共有四種方法可以mock

這裡介紹第3種：jest.mock(path, moduleFactory)

*/

import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";

// 注意mockPlaySoundFile這個命名一定要用mock開頭，不然會碰到out-of-scope error
// 原因在這邊：https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter
const mockPlaySoundFile = jest.fn();
jest.mock("./sound-player", () => {
  return jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile };
  });
});

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});

it("Should throw an error when calling playSomethingCool", () => {
  mockPlaySoundFile.mockImplementation(() => {
    throw new Error("Test error");
  });
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
});
