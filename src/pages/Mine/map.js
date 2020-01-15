import { formatMessage } from 'umi/locale';

import mineMember from '@/assets/mine-member.svg';
import mineShanghu from '@/assets/mine-shanghu.svg';

import mineBill from '@/assets/mine-bill.svg';
import mineZong from '@/assets/mine-zong.svg';
import mineYue from '@/assets/mine-yue.svg';
import mineYuebao from '@/assets/mine-yuebao.svg';
import mineHuabei from '@/assets/mine-huabei.svg';
import mineYulibao from '@/assets/mine-yulibao.svg';
import mineHuankuan from '@/assets/mine-huankuan.svg';

import mineZhima from '@/assets/mine-zhima.svg';
import minInsurance from '@/assets/mine-insurance.svg';
import mineJiebei from '@/assets/mine-jiebei.svg';
import mineBank from '@/assets/mine-bank.svg';

import mineBenefit from '@/assets/mine-benefit.svg';
import mineService from '@/assets/mine-service.svg';

const Map = {
    member: [
        {
            thumb: mineMember,
            arrow: 'horizontal',
            extra: '2个积分待领取',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.membership' }),
            id: 0,
        },
        {
            thumb: mineShanghu,
            arrow: 'horizontal',
            extra: '今日收入200.00元',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.merchant' }),
            id: 1,
        },
    ],
    major: [
        {
            thumb: mineBill,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.transactions' }),
            id: 2,
        },
        {
            thumb: mineZong,
            arrow: 'horizontal',
            extra: '账户安全保障中',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.totalassets' }),
            id: 3,
        },
        {
            thumb: mineYue,
            arrow: 'horizontal',
            extra: '0.00元',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.balance' }),
            id: 4,
        },
        {
            thumb: mineYuebao,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.yuebao' }),
            id: 5,
        },
        {
            thumb: mineHuabei,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.huabei' }),
            id: 6,
        },
        {
            thumb: mineYulibao,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.yulibao' }),
            id: 7,
        },
        {
            thumb: mineHuankuan,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.bank' }),
            id: 8,
        },
    ],
    credit: [
        {
            thumb: mineZhima,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.zhima' }),
            id: 9,
        },
        {
            thumb: minInsurance,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.insurance' }),
            id: 10,
        },
        {
            thumb: mineJiebei,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.jiebei' }),
            id: 11,
        },
        {
            thumb: mineBank,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.mybank' }),
            id: 12,
        },
    ],
    service: [
        {
            thumb: mineBenefit,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.alipaylove' }),
            id: 13,
        },
        {
            thumb: mineService,
            arrow: 'horizontal',
            extra: '',
            url: 'http://wwww.baidu.com',
            content: formatMessage({ id: 'mine.customer' }),
            id: 14,
        },
    ],
};

export default Map;
