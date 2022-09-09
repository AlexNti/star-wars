import { axiosHttpService } from "src/utils/httpService";
import makeWikiAPI from "./api";
export * from "./api";

const httpService = axiosHttpService();

const wikiApi = makeWikiAPI({ httpService });

export { wikiApi };
