import { axiosHttpService } from "src/utils/httpService";
import makeProfileApi from "./api";
export * from "./api";

const httpService = axiosHttpService();

const profileApi = makeProfileApi({ httpService });

export { profileApi };
