import type { Name, Path } from "../types";
import request from "../util";

interface Params extends Name, Path {}

const service = async <T>(PRIVATE_TOKEN: string, data: Params) => {
  const response = await request<T>({
    method: "POST",
    path: "groups"
  }, PRIVATE_TOKEN, data);
  return response;
}

export default service;