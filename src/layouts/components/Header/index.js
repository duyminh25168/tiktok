import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";

import Menu from "~/components/Popper/Menu";
import Button from "~/components/Button";
import style from "./header.module.scss";
import logo from "~/assets/images/logo";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
const cx = classNames.bind(style);

const menuList = [
    {
        title: "English",
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
    },
    {
        title: "Feedback and help",
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: "/login",
    },
    {
        title: "Keyboads shortcuts",
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        });
    });
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={logo.logo} alt="LOGO" />
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex="-"
                            {...attrs}
                        >
                            <WrapperPopper>
                                <h4 className={cx("sug-account")}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPopper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input
                            spellCheck={false}
                            type="text"
                            placeholder="tìm kiếm"
                            className={cx("search-input")}
                        />
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={cx("search-input-close")}
                        />
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={cx("search-input-load")}
                        />
                        <span className={cx("search-line")}></span>
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className={cx("search-icon")}
                            />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("action")}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>

                    <Menu menuList={menuList}>
                        <button className={cx("Ellipsis-btn")}>
                            <FontAwesomeIcon
                                className={cx("Ellipsis-icon")}
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
