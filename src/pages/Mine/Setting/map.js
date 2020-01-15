import { formatMessage } from 'umi/locale';

const Map = {
    member: [
        {
            thumb: '',
            arrow: 'horizontal',
            extra: formatMessage({ id: 'mine.setting.security.content' }),
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.security' }),
            id: 0,
        },
        {
            thumb: '',
            arrow: 'horizontal',
            extra: formatMessage({ id: 'mine.setting.biological.content' }),
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.biological' }),
            id: 1,
        },
    ],
    major: [
        {
            thumb: '',
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.payment' }),
            id: 0,
        },
        {
            thumb: '',
            arrow: 'horizontal',
            extra: '',
            url: '/mine/setting/comm',
            content: formatMessage({ id: 'mine.setting.general' }),
            id: 1,
        },
        {
            thumb: '',
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.notification' }),
            id: 2,
        },
    ],
    credit: [
        {
            thumb: '',
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.privacy' }),
            id: 3,
        },
        {
            thumb: '',
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.help' }),
            id: 4,
        },
        {
            thumb: '',
            arrow: 'horizontal',
            extra: formatMessage({ id: 'mine.setting.about.content' }),
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.about' }),
            id: 5,
        },
    ],
    service: [
        {
            thumb: '',
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.setting.login' }),
            id: 0,
        },
        {
            thumb: '',
            arrow: 'horizontal',
            extra: '',
            url: '',
            content: formatMessage({ id: 'mine.setting.logout' }),
            id: 1,
        },
    ],
};

export default Map;
