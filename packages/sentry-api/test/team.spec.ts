import { expect } from 'chai';
import { listOrganizationTeams } from '../src/index';
import { Teams } from '../src/typings/team';
import { ORG_SLUG, PRIVATE_TOKEN } from './constant';

describe("Team API TEST SUITE SUITE", () => {
    let teams: Teams;
    before(async () => {
        teams = await listOrganizationTeams(PRIVATE_TOKEN, ORG_SLUG);
    })
    it("CASE:是否返回数组结构", () => {
        expect(teams).is.instanceof(Array);
    });
})