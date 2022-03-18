import { buildUsersFetchUrl } from "./helpers";

const apiUrl = 'http://localhost:8000/users';

export function fetchUsers (params) {
    const result = {};
    return fetch(buildUsersFetchUrl(apiUrl, params))
        .then(res => {
            result.total = Number(res.headers.get('X-Total-Count')); 
            return res.json()
        })
        .then(data => {
            result.data = data;
            return result;
        });
}

export function addUsers(values) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            name: values.name,
            email: values.email,
            role: values.role,
        })
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data;
        });
}

export function deleteUser(id) {
    return fetch(apiUrl + '/' + id, {
        method: 'DELETE',
    })
    .then(res => {
        return res.json()
    })
}