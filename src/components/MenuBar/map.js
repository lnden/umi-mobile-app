import { formatMessage } from 'umi/locale';

export default [
    {
        title: formatMessage({ id: 'menu.home' }),
        icon: 'home',
        selectedIcon: 'home',
        link: '/',
    },
    {
        title: formatMessage({ id: 'menu.discover' }),
        icon: 'discover',
        selectedIcon: 'discover',
        link: '/discover',
        badge: 'new',
    },
    {
        title: formatMessage({ id: 'menu.message' }),
        icon: 'message',
        selectedIcon: 'message',
        link: '/message',
        badge: '6',
    },
    {
        title: formatMessage({ id: 'menu.mine' }),
        icon: 'mine',
        selectedIcon: 'mine',
        link: '/mine',
        dot: true,
    },
];
