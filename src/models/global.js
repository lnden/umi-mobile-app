import router from 'umi/router';

import { getLogout } from '@/services/module/user';
import config from '@/services/config';
import { delay } from '@/utils';
import { removeCache } from '@/utils/cookies';

const initialState = {
    isMask: false,
};
export default {
    namespace: 'global',
    state: initialState,
    subscriptions: {},
    reducers: {},
    effects: {
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
