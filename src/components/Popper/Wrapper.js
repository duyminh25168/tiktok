import classNames from "classnames/bind";
import style from "./wrapper.module.scss";

const cx = classNames.bind(style);

function Wrapper({ children,className }) {
    return <div className={cx("wrapper",className)}>{children}</div>;
}

export default Wrapper;
