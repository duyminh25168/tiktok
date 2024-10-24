import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faEllipsisVertical,
    faUser,
    faCoins,
    faGear,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Search from "../Search";
import Menu from "~/components/Popper/Menu";
import Button from "~/components/Button";
import style from "./header.module.scss";
import logo from "~/assets/images";
import Image from "~/components/Image";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
const cx = classNames.bind(style);

const menuList = [
    {
        title: "English",
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            header: "Language",
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "tiếng việt",
                },
            ],
        },
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
    const userLogin = true;
    const menuLogin = [
        {
            title: "View profile",
            icon: <FontAwesomeIcon icon={faUser} />,
        },
        {
            title: "Get coin",
            icon: <FontAwesomeIcon icon={faCoins} />,
        },
        {
            title: "Setting",
            icon: <FontAwesomeIcon icon={faGear} />,
        },
        ...menuList,
        {
            title: "Log Out",
            icon: <FontAwesomeIcon icon={faRightToBracket} />,
            separeat: true,
        },
    ];

    const handleChange = (item) => {
        // handle change
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={logo.logo} alt="LOGO" />
                <Search />
                <div className={cx("action")}>
                    {userLogin ? (
                        <>
                            <Tippy content="Upload Video">
                                <button
                                    className={cx("upload-btn", "action-btn")}
                                >
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message">
                                <button
                                    className={cx("Message-btn", "action-btn")}
                                >
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button
                                    className={cx("inbox-btn", "action-btn")}
                                >
                                    <InboxIcon />
                                    <span className={cx("badge")}>99+</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        menuList={userLogin ? menuLogin : menuList}
                        onChange={handleChange}
                    >
                        {userLogin ? (
                            <Image
                                className={cx("avata-user")}
                                src="https://images.viblo.asia/60x60/e8dd97fc-0e11-4273-8dbe-645b4d7571af.png"
                                alt="avata"
                                fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAT2rBrfXiDIG1t6I9bGQQECbqiATo9NBTLg&s"
                            />
                        ) : (
                            <button className={cx("Ellipsis-btn")}>
                                <FontAwesomeIcon
                                    className={cx("Ellipsis-icon")}
                                    icon={faEllipsisVertical}
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
