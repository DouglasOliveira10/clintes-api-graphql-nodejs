const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')
const { dataSources } = require('./data-sources')

const server = new ApolloServer({
    typeDefs: importSchema('./src/schemas/index.graphql'),
    resolvers: resolvers,
    dataSources: dataSources
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})

