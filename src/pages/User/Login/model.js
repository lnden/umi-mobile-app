import { routerRedux } from 'dva/router';

import config from '@/services/config';
import { delay } from '@/utils';
import { setCache } from '@/utils/cookies';
import { getLogin } from '@/services/module/user';

const initialState = {
    account: '',
    password: '',
};
export default {
    namespace: 'login',
    state: initialState,
    subscriptions: {},
    reducers: {},
    effects: {
        *login({ payload }, { select, call, put }) {
            const result = yield call(getLogin, payload);
            if (result.flag) {
                yield call(setCache, {
                    key: config.localCacheAlias.token,
                    value: result.token,
                    type: 1,
                }); // 缓存token
                yield call(delay, 1000);
                yield put(routerRedux.replace('/'));
            }
        },
    },
};
