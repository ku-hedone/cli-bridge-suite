import type { UserId, ProjectId } from "../types";
import { PROJECT_ACCESS_LEVEL } from "../types";
import request from "../util";

interface Params extends UserId, ProjectId { }

const service = async <T>(PRIVATE_TOKEN: string, data: Params) => {
  const response = await request<T>({
    method: "POST",
    path: `projects/${data.project_id}/members`,
  }, PRIVATE_TOKEN, {
    user_id: data.user_id,
    access_level: PROJECT_ACCESS_LEVEL.Maintainer,
  });
  return response;
}

export default service;