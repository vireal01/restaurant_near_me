import axios from "axios";

const apiKey = '7hBAZYySyWIk9nqfAw27S-QHn_xgNGbZAvf6JHAVA88jATeVDF5IYp5s9_9csquUmfdRpQr2VUXDdsbBIixO-_N6grtT-v8-OaJW0c9_p_bfWa_8YGYBIFy-zIcFYnYx'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});