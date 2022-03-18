export function buildUsersFetchUrl(baseUrl, params) {
    let res = baseUrl + '?';

    for(let key in params) {
        res += key + '=' + params[key] + '&';
    }

    res = res.slice(0, -1);

    return res;
}