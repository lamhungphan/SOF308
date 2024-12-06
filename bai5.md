# Data Binding và Reactivity

## 1. Data Binding
Cơ chế tự động liên kết dữ liệu giữa App và UI

### One-way Data Binding
#### `v-bind`
```html
<template>
  <div>
    <p>Name: <input type="text" :value="name"></p>
    <a :href="url" class="btn">click me</a>
  </div>
</template>

<script>
export default {
 data(){
    return {
        name: 'Vue',
        url: 'https://www.google.com'
    }
 }
}
</script>
```
1. `:value="name"`
- Dữ liệu từ component (model) truyền đến UI (view) -> 1-way
- Dùng directive v-bind để liên kết thuộc tính `value` của ô input với giá trị `name` trong `data`
Giá trị của `name` sẽ hiển thị trong ô input, nhưng thay đổi nội dung ô input không cập nhật lại giá trị `name` trong model

2. `:href="url"`
- v-bind được dùng để gắn giá trị của url vào thuộc tính href của thẻ `<a>`
- Dữ liệu chỉ truyền một chiều từ url trong data đến thuộc tính href

#### `props`
  - Dữ liệu truyền từ component cha xuống component con qua `props` (luồng dữ liệu một chiều)
  - Vue hỗ trợ xác thực `props` (kiểu dữ liệu, giá trị mặc định, bắt buộc) để đảm bảo tính nhất quán
```html
<!--ChildComponent-->
<script>
export default {
  // Định nghĩa props nhận từ component cha
  props: {
    title: {
      type: String, // Kiểu String
      required: true // Bắt buộc phải truyền
    },
    tags: {
      type: Array, // Kiểu Mảng
      default: () => [] // Giá trị mặc định là mảng rỗng
    }
  }
};
</script>

<template>
  <div>
    <h2>{{ title }}</h2> <!-- Hiển thị tiêu đề -->
    <h3>Tags:</h3>
    <ul>
      <!-- Hiển thị danh sách tags -->
      <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
    </ul>
  </div>
</template>
```
```html
<!--ParentComponent-->
<script>
import ChildComponent from './ChildComponent.vue'; // Import component con

export default {
  components: { ChildComponent }, // Đăng ký component con
  setup() {
    const postTitle = 'Học Vue.js'; // Tiêu đề
    const postTags = ['Vue', 'Props', 'Data Binding']; // Danh sách tag

    return { postTitle, postTags };
  }
};
</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <!-- Truyền dữ liệu xuống component con -->
    <ChildComponent :title="postTitle" :tags="postTags" />
  </div>
</template>
```
### ``Lưu ý``
1. Luồng dữ liệu một chiều
- Dữ liệu chỉ truyền từ cha xuống con qua props
- Component con không được phép chỉnh sửa trực tiếp props
2. Tái sử dụng
- Component con có thể được sử dụng trong nhiều component cha với dữ liệu khác nhau
3. Có thể truyển các kiểu dữ liệu phức tạp như `Mảng` hoặc `Đối tượng`
```js
 const props = defineProps({
    propertyName: Array
 });
```
```js
 const props = defineProps({
    propertyName: Object
 });
```

### Two-way Data Binding
#### `v-model`
  - Đồng bộ dữ liệu giữa **view** và **model**
  - Khi dữ liệu hoặc giao diện thay đổi, cả hai sẽ tự động được cập nhật
```html
<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message"> <!-- v-model để ràng buộc hai chiều -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue.js'
    };
  }
};
</script>
```

## 2. Composition API
### setup
- Hàm khởi tạo được gọi trước khi component được tạo
- Trả về dữ liệu hoặc logic để sử dụng trong template

### Reactivity System

### computed
Tính toán các giá trị phụ thuộc vào reactive state, giúp tối ưu hiệu suất
```js
const fullName = computed({
  get: () => `${user.firstName} ${user.lastName}`,
  set: value => {
    const parts = value.split(' ');
    user.firstName = parts[0];
    user.lastName = parts[1];
  }
});
```

### watch
Theo dõi reactive state và thực thi hành động khi dữ liệu thay đổi
```js
// Thực hiện API call mỗi khi từ khoá tìm kiếm thay đổi
watch(() => state.searchKey, async (newKey) => {
  const results = await fetchAPI(newKey);
  state.results = results;
});
```

## 3. Reactivity System
Vue.js sử dụng Proxy API để tạo ra các đối tượng phản ứng, cho phép theo dõi sự thay đổi trong dữ liệu và tự động cập nhật giao diện người dùng
### ref
- Tạo reactive state cho dữ liệu đơn giản
- Truy cập giá trị qua `.value`
```html
<script>
import {ref} from 'vue';

export default {
  setup(){
    const count = ref(0); // count là 1 object, giá trị thực được lưu trữ trong thuộc tính .value
    const increment = () => {
      count.value++;
    }
    return {count, increment}
  }
};
</script>

<template>
  <div>{{ count }}</div>
  <button> @click="increment">Increment</button>
</template>
```

**dùng với các kiểu dữ liệu**
```js
// Primitive
const number = ref(5);
const name = ref('John');
const isActive = ref(false);
const flag = ref(null);

// Objects / Array
// dùng ref nếu không cần phản ứng ở từng thuộc tính riêng lẻ
const user = ref({name: 'Alice', age: 30});
user.value.age = 31; // cập nhật giá trị thông qua .value
```

### reactive
- Tạo reactive state cho Object hoặc Array
- Vue theo dõi mọi thay đổi của thuộc tính bên trong và cập nhật giao diện tự động
```html
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({ count: 0, user: { name: 'John', age: 25 } });
    // state là 1 object reactive

    const increment = () => {
      state.count++;
    };

    return { state, increment };
}
</script>

<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="increment">Increment</button>
  </div>
</template>
```

#### Nested Reactivity
Vue sẽ theo dõi và tự động cập nhật giao diện khi thay đổi bất kỳ thuộc tính nào trong đối tượng hoặc đối tượng con
```html 
<template>
  <div>
    <p>Name: {{ state.user.name }}</p>
    <p>City: {{ state.user.address.city }}</p>
    <button @click="changeCity">Change City</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      user: {
        name: 'Sunny',
        address: {
          city: 'New York'
        }
      }
    });

    // Thay đổi giá trị thành phố
    const changeCity = () => {
      state.user.address.city = 'Los Angeles';
    };

    return { state, changeCity };
  }
};
</script>
```
- Khi thay đổi `state.user.address.city`, Vue sẽ tự động cập nhật giá trị mới vào giao diện mà không cần gọi `setState` hoặc `this.$forceUpdate()`
- `state.user.address.city` có thể thay đổi thành **'Los Angeles'**, và giao diện sẽ phản ánh ngay lập tức

#### Reactive Arrays
```html
<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">Add Orange</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive(['Apple', 'Banana']);

    // Thêm một phần tử vào mảng
    const addItem = () => {
      items.push('Orange');
    };

    return { items, addItem };
  }
};
</script>
```
- Mảng `items` là một reactive array, nên khi gọi `items.push('Orange')`, Vue sẽ tự động cập nhật giao diện để hiển thị phần tử mới
- Mỗi lần thêm một phần tử mới vào mảng, giao diện sẽ tự động render lại các phần tử trong mảng

#### Reactive với các thao tác trực tiếp trên Object/Array
```html
<template>
  <div>
    <p>{{ state.user.name }}</p>
    <button @click="deleteName">Delete Name</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      user: {
        name: 'Sunny',
        age: 25
      }
    });

    // Xóa tên người dùng
    const deleteName = () => {
      delete state.user.name; // Vue sẽ tự động cập nhật giao diện
    };

    return { state, deleteName };
  }
};
</script>
```
- Khi gọi `delete state.user.name`, Vue sẽ tự động cập nhật giao diện nếu giá trị `name` được sử dụng trong template
- Tương tự, các thao tác khác như `push`, `splice`, hay thay đổi giá trị của thuộc tính trong đối tượng đều được Vue tự động cập nhật

## 4. Class & Style Binding
Có hai cách để binding class trong Vue
## Class Binding
#### Object Syntax
Bind nhiều class dựa trên các điều kiện logic. Mỗi key là tên class và value là một điều kiện (boolean) để quyết định có áp dụng class hay không
```html
<div :class="{ active: isActive, disabled: !isEnabled }"></div>
```

#### Array Syntax
Phù hợp với class cố định hoặc động từ dữ liệu
```html
<div :class="['class1', dynamicClass]"></div>
```

## Style Binding
#### Object Syntax
Bind nhiều thuộc tính style cho một phần tử. Mỗi key là tên thuộc tính CSS và value là giá trị của thuộc tính đó
```html
<div :style="{ color: textColor, fontSize: fontSize + 'px' }"></div>
```

#### Array Syntax
Kết hợp nhiều style object, giúp dễ dàng quản lý nhiều bộ style
```html
<div :style="[baseStyle, overrideStyle]"></div>
```