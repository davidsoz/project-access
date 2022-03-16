export function buildUsersFetchUrl(baseUrl, params) {
    return `${baseUrl}?_page=${params.page}&_limit=${params.perPage}&_order=${params.order}&_sort=${params.sort}&q=${params.search}`
}