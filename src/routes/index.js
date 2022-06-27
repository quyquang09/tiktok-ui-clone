import config from '~/config';

import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

//Không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

//Phải đăng nhập mới xem được nó sẽ chuyển sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };