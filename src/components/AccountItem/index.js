import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import style from "./AccountItem.module.scss";
const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avata")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~c5_300x300.webp?lk3s=a5d48078&nonce=55120&refresh_token=4225bd77dcb2459a1e10614210088201&x-expires=1728198000&x-signature=VtXMiVC5NAzfj0m6ENNyEZfzpSE%3D&shp=a5d48078&shcp=c1333099"
                alt=""
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>hoa.hanassii <span><FontAwesomeIcon style={{color: "#74C0FC"}} icon={faCircleCheck} /></span></h4>
                <p className={cx("usename")}>Đào Lê Phương Hoa</p>
            </div>
        </div>
    );
}

export default AccountItem;
