import * as mockService from "./model/mock.api.service";
import * as apiService from "./model/Api.service";

const data_source = process.env.REACT_APP_DATA_SOURCE === "mock" ? mockService : apiService;
export default data_source;