<template>
    <div>
        <h3>Form sản phẩm</h3>
        <form @submit.prevent="addProduct">
            <div class="mb-3">
                <label for="id">Mã sản phẩm</label>
                <input type="text" id="id" class="form-control" v-model="newProduct.id" required />
            </div>
            <div class="mb-3">
                <label for="name">Tên sản phẩm</label>
                <input type="text" id="name" class="form-control" v-model="newProduct.name" required />
            </div>
            <div class="mb-3">
                <label for="quantity">Số lượng</label>
                <input type="number" min="0" max="100" id="quantity" class="form-control" v-model="newProduct.quantity"
                    required />
            </div>
            <button type="submit" class="btn btn-success">Thêm sản phẩm</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const newProduct = reactive({
    id: '',
    name: '',
    quantity: ''
})

const emit = defineEmits(['productCreated']);

function addProduct() {
    emit('productCreated', newProduct);
    newProduct.id = '';
    newProduct.name = '';
    newProduct.quantity = '';
}

const props = defineProps({
  selectedProduct: Object,
});

</script>

<style></style>