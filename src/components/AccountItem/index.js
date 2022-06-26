import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/27fb8d42672710d2cbe7493b3a5a8ab2~c5_300x300.webp?x-expires=1656244800&x-signature=XdHjr7guFJGS%2F%2FkN%2B3x0uym6j%2FQ%3D"
                alt="Hoaaa"
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
