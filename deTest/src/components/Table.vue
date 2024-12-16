<template>
    <div>
        <h3>Bảng sản phẩm</h3>
        <div class="input-group mb-3 w-50">
            <select class="form-select" v-model="selectedProduct">
                <option value="" disabled>Chọn sản phẩm</option>
                <option v-for="(product, index) in productList" :key="index" :value=product.name>
                    {{ product.name }}
                </option>
            </select>
            <button class="btn btn-info" @click.prevent="purchaseProduct">Mua</button>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Mã</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in productList" :key="index">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.quantity }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    productList: Array
})

const selectedProduct = ref('');

const emit = defineEmits(['productPurchased']);

function purchaseProduct() {
    if (!selectedProduct.value) {
        alert('Vui lòng chọn sản phẩm để mua!');
        return;
    }
    emit('productPurchased', selectedProduct.value);
    selectedProduct.value = '';
}

</script>

<style></style>