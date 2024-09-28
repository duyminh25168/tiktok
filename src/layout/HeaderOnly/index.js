import Header from "~/layout/components/Header";
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default HeaderOnly;
