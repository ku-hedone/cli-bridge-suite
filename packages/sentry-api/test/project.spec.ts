import { expect } from 'chai';
import { listTeamProjects, createNewProject, Project } from '../src/index';
import { getProjectClientKey } from '../src/service/project';
import { ORG_SLUG, PRIVATE_TOKEN, TEAM_SLUG } from './constant';
import { randomString } from './util';


const randomName = randomString(10)

const TEST_CREATE_PROJECT = (projects: Project) => describe("Project Create API TEST SUITE CASE", () => {
    it("CASE:已存在项目返回创建失败", async () => {
        const res = await createNewProject(PRIVATE_TOKEN, {
            organization_slug: ORG_SLUG,
            team_slug: TEAM_SLUG,
        }, {
            name: projects[0].name,
            slug: projects[0].slug
        })
        expect(res.status).to.be.equal(false);
    });
    it("CASE:不存在项目返回创建成功", async () => {
        const res = await createNewProject(PRIVATE_TOKEN, {
            organization_slug: ORG_SLUG,
            team_slug: TEAM_SLUG,
        }, {
            name: randomName,
        });
        expect(res.status).to.be.equal(true);
        describe("CASE: 创建成功时，返回 新创建的 clientKey", () => {
            it("CASE: 返回新创建的project 的 clientKey", async () => {
                const clientKey = await getProjectClientKey(PRIVATE_TOKEN, {
                    organization_slug: ORG_SLUG,
                    project_slug: res.status ? res.info.slug : '',
                })
                expect(clientKey).to.be.instanceof(Array);
            })
        })
    });
})

describe("Project API TEST SUITE CASE", () => {
    let projects: Project;
    before(async () => {
        projects = await listTeamProjects(PRIVATE_TOKEN, {
            organization_slug: ORG_SLUG,
            team_slug: TEAM_SLUG 
        });
    })
    it("CASE:是否返回数组结构", () => {
        expect(projects).is.instanceof(Array);
    });

    after(() => {
        TEST_CREATE_PROJECT(projects)
    })
})