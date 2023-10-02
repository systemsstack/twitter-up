import axios from "axios";
import { TOKEN, AUTH_USER_ID_HEADER } from "../constants/common-constants";

axios.interceptors.request.use((config) => {
    if (localStorage.getItem(TOKEN)) {
        config.headers["Authorization"] = localStorage.getItem(TOKEN);
        config.headers[AUTH_USER_ID_HEADER] = localStorage.getItem(AUTH_USER_ID_HEADER);
        return config;
    } else {
        return config;
    }
});

export { axios };
