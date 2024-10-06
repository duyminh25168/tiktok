import classNames from "classnames/bind";
import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/SideBar";
import style from "./DefaultLayout.module.scss";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx("wrapper")}>
                <Header />
                <div className={cx("container")}>
                    <SideBar />
                    <div className={cx("content")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
