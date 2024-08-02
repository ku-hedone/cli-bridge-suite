export const randomString = (length: number) => {
    const len = Math.min(length, 15);
    const words = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_-';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    const maxPos = 50;
    let res = '';
    for (let i = 0; i < len; i++) {
        res += words.charAt(Math.floor(Math.random() * maxPos));
    }
    return res;
}
