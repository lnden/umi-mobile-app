import router from 'umi/router';
import { getLocale, setLocale } from 'umi/locale';

import { getLogout } from '@/services/module/user';
import config from '@/services/config';
import { delay } from '@/utils';
import { removeCache } from '@/utils/cookies';

const initialState = {
    isMask: false,
    language: [getLocale()],
    theme: ['#00FF00'],
};
export default {
    namespace: 'global',
    state: initialState,
    subscriptions: {},
    reducers: {
        /* eslint-disable no-param-reassign */
        setLocale(state, { payload }) {
            state.language = payload;
            // 该方法可以舍去，直接调用 setLocale(payload)
            setLocale(payload);
        },
        setTheme(state, { payload }) {
            state.theme = payload;
        },
    },
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
