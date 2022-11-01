/*
SoundPlayer 是non-default export的
non default的export要return一個object
default要return一個jest.fn
*/

import SoundPlayer from "./sound-player";

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

it("default class export", () => {
  const player = new SoundPlayer();
  player.playSoundFile();
  expect(mockPlaySoundFile).toHaveBeenCalled();
});
