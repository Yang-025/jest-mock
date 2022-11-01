const foo = require("./foo");
jest.mock("./foo");

test("mock_implementations", () => {
  foo.mockImplementation(() => 42);
  foo();
  expect(foo()).toBe(42);
});

test("mockImplementationOnce", () => {
  const myMockFn = jest
    .fn(() => "default")

    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call")

  expect(myMockFn()).toBe("first call");
  expect(myMockFn()).toBe("second call");
  expect(myMockFn()).toBe("default");
  expect(myMockFn()).toBe("default");
});
