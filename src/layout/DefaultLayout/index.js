import Header from "~/layout/components/Header";
import SideBar from "~/layout/components/SideBar";
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <SideBar />
            <div>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
