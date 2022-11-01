import { forEach } from "./mock";

/*
 mock.calls的運用
 每個jest mock都會有一個.mock properties
 */
it("forEach", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
  // The return value of the 2nd call to the function was 43
  expect(mockCallback.mock.results[1].value).toBe(43);
});

it("mock mockReturnValueOnce", () => {
  // mock可以自己設定回傳值
  const myMock = jest.fn();

  // 沒有回傳值，預設為undefined
  expect(myMock()).toBe(undefined);
  // 指定回傳值
  myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);
  expect(myMock()).toBe(10);
  expect(myMock()).toBe("x");
  expect(myMock()).toBe(true);
  expect(myMock()).toBe(true);
});

test("mock 被什麼參數呼叫", () => {
  const myMockFn = jest.fn(() => 10);
  myMockFn("1", "2", "3")
  expect(myMockFn).toHaveBeenCalledWith("1", "2", "3");
  expect(myMockFn).toMatchInlineSnapshot(`
[MockFunction] {
  "calls": [
    [
      "1",
      "2",
      "3",
    ],
  ],
  "results": [
    {
      "type": "return",
      "value": 10,
    },
  ],
}
`);
});
