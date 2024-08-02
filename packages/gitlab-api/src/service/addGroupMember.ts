import type { AccessLevel, GroupId, GROUP_ACCESS_LEVEL, UserId } from "../types";
import request from "../util";

interface Params extends UserId, AccessLevel<GROUP_ACCESS_LEVEL>, GroupId {}

const service = async <T>(PRIVATE_TOKEN: string, data: Params) => {
  const response = await request<T>({
    method: "POST",
    path: `groups/${data.group_id}/members`,
  }, PRIVATE_TOKEN, {
    user_id: data.user_id,
    access_level: data.access_level,
  });
  return response;
}

export default service;