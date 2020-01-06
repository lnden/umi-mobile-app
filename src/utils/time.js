import moment from 'moment';
import config from '@/services/config';

moment.locale('zh-cn');

export const cookiesExpireTime = time => {
    let expireDate = new Date();
    expireDate = new Date(expireDate.getTime() + time || config.localCacheTime);
    return expireDate;
};

export default moment;
