# Conditional Rendering và List Rendering
## 1. Conditional Rendering
Conditional Rendering trong Vue.js cho phép hiển thị hoặc ẩn các phần tử trong giao diện dựa trên điều kiện logic.

### `v-if`
- Dùng để hiển thị phần tử nếu điều kiện là **true**. 
- Nếu điều kiện là **false**, phần tử sẽ không được render vào DOM.
```html
<template>
  <div>
    <p v-if="isLoggedIn">Chào mừng bạn quay lại!</p>
    <button v-if="!isLoggedIn" @click="login">Đăng nhập</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    }
  }
};
</script>
```

### `v-else-if`
Dùng để kết hợp với `v-if` khi cần kiểm tra các điều kiện khác nếu điều kiện trước đó là **false**.
```html
<template>
  <div>
    <p v-if="status === 'loading'">Đang tải dữ liệu...</p>
    <p v-else-if="status === 'success'">Tải dữ liệu thành công!</p>
    <p v-else-if="status === 'error'">Đã xảy ra lỗi. Vui lòng thử lại.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'loading' // Thay đổi giá trị để kiểm tra từng trạng thái
    };
  }
};
</script>
```
### `v-else`
Dùng để render một phần tử khi tất cả các điều kiện trước đó đều **false**.
```html
<template>
  <div>
    <p v-if="count > 0">Giá trị lớn hơn 0</p>
    <p v-else>Giá trị không hợp lệ</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: -1
    };
  }
};
</script>
```
### `v-show`
Dùng để hiển thị hoặc ẩn phần tử dựa trên điều kiện, nhưng phần tử vẫn tồn tại trong DOM và chỉ ẩn đi bằng cách sử dụng CSS `display: none`.
```html
<template>
  <div>
    <p v-show="isVisible">Đoạn văn này có thể được ẩn</p>
    <button @click="toggleVisibility">Hiển thị / Ẩn</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
```

## 2. List Rendering
List Rendering trong Vue.js cho phép lặp qua danh sách và render các phần tử dựa trên danh sách đó.

### `v-for`
Dùng để lặp qua mảng, object, hoặc số nguyên để render các phần tử. Cú pháp của `v-for` có thể thay đổi tùy theo loại danh sách lặp qua.

#### Lặp qua mảng
```html
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ index + 1 }}. {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ['Táo', 'Chuối', 'Cam']
    };
  }
};
</script>
```

#### Lặp qua object
Lặp qua các cặp khóa-giá trị trong một object
```html
<template>
  <ul>
    <li v-for="(value, key) in user" :key="key">
      {{ key }}: {{ value }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      user: { name: 'John', age: 25, city: 'New York' }
    };
  }
};
</script>
```

#### Lặp qua số nguyên
Dùng để lặp một số lần nhất định, được chỉ định bằng một số nguyên.
```html
<template>
  <ul>
    <li v-for="n in 5" :key="n">Phần tử thứ {{ n }}</li>
  </ul>
</template>
```