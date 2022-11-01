import defaultExport, { bar, foo } from "./foo-bar-baz";
/*
foo-bar-baz export 3 個東西出來：一個常數(foo)、一個function(bar)、一個default import(defaultExport)
將defaultExport mock掉，其他維持不變
*/
jest.mock("./foo-bar-baz", () => {
  const originalModule = jest.requireActual("./foo-bar-baz");
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
  };
});

test("should do a partial mock", () => {
  const defaultExportResult = defaultExport();
  // defaultExport mock掉
  expect(defaultExportResult).toBe("mocked baz");
  expect(defaultExport).toHaveBeenCalled();
  // 其他維持不變
  expect(foo).toBe("foo");
  expect(bar()).toBe("bar");
});
