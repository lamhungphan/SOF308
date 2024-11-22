# Conditional Rendering và List Rendering

## 1. Conditional Rendering
Conditional Rendering trong Vue.js cho phép hiển thị hoặc ẩn các phần tử trong giao diện dựa trên điều kiện logic.

### `v-if`
- Dùng để hiển thị phần tử nếu điều kiện là **true**. 
- Nếu điều kiện là **false**, phần tử sẽ không được render vào DOM.

### `v-else-if`
Dùng để kết hợp với `v-if` khi cần kiểm tra các điều kiện khác nếu điều kiện trước đó là **false**.

### `v-else`
Dùng để render một phần tử khi tất cả các điều kiện trước đó đều **false**.

### `v-show`
Dùng để hiển thị hoặc ẩn phần tử dựa trên điều kiện, nhưng phần tử vẫn tồn tại trong DOM và chỉ ẩn đi bằng cách sử dụng CSS `display: none`.

## 2. List Rendering
List Rendering trong Vue.js cho phép lặp qua danh sách và render các phần tử dựa trên danh sách đó.

### `v-for`
Dùng để lặp qua mảng, object, hoặc số nguyên để render các phần tử. Cú pháp của `v-for` có thể thay đổi tùy theo loại danh sách lặp qua.

#### Lặp qua mảng
Lặp qua các phần tử trong một mảng.

#### Lặp qua object
Lặp qua các cặp khóa-giá trị trong một object.

#### Lặp qua số nguyên
Dùng để lặp một số lần nhất định, được chỉ định bằng một số nguyên.
