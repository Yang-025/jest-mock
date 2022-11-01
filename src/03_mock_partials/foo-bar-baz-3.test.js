import defaultExport, { bar, foo } from "./foo-bar-baz";
/*
foo-bar-baz export 3 個東西出來：一個常數(foo)、一個function(bar)、一個default import(defaultExport)
將function(bar)掉，其他維持不變
*/
jest.mock("./foo-bar-baz", () => {
  const originalModule = jest.requireActual("./foo-bar-baz");
  return {
    __esModule: true,
    ...originalModule,
    bar: jest.fn(() => "mocked bar"),
  };
});

test("should do a partial mock", () => {
  // defaultExport mock掉
  expect(bar()).toBe("mocked bar");
  // jest.mock 有toHaveBeenCalled可以call
  expect(bar).toHaveBeenCalled();

  // 其他維持不變
  expect(defaultExport()).toBe("baz");
  expect(foo).toBe("foo");
});
