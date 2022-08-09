import axios from "axios";

const instance = axios.create({
  baseURL: "https://vidly-9d9bd-default-rtdb.firebaseio.com/",
});

export default instance;
