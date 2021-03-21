import { User } from "../../models";
export default {
  Query: {
    authUser: () => { },
    loginUser: () => { },

  },
  Mutation: {
    registerUser: (root, args, { req }, info) => {
      // Validate user Data
      const AuthUser = {
        user: { ...args },
        token: "hellooo",
      };
      return AuthUser;
    },
  }
}