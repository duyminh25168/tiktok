import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/layouts";
const publicPage = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/following",
        component: Following,
    },
    {
        path: "/profile",
        component: Profile,
        layout: null,
    },
    {
        path: "/upload",
        component: Upload,
        layout: HeaderOnly,
    },
];

const privatePage = [];

export { publicPage, privatePage };
