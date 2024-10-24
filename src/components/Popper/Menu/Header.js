import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import style from "./Menu.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);

function Header({title,onBack}) {
    return (
        <div className={cx("menu-header")}>
            <button className={cx("header-btn")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h3 className={cx("header-title")}>{title}</h3>
        </div>
    );
}

export default Header;
