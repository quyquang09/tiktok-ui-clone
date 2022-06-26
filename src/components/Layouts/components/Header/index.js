import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';
const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    //Handle Logic
    const handleMenuChange = (menuItem) => {};
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'Tiếng Việt',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Phản hồi và trợ giúp',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Phím tắt trên bàn phím',
        },
    ];
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo Tiktok"></img>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>8</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="nguyen van a"
                                src="https://p1s6-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2757d3c87d5210172cdfbd594f33c6b7.jpeg?x-expires=1656324000&x-signature=obpYEevlIPbjM%2F3l8XQdz0OH20Y%3D"
                                fallback="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-1/162847721_463674688086555_9006540764942074285_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eP8L8GeU5jAAX8p1CV2&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT8bFXKwSvARhalhCmeuUa4e2KIMS3nUiO-8c2h34NiwnA&oe=62DE2A79"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
