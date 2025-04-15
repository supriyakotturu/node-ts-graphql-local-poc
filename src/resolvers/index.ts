import { Resolvers } from "../types"

export const resolvers: Resolvers = {
    Query :{
        featuredListings : (_, __, { dataSources}, info) => {
            return dataSources.listingAPI.getFeaturedListings()
        },
        listing:(_, {id}, {dataSources}, info) => {
            return dataSources.listingAPI.getListing(id)
        }
        // popularPlanets : (_, __, {datasources}, info) => {
        //     return datasources.planetAPI.getPopularPlanets()
        // }
    }
}