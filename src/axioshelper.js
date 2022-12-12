// Api.js
import axios from "axios";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
    baseURL: "https://farmaciauwuapi.online/" // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = async (method, url, request, token) => {
    const headers = {
        authorization: "",
        'token-h': token
    };
    //using the axios instance to perform the request that received from each http method
    try {
        const res = await axiosAPI({
            method,
            url,
            data: request,
            headers
        });

        let response = await Promise.resolve(res.data);
        let status = res.status
        response.status = status
        return response
    } catch (err) {
        console.log(err.response)
        alert(err.response.data.detail.message)
        let response = { status: err.response.status }
        return response;
    }
};


// function to execute the http post request
const post = (url, request, token) => apiRequest("post", url, request, token);
const delet = (url, request, token) => apiRequest("delete", url, request, token);
const get = (url, request, token) => apiRequest("get", url, request, token);


// expose your method to other services or actions
const API = { post, get, delet };
export default API;