import { routerRedux } from 'dva/router';
import router from 'umi/router';

import config from '@/services/config';
import { delay } from '@/utils';
import { setCache, removeCache } from '@/utils/cookies';
import { getLogin, getLogout } from '@/services/module/user';

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
        *logout(_, { select, call, put }) {
            const result = yield call(getLogout);
            if (result.flag) {
                yield call(removeCache, {
                    key: config.localCacheAlias.token,
                    type: 1,
                });
                yield call(delay, 1000);
                router.replace('/user/login');
            }
        },
    },
};
