import { RESTDataSource } from "@apollo/datasource-rest";
import {config} from "../utils/helpers"
import { Listing } from "../types";

export class ListingAPI extends RESTDataSource {
    baseURL = config.baseURL

    getFeaturedListings(): Promise<Listing[]>{
        return this.get<Listing[]>("featured-listings")
    }

    getListing(listingId:string): Promise<Listing>{
        return this.get<Listing>(`listings/${listingId}`)
    }
}