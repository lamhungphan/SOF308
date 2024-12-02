# Event Handling và Form Binding
## 1. Event Handling
### Listen to Events
Để lắng nghe các sự kiện DOM dùng directive `v-on` viết tắt là `@` và thực thi JavaScript khi những sự kiện này được kích hoạt
```html
<script setup>
    import {ref} from 'vue'

    const count = ref(0)
</script>

<template>
    <div>
        <button class="btn btn-dark" @click="count++">COUNT IS {{ count }}</button>
    </div>
</template>    
```

#### Emit
- Là cơ chế dùng để phát ra các sự kiện từ 1 component con để báo cho component cha  biết rằng 1 hành động đã xảy ra (như thay đổi dữ liệu hoặc gửi thông tin ngược lên)
- Đây là cách mà component con và cha có thể giao tiếp với nhau
- Cách dùng: `emit` với **Composition API** và **script setup**
Với script setup, dùng **defineEmits** (hàm trong Composition API) để khai báo các sự kiện mà component con có thể phát
```html
<!--Child-->
<template>
    <button @click="sendEvent">Click me</button>
</template>

<script setup>
    const emit = defineEmits(['my-event']);
    const sendEvent = () => {
        emit('my-event', 'dữ liệu từ phía component con')
    }
</script>
```
```html
<!--Parent-->
<template>
    <div>
        <ChildComponent @my-event="handleEvent" />
    </div>
</template>

<script setup>
    import ChildComponent from './ChildComponent.vue';

    const handleEvent = (data) => {
        alert(data);
    }
</script>
```
Khi chạy App.vue chỉ cần import Parent
```html
<script setup>
    import Parent from './components/slide7/ParentComponent.vue';
</script>

<template>
  <div>
    <Parent />
  </div>
</template>
```
### Method Handlers 
Thông thường ở các bài toán thực tế thì code xử lý sự kiện sẽ không đơn giản là một dòng, mà nó sẽ rất phức tạp. Chính vì thế nên Vue.js cũng hỗ trợ chúng ta tách phần code xử lý vào hàm và gọi hàm đó ở trên sự kiện như javascript thuần
```html
<template>
  <div>
    <button class="btn btn-dark m-5" @click="addNumber">Thêm</button>
    <p>Số lượng: <span class="text-danger">{{ count }}</span></p>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    const count = ref(0)
    const addNumber = () => {
    count.value += 1;
}
</script>
```
Truyền tham số
```html
<script setup>
    const handleClick = (message) => {
    alert(message);
};
</script>

<template>
  <div>
    <button @click="() => handleClick('Hello')">Click me</button>
  </div>
</template>
```
### Event modifiers
Trong javascript thuần chúng ta thường sử dụng các event modifiles để tác động đến cách xử lý của sự kiện như: preventDefault(), stopPropagation(),... 
```js
formHandler(event) {
    event.preventDefault();
    // form handling logic
}
```
Những cách trên vẫn có thể sử dụng được đối với Vue.js, nhưng ngoài cách đó thì Vue.js còn hỗ trợ chúng ta khai báo ở directive bằng cách thêm chúng vào đằng sau directive và ngăn cách giữa chúng bằng dấu .
```html
<form @submit.prevent="formHandler"></form>
```
Vue cung cấp một số modifier sự kiện khác nhau hữu ích trong các tình huống xử lý sự kiện phổ biến
**.stop**: Ngăn chặn sự kiện không tiếp tục truyền lên các phần tử cha trong DOM
**.prevent**: Gọi event.preventDefault(), sử dụng để ngăn chặn hành vi của sự kiện
**.capture**: Lắng nghe sự kiện ở giai đoạn capturing
**.self**: Chỉ kích hoạt sự kiện với chính phần tử gán sự kiện đó
**.once**: Chỉ kích hoạt sự kiện 1 lần

### Key modifiers
- Vue.js hỗ trợ khai báo sự kiện nhấn phím bằng cách thêm mã code của phím đó vào sau directive v-on:keyup và ngăn cách giữa chúng bời dấu **.**
- Cấu trúc sử dụng
```js
v-on:event.keyCode="method" //eg: v-on:keyup.13="submit" 
v-on:event.alias="method"   //eg: v-on:keyup.enter="submit"
```
- Vue đã cung cấp alias (tên phím mà con người hiểu được) cho một số phím thông dụng
    - .enter
    - .delete
    - .tab
    - .esc
    - .space
    - .up
    - .down
    - .left
    - .right
```html
<!--Bắt sự kiện nhấn phím enter-->
<script setup>
    const warn = () => {
    alert('Bạn vừa ấn Enter!');
    };
</script>

<template>
  <div>
    <input type="text" v-on:keyup.enter="warn" />
  </div>
</template>
```

### System Modifier Keys
- Trường hợp một số phím chuyên biệt (phím hệ thống Ctrl, Alt, Shift, Meta và các nút ở trên chuột) sẽ có các modifier riêng
- Những phím hệ thống này thường không được ấn một mình mà sẽ kết hợp thành một tổ hợp phím (đó là lí do vì sao nó trở nên đặc biệt)
```html
<!-- Alt + C --> <input @keyup.alt.67="method"> 
<!-- Ctrl + Click --> <div @click.ctrl="method">Ctrl click để chạy</div>
```

### .exact Modifier
Sử dụng trong trường hợp cho phép kiểm soát sự kết hợp chính xác của các công cụ sửa đổi hệ thống cần thiết để kích hoạt một sự kiện
```html
<!-- Sẽ kích hoạt ngay cả khi nhấn Alt hoặc Shift -->
<button @click.ctrl="onClick">A</button>

<!-- Sẽ kích hoạt khi nhấn Ctrl và không có phím nào khác được nhấn-->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- Sẽ kích hoạt khi không có System Modifier nào được nhấn-->
<button @click.exact="onClick">A</button>
```

### Mouse Button Modifiers
- .left
- .right
- .middle

## 2. Form Binding
Là cách thức liên kết dữ liệu của một form HTML với dữ liệu trong component. VueJS cung cấp các directives như **v-model** để giúp việc liên kết này trở nên đơn giản và hiệu quả
### Text input
```html
<template>
  <div>
    <label for="name">Tên:</label>
    <input id="name" v-model="name" type="text">
    <p>Tên của bạn là: {{ name }}</p>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const name = ref('Liên');
</script>

```
### Multiline text
```html
<script setup>
    import { ref } from 'vue'
    const message = ref('')
</script>

<template>
    <span>Để lại góp ý tại đây:</span>
    <p>{{ message }}</p>
    <textarea v-model="message" placeholder="Nội dung góp ý..."></textarea>
</template>
```
### Checkbox
```html
<template>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked"> Chấp nhận điều khoản
    </label>
    <p>Trạng thái: {{ isChecked ? 'Đã chấp nhận' : 'Chưa chấp nhận' }}</p>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const isChecked = ref(false);
</script>
```
### Multiple Checkbox
```html
<template>
  <div>
    <input type="checkbox" value="HTML" v-model="checkedNames">HTML <br>
    <input type="checkbox" value="CSS" v-model="checkedNames">CSS <br>
    <input type="checkbox" value="JavaScript" v-model="checkedNames">JavaScript <br>
    <p>Ngôn ngữ bạn chọn: {{ checkedNames.join(', ') }}</p>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const checkedNames = ref([]);
</script>

```
### Select/Option
```html
<template>
  <div>
    <label for="fruit">Chọn loại trái cây: </label>
    <select id="fruit" v-model="selectedFruit">
      <option value="Apple">Táo</option>
      <option value="Banana">Chuối</option>
      <option value="Orange">Cam</option>
    </select>
    <p>Trái cây bạn chọn là: {{ selectedFruit }}</p>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const selectedFruit = ref('Apple');
</script>
```
### Value Bindings
Đối với các tùy chọn radio, checkbox và select option, các giá trị liên kết v-model thường là các chuỗi tĩnh (hoặc boolean cho checkbox)
```html
<!-- `picked` là một chuỗi "a" khi được chọn -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` là true hoặc false -->
<input type="checkbox" v-model="toggle" />

<!-- `selected` là một chuỗi "abc" khi tùy chọn đầu tiên được chọn -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```
Có thể tùy chỉnh các thuộc tính khác ngoài value như `checked`, `selected`, `innerHTML`, v.v., bằng cách sử dụng **`v-bind`** cùng với **`v-model`**
```html
<template>
   <input
      type="text"
      v-model="message"
      :placeholder="placeholder"
    />
</template>

<script setup>
    import { ref } from 'vue';

    const message = ref('');
    const placeholder = ref('Type something here...');
</script>
```
- **.lazy** Chỉ cập nhật giá trị sau khi sự kiện change được kích hoạt thay vì input
- **.number** Chuyển đổi giá trị input thành kiểu số
- **.trim** Tự động loại bỏ khoảng trắng ở đầu và cuối của chuỗi
```html
<template>
  <input v-model.lazy="name" />
  <input v-model.number="age" type="number" />
  <input v-model.trim="text" />
</template>
```
### v-model với Component
Khi sử dụng v-model với component tùy chỉnh, VueJS tự động thực hiện 2 bước:
- **Bước 1**: Sử dụng `props` để nhận giá trị `modelValue`
- **Bước 2**: Phát sự kiện `update:modelValue` để cập nhật giá trị
```html
<!--ParentComponent.vue-->
<template>
    <div>
        <CustomInput v-model="inputValue"/>
        <p>Input Value: {{ inputValue }}</p>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import CustomInput from './CustomInput.vue';
    export default {
        components: {CustomInput},
        setup() {
            const inputValue = ref('');
            return {
                inputValue
            };
        },
    };
</script>
```
```html
<!--CustomInput.vue-->
<template>
    <div>
        <input :value="modelValue" @input="updateValue" />
    </div>
</template>

<script>
    export default {
        props: ['modelValue'],
        methods: {
            updateValue(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }          
    };
</script>
```
- Component cha ParentComponent.vue dùng `v-model` để liên kết một biến với giá trị từ component con
- Component con CustomInput.vue nhận giá trị từ `v-model` thống qua `props` và phát sự kiện `update:modelValue` khi giá trị thay đổi