import axiox from "axios";

const axiosInstance = axiox.create({ withCredentials: true });

export const apiCall = (method, url, bodyData, header, params) => {
  return axiosInstance({
    method,
    url,
    data: bodyData ? bodyData : null,
    params: params ? params : null,
    headers: header ? header : null,
  });
};
