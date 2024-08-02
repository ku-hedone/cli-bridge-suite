import { AvatarUrl, Id, Name, UserName, WebUrl } from "../types";
import request from "../util";

interface Params extends UserName {}
interface UserListItem extends Id, Name, UserName, AvatarUrl, WebUrl {
  state: string,
}

type SearchUserResponse<T, U extends unknown = never> = [U] extends [never] ? {
  status: T;
} : {
  status: T;
  list: U;
}

const service = async (PRIVATE_TOKEN: string, data: Params): Promise<SearchUserResponse<true, UserListItem[]> | SearchUserResponse<false>>  => {
  const response = await request<UserListItem[]>({
      method: "GET",
      path: `users?username=${data.username}&active=true`,
    }, PRIVATE_TOKEN);
  if (response.length) {
    return {
      status: true,
      list: response
    }
  }
  return {
    status: false
  };
}

export default service;