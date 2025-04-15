import { RESTDataSource } from "@apollo/datasource-rest";
import {config} from "../utils/helpers"
 

export class PlanetsAPI extends RESTDataSource{
    baseURL?: string = config.baseURL;

    getPopularPlanets() {
        return this.get<any[]>("planets")
    }
}