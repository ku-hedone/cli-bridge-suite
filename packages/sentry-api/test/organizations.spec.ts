import { expect } from 'chai';
import { listOrganizations, listOrganizationTeams, OrganizationList, Teams } from '../src/index';
import { ORG_SLUG, PRIVATE_TOKEN } from './constant';

describe("ORGANIZATION API TEST SUITE SUITE", () => {
    let orgList: OrganizationList;
    before(async () => {
        orgList = await listOrganizations(PRIVATE_TOKEN);
    })
    it("CASE:是否返回数组结构", () => {
        expect(orgList).is.instanceof(Array);
    });
    it("CASE:item是否满足对应结构", () => {
        expect(orgList[0]).to.be.an('object').that.have.any.keys([
            'avatar', 'dateCreated', 'id',
            'isEarlyAdopter', 'name', 'require2FA',
            'slug', 'status'
        ]);
    });
    it("CASE:是否返回数组结构", async () => {
        const teams = await listOrganizationTeams(PRIVATE_TOKEN, ORG_SLUG);
        expect(teams).is.instanceof(Array);
    });
})