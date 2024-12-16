<template>
    <div>
        <h3 class="mb-3">Form</h3>
        <form>
            <div class="mb-3">
                <label for="name">Tên thành viên</label>
                <input type="text" id="name" class="form-control" v-model="member.name" required />
            </div>
            <div class="mb-3">
                <label for="age">Tuổi</label>
                <input type="number" min="0" max="100" step="1" id="age" class="form-control" v-model="member.age"
                    required />
            </div>
            <div class="mb-3">
                <label for="role">Vai trò</label>
                <select class="form-select" v-model="member.role">
                    <option value="" disabled>Chọn chức vụ</option>
                    <option value="Chủ tịch">Chủ tịch</option>
                    <option value="Thành viên">Thành viên</option>
                    <option value="Thư ký">Thư ký</option>
                </select>
            </div>
            <div>
                <button type="button" class="btn btn-success" v-if="!isEditing" @click="createMember">Thêm thành
                    viên</button>
                <button type="button" class="btn btn-info" v-else @click="updateMember">Cập nhật</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const emit = defineEmits(['add', 'update']);

const props = defineProps({
    member: Object,
    isEditing: Boolean,
});

function createMember() {
    emit('add', props.member);
}

function updateMember() {
    emit('update', props.member);
}
</script>

<style></style>
