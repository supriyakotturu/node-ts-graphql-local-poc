import { ListingAPI } from "./datasources/listing-api"
import { PlanetsAPI } from "./datasources/planets-api" 

export type DataSourceContext = {
  dataSources: {
    listingAPI: ListingAPI;
  };
};