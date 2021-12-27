import axios from "axios";
const queryString = require("query-string");

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,

    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },

    paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use((config) => {
//     const token = store.getState().auth.auth?.accessToken;
//     config.headers["access-token"] = token;
//     config.headers[enumHttpHeader.ClientId] = enumClientIdEnum.USER;
//     config.headers[enumHttpHeader.MerchantId] =
//         store.getState().auth.merchantId || store.getState().merchant._id;
//     config.headers["traffic-source-id"] = store.getState().merchant.trafficSourceId;

//     return config;
// });

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },

    // async (error: any) => {
    //     // Handle errors
    //     if (error.response && error.response.status === 401) {
    //         //refreshToken
    //         const refreshTk = store.getState().auth.auth?.refreshToken?._id;
    //         if (refreshTk) {
    //             const refreshTokenBody = { refreshToken: refreshTk };
    //             const config = {

    //                 headers: {
    //                     "client-id": enumClientIdEnum.MERCHANT,
    //                 },
    //             };
    //             try {
    //                 const res = await axios.post(
    //                      process.env.REACT_APP_API_URL+ "auth/login-refresh-token",
    //                     refreshTokenBody,
    //                     config
    //                 );
    //                 if (res.status === 200) {
    //                     store.dispatch(setAuth(res.data));
    //                     const originalRequest = error.config;
    //                     const newToken = res.data.accessToken;
    //                     originalRequest.headers["access-token"] = newToken;
    //                     return Promise.resolve(axiosClient(originalRequest));
    //                 }
    //             } catch {
    //                 store.dispatch(
    //                     openToast({
    //                         message: "You need to login again",
    //                         type: "warning",
    //                         autoHideDuration: 2000,
    //                     })
    //                 );
    //                 store.dispatch(logout());
    //             }
    //         } else {
    //             store.dispatch(
    //                 openToast({
    //                     message: "You need to login again",
    //                     type: "warning",
    //                     autoHideDuration: 2000,
    //                 })
    //             );
    //             store.dispatch(logout());
    //         }
    //     }
    //     throw error;
    // }
);

export default axiosClient;
