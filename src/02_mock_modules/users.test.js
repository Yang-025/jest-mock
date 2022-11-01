import axios from "axios";
import Users from "./users";

jest.mock("axios");

/**
 針對axios.get做一個mock return value
 * */
test("should fetch users method1", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});

/**
 針對axios.get做一個mockImplementation
 * */
test("should fetch users method2", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };

  axios.get.mockImplementation(() => Promise.resolve(resp));

  return Users.all().then((data) => expect(data).toEqual(users));
});
