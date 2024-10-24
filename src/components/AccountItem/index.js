import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
import style from "./AccountItem.module.scss";
const cx = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image
                className={cx("avata")}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    {data.nickname}
                    {data.tick && (
                        <span>
                            <FontAwesomeIcon
                                style={{ color: "#74C0FC", marginLeft: "5px" }}
                                icon={faCircleCheck}
                            />
                        </span>
                    )}
                </h4>
                <p className={cx("usename")}> {data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
