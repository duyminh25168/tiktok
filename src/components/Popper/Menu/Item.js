import classNames from "classnames/bind";
import stype from "./Menu.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(stype);

function Item({ data }) {
    return (
        <Button leftIcon={data.icon} text className={cx("item")} to={data.to}>
            {data.title}
        </Button>
    );
}

export default Item;
