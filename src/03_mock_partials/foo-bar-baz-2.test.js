import defaultExport, { bar, foo } from "./foo-bar-baz";
/*
foo-bar-baz export 3 個東西出來：一個常數(foo)、一個function(bar)、一個default import(defaultExport)
將常數(foo) mock掉，其他維持不變
*/
jest.mock("./foo-bar-baz", () => {
  const originalModule = jest.requireActual("./foo-bar-baz");
  return {
    __esModule: true,
    ...originalModule,
    foo: "mocked foo",
  };
});

test("should do a partial mock", () => {
  // defaultExport mock掉
  expect(foo).toBe("mocked foo");

  // 其他維持不變
  expect(defaultExport()).toBe("baz");
  expect(bar()).toBe("bar");
});
