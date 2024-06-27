import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { faker } from "@faker-js/faker";

const typeDefs = `#graphql
    type UserType {
        id: String!
        name: String!
        desc: String!
    }
    
    type Query {
        """find user by id"""
        find(id: String!): UserType!
    }
    
    type Mutation {
        """create user"""
        create(params: UserInput!): Boolean!
    }
    
    input UserInput {
        name: String!
        desc: String!
        avatar: String!
    }
`;

const resolvers = {
  UserType: {
    name: () => faker.person.fullName(),
    id: () => faker.string.uuid(),
    desc: () => faker.person.bio(),
  },
};

const mocks = {
  //   String: () => faker.string.sample(),
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

await startStandaloneServer(server, { listen: { port: 3000 } });
