# Data Binding và Reactivity

## 1. Data Binding
Cơ chế tự động liên kết dữ liệu giữa App và UI

### One-way Data Binding
- **Props**:
  - Dữ liệu truyền từ component cha xuống component con qua `props` (luồng dữ liệu một chiều).
  - Vue hỗ trợ xác thực `props` (kiểu dữ liệu, giá trị mặc định, bắt buộc) để đảm bảo tính nhất quán.
```js
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: "Nội dung mặc định"
    }
  }
```

#### Có thể truyển các kiểu dữ liệu phức tạp như Mảng hoặc Đối tượng
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
- **v-model**:
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

### ref & reactive
- **ref**:
  - Tạo đối tượng phản ứng cho giá trị cơ bản (số, chuỗi, Boolean)
  - Truy cập giá trị thực qua `.value`
- **reactive**:
  - Biến object hoặc array thành đối tượng phản ứng
  - Tự động cập nhật giao diện khi dữ liệu thay đổi

### computed
- Tính toán các giá trị phụ thuộc vào reactive state, giúp tối ưu hiệu suất
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
- Theo dõi reactive state và thực thi hành động khi dữ liệu thay đổi
```js
// Thực hiện API call mỗi khi từ khoá tìm kiếm thay đổi.
watch(() => state.searchKey, async (newKey) => {
  const results = await fetchAPI(newKey);
  state.results = results;
});
```

## 3. Reactivity System
### ref
- Tạo reactive state cho dữ liệu đơn giản
- Truy cập giá trị qua `.value`
```js
// khai báo
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
```
```html
<!-- sử dụng trong template-->
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
```js
// khai báo
import {reactive} from 'vue';

export default {
  setup(){
    const state = reactive({count: 0, user: {name: 'John', age: 25} });
    // state là 1 object reactive
    
    const increment = () => {
      state.count++; 
    };

    return {state, increment}
  }
}
```
```html
<!-- sử dụng trong template-->
<template>
  <div>{{ count }}</div>
  <button> @click="increment">Increment</button>
</template>
```

#### Nested Reactivity
Vue sẽ làm cho toàn bộ object và các object con trở thành reactive
```js
const state = reactive({
  user: {
    name: 'Sunny',
    address: {
      city: 'New York'
    }
  }
});

state.user.address.city = 'Los Angeles' 
```

#### Reactive Arrays
```js
const items = reactive(['Apple', 'Banana']);

items.push('Orange');
```

#### Reactive với các thao tác trực tiếp trên Object/Array
Có thể dùng các phương thức như push. splice, delete
```js
delete state.user.name; // Vue sẽ tự động cập nhật template nếu 'name' được sử dụng
```

## 4. Class & Style Binding
### v-bind
Sử dụng để bind `class` hoặc `style` vào HTML:
- **Class Binding**:
  - **Object**: `{ active: true, disabled: false }`
    - Thuận tiện khi class phụ thuộc vào nhiều điều kiện
  - **Array**: `[ 'class1', 'class2' ]`
    - Phù hợp với danh sách class cố định
```html
<div :class="{ active: isActive, disabled: !isEnabled }"></div>
<div :class="['class1', dynamicClass]"></div>
```
- **Style Binding**:
  - **Object**: `{ color: 'red', fontSize: '14px' }`
    - Thuận lợi để bind inline style từ logic 
  - **Array**: `[style1, style2]`
    - Dùng để kết hợp nhiều style object
```html
<div :style="{ color: textColor, fontSize: fontSize + 'px' }"></div>
<div :style="[baseStyle, overrideStyle]"></div>
```