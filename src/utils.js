/** @format */

import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:3007/api/tasks",
});

export default customFetch;
