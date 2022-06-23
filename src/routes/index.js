import { HeaderOnly } from '~/components/Layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

//Không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//Phải đăng nhập mới xem được nó sẽ chuyển sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
