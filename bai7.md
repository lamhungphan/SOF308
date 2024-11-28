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

### Emit
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
## 2. Form Binding
