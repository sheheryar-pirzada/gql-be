import {
    gql
} from "apollo-server-express";

export default gql`
    type Query {
        authUser: User!
        loginUser(username: String!, password: String!):AuthUser!
    }

    type Mutation {
        registerUser(
            email:String!
            username:String!
            lastName: String!
            password: String!
            firstName: String!
        ): AuthUser!
    }

    type User {
        id: ID!
        email:String!
        username:String!
        lastName: String!
        firstName: String!
        createdAt: String
        updatedAt: String
    }

    type AuthUser {
        user: User!
        token:String!
    }
`;