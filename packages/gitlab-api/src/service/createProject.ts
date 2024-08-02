import { AvatarUrl, Description, Id, Name, NameSpaceId, Path, ProjectItemDetail, WebUrl } from "../types";
import request from "../util";

interface Params extends Name, Partial<NameSpaceId> {}

export interface CreateSuccess extends Id, Name, Path, WebUrl, AvatarUrl,
  Description, ProjectItemDetail {
  default_branch: null,
  _links: {
    self: string,
    issues: string,
    merge_requests: string,
    repo_branches: string,
    labels: string,
    events: string,
    members: string,
  },
  empty_repo: boolean,
  archived: boolean,
  visibility: string,
  resolve_outdated_diff_discussions: boolean,
  container_registry_enabled: boolean,
  container_expiration_policy: {
    cadence: string,
    enabled: boolean,
    keep_n: null,
    older_than: null,
    name_regex: null,
    next_run_at: string
  },
  issues_enabled: boolean,
  merge_requests_enabled: boolean,
  wiki_enabled: boolean,
  jobs_enabled: boolean,
  snippets_enabled: boolean,
  can_create_merge_request_in: boolean,
  issues_access_level: string,
  repository_access_level: string,
  merge_requests_access_level: string,
  wiki_access_level: string,
  builds_access_level: string,
  snippets_access_level: string,
  pages_access_level: string,
  emails_disabled: null,
  shared_runners_enabled: boolean,
  lfs_enabled: boolean,
  creator_id: number,
  import_status: string,
  import_error: null,
  open_issues_count: number,
  runners_token: string,
  ci_default_git_depth: number,
  public_jobs: boolean,
  build_git_strategy: string,
  build_timeout: number,
  auto_cancel_pending_pipelines: string,
  build_coverage_regex: null,
  ci_config_path: string,
  shared_with_groups: [],
  only_allow_merge_if_pipeline_succeeds: boolean,
  request_access_enabled: boolean,
  only_allow_merge_if_all_discussions_are_resolved: boolean,
  remove_source_branch_after_merge: boolean,
  printing_merge_request_link_enabled: boolean,
  merge_method: string,
  suggestion_commit_message: null,
  auto_devops_enabled: boolean,
  auto_devops_deploy_strategy: string,
  autoclose_referenced_issues: boolean
}

export interface CreateFailed {
  message: {
    name: [string],
    path: [string],
    limit_reached: []
  }
}

const faild = (response: any): response is CreateFailed => {
  return response.hasOwnProperty('message');
}

const service = async (PRIVATE_TOKEN: string, data: Params) => {
  const response = await request<CreateSuccess | CreateFailed>({
    method: "POST",
    path: "projects"
  }, PRIVATE_TOKEN, data);
  if (faild(response)) {
    return Promise.reject(response.message);
  }
  return {
    path: response.path_with_namespace,
    id: response.id,
    message: "has already been created successfully",
    code: 0,
  };
}

export default service;