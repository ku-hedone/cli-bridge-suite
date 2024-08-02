import { expect } from 'chai';
import { PRIVATE_TOKEN } from './constant';
import { listUsers } from '../src/index'

describe("USER API USAGE TEST SUITE", () => {
    it("CASE: 用户不存在时返回false", async () => {
        const res = await listUsers(PRIVATE_TOKEN, {
            username: "321"
        });
        expect(res.status).to.be.equal(false);
    });
    it("CASE: 用户存在时返回true", async () => {
        const res = await listUsers(PRIVATE_TOKEN, {
            username: "qiangc"
        });
        expect(res.status).to.be.equal(true);
    });
})