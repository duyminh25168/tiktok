import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as WrapperPopper } from "~/components/Popper";
import style from "./Menu.module.scss";
import Item from "./Item";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(style);
const defaultFn = () => {};
function Menu({ children, menuList = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: menuList }]);
    const current = history[history.length - 1];
    const listItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <Item
                    key={index}
                    data={item}
                    onclick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[16, 6]}
            placement="bottom-end"
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx("menu")} tabIndex="-" {...attrs}>
                    <WrapperPopper className={cx("list")}>
                        {history.length > 1 && (
                            <Header
                                title={history[history.length - 1].header}
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    );
                                }}
                            />
                        )}
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
