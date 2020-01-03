import request from '../request';

export const login = (username, password) =>
    request('/login', {
        method: 'POST',
        body: { username, password },
    }).then(res => res?.data || res);
