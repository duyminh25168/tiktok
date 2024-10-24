import classNames from "classnames/bind";
import stype from "./Menu.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(stype);

function Item({ data, onclick}) {
    const className = cx("item",{separeat: data.separeat});
    return (
        <Button leftIcon={data.icon} text className={className} to={data.to} onClick={onclick}>
            {data.title}
        </Button>
    );
}

export default Item;
