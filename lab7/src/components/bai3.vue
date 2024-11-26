<template>
    <div>
        <div class="container">
            <div class="row">
                <!-- Form -->
                <div class="col-4">
                    <h3>Form đăng ký</h3>
                    <form @submit.prevent="handleSubmit">
                        <div class="mb-3">
                            <label for="name" class="form-label">Họ tên:</label>
                            <input type="text" id="name" v-model="form.name" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" id="email" v-model="form.email" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Mật khẩu:</label>
                            <input type="password" id="password" v-model="form.password" class="form-control"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="dob" class="form-label">Ngày sinh:</label>
                            <input type="date" id="dob" v-model="form.dob" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Giới tính:</label>
                            <div>
                                <input type="radio" id="male" value="Nam" v-model="form.gender" />
                                <label for="male">Nam</label>
                                <input type="radio" id="female" value="Nữ" v-model="form.gender" />
                                <label for="female">Nữ</label>
                                <input type="radio" id="other" value="Khác" v-model="form.gender" />
                                <label for="other">Khác</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Ngôn ngữ:</label>
                            <div>
                                <input type="checkbox" id="vietnamese" value="Tiếng Việt" v-model="form.languages" />
                                <label for="vietnamese">Tiếng Việt</label>
                                <input type="checkbox" id="english" value="Tiếng Anh" v-model="form.languages" />
                                <label for="english">Tiếng Anh</label>
                                <input type="checkbox" id="japanese" value="Tiếng Nhật" v-model="form.languages" />
                                <label for="japanese">Tiếng Nhật</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Đăng ký</button>
                    </form>
                </div>
                <div class="col-8">
                    <h3>Thông tin đăng ký</h3>
                    <div v-if="form.name">
                        <p><strong>Họ tên:</strong> {{ form.name }}</p>
                        <p><strong>Email:</strong> {{ form.email }}</p>
                        <p><strong>Ngày sinh:</strong> {{ form.dob }}</p>
                        <p><strong>Giới tính:</strong> {{ form.gender }}</p>
                        <p><strong>Ngôn ngữ:</strong> {{ form.languages.join(', ') }}</p>
                    </div>
                    <div v-else>
                        <p>Chưa có thông tin đăng ký</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    languages: [],
});

const handleSubmit = () => {
    console.log('Form submitted:', form);

    alert(`Đăng ký thành công! 
  Họ tên: ${form.name}
  Email: ${form.email}
  Ngày sinh: ${form.dob}
  Giới tính: ${form.gender}
  Ngôn ngữ: ${form.languages.join(', ')}`);
};
</script>

<style></style>