import { expect } from 'chai';
import { 
    getProjectClientKey, listOrganizations, listOrganizationTeams, listTeamProjects, 
    OrganizationList, Project, Teams
} from '../src/index';
import { ORG_SLUG, PRIVATE_TOKEN } from './constant';

const TEST_CASE_FOR_PROJECT = (orgSlug: string, teamSlug: string) => describe("CASE: project 相关 test case", async () => {
    let projectList: Project;
    before(async () => {
        projectList = await listTeamProjects(PRIVATE_TOKEN, {
            organization_slug: orgSlug,
            team_slug: teamSlug
        });;
    })

    it("CASE: 是否能够获取 project list", async () => { 
        expect(projectList).to.be.instanceof(Array);
    });

    it("CASE: 是否能够获取 project 的 client key", async () => {
        const res = await getProjectClientKey(PRIVATE_TOKEN, {
            organization_slug: ORG_SLUG,
            project_slug: projectList[0].slug,
        })
        expect(res).to.be.instanceof(Array);
    })
});

const TEST_CASE_FOR_ORG = () => describe("CASE: org 相关 test case", async function () {
    let orgList: OrganizationList;
    before(async () => {
        orgList = await listOrganizations(PRIVATE_TOKEN);
    })

    it("CASE: 是否能够获取 org列表", () => {
        expect(orgList).to.be.instanceof(Array);
    });

    it("CASE: 是否能够获取 org slug", () => {
        expect(orgList).to.be.length.gt(0);
    });

    after(() => {
        TEST_CASE_FOR_TEAM(orgList[0].slug);
    })

});

const TEST_CASE_FOR_TEAM = (orgSlug: string) => describe("CASE: team 相关 test case", async function () {
    let teamList: Teams;
    before(async () => {
        teamList = await listOrganizationTeams(PRIVATE_TOKEN, orgSlug);
    })

    it("CASE: 是否能够获取 team列表", async () => {
        expect(teamList).to.be.instanceof(Array);
    });

    it("CASE: 是否能够获取 team slug", () => {
        expect(teamList).to.be.instanceof(Array).that.length.gt(0);
    });

    after(() => {
        TEST_CASE_FOR_PROJECT(orgSlug, teamList[0].slug);
    })
});

describe("SENTRY API USAGE TEST SUITE", () => {
    TEST_CASE_FOR_ORG();
})