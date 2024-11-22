# Data Binding và Reactivity

## 1. Data Binding
Cơ chế tự động liên kết dữ liệu giữa App và UI

### One-way Data Binding
- **Props**:
  - Dữ liệu truyền từ component cha xuống component con qua `props` (luồng dữ liệu một chiều).
  - Vue hỗ trợ xác thực `props` (kiểu dữ liệu, giá trị mặc định, bắt buộc) để đảm bảo tính nhất quán.

### Two-way Data Binding
- **v-model**:
  - Đồng bộ dữ liệu giữa **view** và **model**.
  - Khi dữ liệu hoặc giao diện thay đổi, cả hai sẽ tự động được cập nhật.

## 2. Composition API
### setup
- Hàm khởi tạo được gọi trước khi component được tạo.
- Trả về dữ liệu hoặc logic để sử dụng trong template.

### ref & reactive
- **ref**:
  - Tạo đối tượng phản ứng cho giá trị cơ bản (số, chuỗi, Boolean).
  - Truy cập giá trị thực qua `.value`.
- **reactive**:
  - Biến object hoặc array thành đối tượng phản ứng.
  - Tự động cập nhật giao diện khi dữ liệu thay đổi.

### computed
- Tính toán các giá trị phụ thuộc vào reactive state, giúp tối ưu hiệu suất.

### watch
- Theo dõi reactive state và thực thi hành động khi dữ liệu thay đổi.

## 3. Reactivity System
### ref
- Tạo reactive state cho dữ liệu đơn giản.
- Truy cập giá trị qua `.value`.

### reactive
- Tạo reactive state cho object hoặc array.
- Vue theo dõi mọi thay đổi của thuộc tính bên trong và cập nhật giao diện tự động.

## 4. Class & Style Binding
### v-bind
Sử dụng để bind `class` hoặc `style` vào HTML:
- **Class Binding**:
  - **Object**: `{ active: true, disabled: false }`
  - **Array**: `[ 'class1', 'class2' ]`
- **Style Binding**:
  - **Object**: `{ color: 'red', fontSize: '14px' }`
  - **Array**: `[style1, style2]`

## 5. Nested Reactivity & Arrays
- Vue hỗ trợ theo dõi thay đổi sâu bên trong object hoặc array thông qua reactive state.
