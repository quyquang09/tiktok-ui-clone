import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);
    }, []);
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}> Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                {!!searchValue && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                <button className={cx('search-btn')}>
                    <SearchIcon width="24px" height="24px" />
                </button>
            </div>
        </HeadlessTippy>
    );
}
export default Search;
