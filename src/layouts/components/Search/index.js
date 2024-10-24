import TippyHeadless from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import { Wrapper as WrapperPopper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import style from "./Search.module.scss";
import { useDebounce } from "~/hook";

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState(true);
    const [load, setLoad] = useState(false);
    const searchInput = useRef(null);
    const debouncedValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoad(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                debouncedValue
            )}&type=less`
        )
            .then((data) => data.json())
            .then((data) => {
                setLoad(false);
                setSearchResult(data.data);
            });
    }, [debouncedValue]);

    const handleClose = () => {
        setSearchValue("");
        setSearchResult([]);
        searchInput.current.focus();
    };
    return (
        <TippyHeadless
            visible={result && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-" {...attrs}>
                    <WrapperPopper>
                        <h4 className={cx("sug-account")}>Account</h4>
                        {searchResult.map((data) => {
                            return <AccountItem key={data.id} data={data} />;
                        })}
                    </WrapperPopper>
                </div>
            )}
            onClickOutside={() => setResult(false)}
        >
            <div className={cx("search")}>
                <input
                    ref={searchInput}
                    spellCheck={false}
                    type="text"
                    placeholder="tìm kiếm"
                    className={cx("search-input")}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    value={searchValue}
                    onFocus={() => {
                        setResult(true);
                    }}
                />
                {!!searchValue && !load && (
                    <button
                        className={cx("search-input-close")}
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {load && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx("search-input-load")}
                    />
                )}
                <span className={cx("search-line")}></span>
                <button className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
