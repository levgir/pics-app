import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xRkexxYLwZPFebbQek5KY3s4Eq5RGY72Zq0HhVPALik"
  }
});
