import { expect } from "chai";
import * as userApi from "./api";

describe("users", () => {
  describe("user(id: String!): User", () => {
    it("founded user", async () => {
      const expectedResult = {
        data: {
          user: {
            id: "1",
            username: "onur",
            email: "onur@onur.com",
            role: "ADMIN"
          }
        }
      };

      const result = await userApi.user({ id: "1" });

      expect(result.data).to.eql(expectedResult);
    });

    it("cannot found user", async () => {
      const expectedResult = {
        data: {
          user: null
        }
      };

      const result = await userApi.user({ id: "42" });

      expect(result.data).to.eql(expectedResult);
    });
  });


  describe("getMessages(): Array!", () => {
    it("Mesajlar 0'dan büyük", async () => {
      const data = await userApi.getMessages();
      const messages = data.data.data.messages.edges
      
      expect(messages.length).to.greaterThan(0);
    });
  });
  
  describe("deleteUser(id: String!): Boolean!", () => {
    it("Hata döner çünkü sadece admin user silebilir", async () => {
      const {
        data: {
          data: {
            signIn: { token }
          }
        }
      } = await userApi.signIn({
        login: "ali",
        password: "alialiali"
      });

      const {
        data: { errors }
      } = await userApi.deleteUser({ id: "1" }, token);

      expect(errors[0].message).to.eql("Not authorized as admin.");
    });
  });
});
