import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./Button.module.scss";

const cx = classNames.bind(style);

function Button({
    children,
    primary,
    outline,
    text,
    disabled,
    rounded,

    leftIcon,
    rightIcon,

    className,
    to,
    href,

    small,
    large,

    onClick,
    ...passEvent
}) {
    let Comp = "button";

    const _props = {
        onClick,
        ...passEvent,
    };

    if (to) {
        Comp = Link;
        _props.to = to;
    } else if (href) {
        Comp = "a";
        _props.href = href;
    }
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith("on") && typeof _props[key] === "function") {
                delete _props[key];
            }
        });
    }

    let classes = cx("wrapper", {
        primary,
        outline,
        text,
        disabled,
        rounded,

        small,
        large,
        [className]: className,
    });
    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx("leftIcon")}>{leftIcon}</span>}
            <div className={cx("children")}>{children}</div>
            {rightIcon && <span className={cx("rightIcon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
