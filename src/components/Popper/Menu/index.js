import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as WrapperPopper } from "~/components/Popper";
import style from "./Menu.module.scss";
import Item from "./Item";
const cx = classNames.bind(style);

function Menu({ children, menuList = [] }) {
    const listItem = (menuList) => {
        return menuList.map((item, index) => {
            return <Item key={index} data={item}/>;
        });
    };
    return (
        <Tippy
            interactive 
            delay={[0,700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu")} tabIndex="-" {...attrs}>
                    <WrapperPopper className={cx("list")}>
                        {listItem(menuList)}
                    </WrapperPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
