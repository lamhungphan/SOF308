# Router & Authentication
## 1. Router là gì
- khái niệm “router” dùng để chỉ một cơ chế hoặc công cụ được sử dụng nhằm xác định cách một ứng dụng (application) phản ứng (respond) lại một yêu cầu (request) từ client đến một điểm cuối xác định (endpoint) dựa trên URL
- Các request được định tuyến (routes) đến các hàm (functions or actions) trong Controller thích hợp.
- Router đặc biệt cần thiết cho việc quản lý điều hướng, xử lý URLs trong ứng dụng web, đặc biệt là SPAs (single-page applications) và các Frameworks phía server

### Vue Router
- là thư viện router chính thức dùng cho Vue.js
- được tích hợp sâu với Vue.js core để xây dựng SPA 

### Các tính năng
- `Nested routes` Cho phép tham chiếu components đến các đường dẫn lồng nhau trong ứng dụng
- `Dynamic Routing` Cho phép tạo routes có các phần giá trị động
- `Programmatic Navigation` Cho phép lập trình điều hướng trong ứng dụng sử dụng Javascript
- `Route Guards` là các hàm mà có thể được gắn vào trước khi đến một route hoặc sau khi rời một route (Hữu ích cho authentication, phân quyền)
- `Lazy Loading` Cho phép tách ứng dụng thành các khối nhỏ và chỉ tải các components khi cần thiết giúp cải thiện hiệu suất
- `Named Routes` Cho phép đặt tên cho routes
- `Route Aliases` Cung cấp phương án thay thế cho URLs, cho phép cùng component có thể được render với nhiều đường dẫn khác nhau
- `Scroll Behavior` Cho phép tùy biến hành vi cuộn trên ứng dụng khi điều hướng giữa các routes
- `History Modes` Hỗ trợ lịch các chế độ lịch sử để kiểm soát URLs

### Cài đặt

### Router Link & Router View
- Để điều hướng giữa các routes khác nhau,  sử dụng component <RouterLink>
- Để hiển thị component tương ứng cho route hiện tại, sử dụng <RouterView>

### Dynamic Routing
- Ta thường cần sử dụng các routes có cùng hình mẫu (pattern) cho cùng component
- ví dụ: Hiển thị component: User dùng để hiển thị cho tất cả các user nhưng khác user-id
```js
import User from './User.vue'
// these are passed to 'createRouter'
const routes = [
    // dynamic segments start with a colon
    { path: '/users/:id', component: User},
]
// Những URLs như /users/tom HOẶC /users/jerry đều tham chiếu tới cùng 1 route
```

### Nested Routes
- Sử dụng route lồng nhau phù hợp với việc xây dựng hệ thống view phân cấp phức tạp.
- `/user/tom/profile` sẽ render UserProfile của Tom
- `/user/tom/posts` sẽ render UserPosts - tất cả bài post của Tom
```js
const routes = [
    { 
        path: '/users/:id', 
        component: User,
        children: [
            {
                path: 'profile', 
                component: User,
            },
            {
                path: 'posts', 
                component: User,
            }
        ]
    }
]
```

### Programatic navigation
Cho phép chuyển hướng trong ứng dụng sử dụng Javascript sử dụng đường dẫn (route path) hoặc truyền các đối tượng đối với việc điều hướng phức tạp hơn
```js
this.$router.push('/about');
```
```js
this.$router.push({name: 'user', params: {id: 123} });
```

### Named Routes
Cho phép đặt tên cho routes để dễ dàng hơn trong việc điều hướng trong lập trình
```js
const routes = [
    { 
        path: '/users/:id', 
        name: 'user',
        component: User
    }
]

this.$router.push({name: 'user', params: {id: 123} });
```

### Route Aliases
Cho phép render cùng component đối với đường dẫn khác nhau
```js
const routes = [
    { 
        path: '/profile', 
        alias: '/user/profile',
        component: UserProfile
    }
];
```

### Route Guards
- Là các functions có thể được gắn (hook) vào trước hoặc sau khi rời một route
- Hữu dụng cho xác thực, phân quyền và lấy dữ liệu
```js
const router = createRouter({
    history: createWebHistory(),
    routes = [
    { 
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) {
                next();
            } else {
                next('/login');
            }
        }
    }
]
});
```

## 2. Authentication
Để xử lý xác thực với Vue.js cần một số bước thiết lập bao gồm cài đặt các routes yêu cầu xác thực, kiểm soát việc login/logout và bảo vệ những tài nguyên của ứng dụng từ việc truy cập trái phép

### `Cấu trúc cơ bản của Authen thông qua Route`
### Route Metadata
Trong router/index.js, thuộc tính meta được sử dụng với giá trị requireAuth = true để xác định rằng route này yêu cầu phải được xác thực
```js
const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/admin", component: AdminPage, name: "admin", meta: { requiresAuth: true } },
];
```

### Navigation Guard (beforeEach)
```js
router.beforeEach((to, from, next) => {
  const isAuthenticated = false;
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' }); 
  } else {
    next();
  }
});

export default router;
```
- `beforeEach` chạy trước mõi thay đổi về route
- `to.matched.some (record => record.meta.requiresAuth)` kiểm tra nếu route đang được điều hướng yêu cầu xác thực
- `isAuthenticated` một giá trị kiểm tra xem user đã đăng nhập hay chưa
- `next({ name: ‘Login’ })` nếu user chưa được xác thực, chuyển hướng đến trang Login
- `next()` nếu user đã được xác thực hoặc route không yêu cầu xác thực, được phép tiếp tục

### Kiểm tra xác thực trong thực tế: isAuthenticated
Trong thực tế cần thay thế gán cứng `isAuthenticated = false` bằng việc kiểm tra tình trạng xác thực 
- **Kiểm tra token** Tìm kiếm token hợp lệ có thể được lưu ở local storage hoặc cookies
- **Vuex Store** Sử dụng Vuex để lưu trữ toàn cục trạng thái xác thực
```js
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken');
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next({ name: 'login' }); 
  } else {
    next();
  }
});

export default router;
```
