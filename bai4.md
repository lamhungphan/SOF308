# Declaration
Trong Vuejs 3, có thể khai báo biến và phương thức trong component thông qua

## Option API (truyền thống)
**1. Khai báo biến (data)**
Khai báo các biến trong phương thức data -> trả về object chứa các biến đã khai báo
  ```js
  export default {
    data () {
      return {
        count: 0,
        user: {
          name: 'Nam',
          age: 25
        }
      };
    }
  };
  ```

  **2. Khai báo phương thức (methods)**
 ```js
  export default {
    data () {
      return {
        count: 0
      };
    },
    methods: {
      increment(){
        this.count++; <!--dùng this để truy cập biến trong data-->
      },
      reset(){
        this.count = 0; <!--đặt lại count về 0-->
      }
    }
  };
  ```

## Template Syntax
- Vue.js sử dụng các cú pháp mẫu trong HTML để bind và render DOM thành các tag HTML và tất cả các vue.js template này đều phải tuân thủ theo các tag HTML
- Bên dưới, Vue.js biên dịch template thành các hàm render Virtual DOM (DOM ảo). Kết hợp với hệ thống reactivity (phản ứng), Vue.js có thể xác định một cách thông minh số lượng tối thiểu các component cần phải render lại, và áp dụng số lượng tối thiểu các hiệu chỉnh về DOM khi trạng thái của ứng dụng thay đổi

## Interpolation **{{ }}**
Nội suy là quá trình thêm văn bản, nội dung, attribute,... vào các thẻ HTML bằng Vue
```html 
<span>Thông điệp: {{ message }}</span>
```

## Raw HTML
Dùng để hiển thị dữ liệu dưới dạng HTML code (tương tự innerHTML trong Javascript)
```html 
<tag v-html="data"></tag>
<!-- tag  = các tag trong HTML-->
<!-- data = dữ liệu muốn gắn vào tag (khai báo trong data scope) -->
```

## Attributes
```html 
<tag v-bind:attributeName="data"></tag>
<!-- attributeName  = tên attribute muốn binding-->
```
## JavaScript Expression
Vue hỗ trợ các biểu thức JS liên kết trong tất cả các liên kết dữ liệu (binding)
```html 
{{ number + 1 }}

{{ ok ? 'Yes' : 'No' }}

{{ message.split('').reverse().join(('')) }}

<div :id="`list-${id}`"></div>
```

## Directives
- là các thuộc tính đặc biệt bắt đầu bằng prefix (tiền tố) **v-**
- dùng đề áp dụng các cập nhật vào DOM khi giá trị biểu thức thay đổi
- làm việc với view và thực hiện các nhiệm vụ lặp đi lặp lại 1 cách dễ dàng
### Các directive thông dụng
- **v-bind** : lấy dữ liệu và hiển thị lên template
```html
<!-- v-bind:<tên thuộc tính>=”giá trị” -->
<input type="text" v-bind:value="name">

<!-- Rút gọn -->
<!-- :<tên thuộc tính>=”giá trị” -->
<input type="text" :value="name"> 
```
- **v-on**   : lắng nghe các sự kiện DOM và thực thi JavaScript khi những sự kiện này được kích hoạt
```html
<!-- v-on:<tên sự kiện>=”doSomething” -->
<a v-on:click="showInfo">...</a>

<!-- Rút gọn -->
<!-- @<tên sự kiện>=” doSomething” -->
<a @click="showInfo">...</a>
```
- **v-if**   : kiểm tra điều kiện trước khi hiển thị
- **v-show** : tương tự v-if nhưng render hết, phần thoả mãn điều kiện hiển thị, không = display: none
- **v-model**: tạo ràng buộc 2 chiều (2-way binding) giữ form input và trạng thái sử dụng
- **v-for**  : thường dùng để render 1 danh sách các item dựa trên 1 mảng