import request from '../request';

export const getLogin = ({ account, password }) =>
    // 使用mock模拟请求，POST无返回值，所以使用GET
    request(`login?account=${account}&password=${password}`, {
        method: 'GET',
    }).then(res => res?.data || res);

export const getLogout = () =>
    request('logout', {
        method: 'GET',
    }).then(res => res?.data || res);
