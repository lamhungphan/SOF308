<template>
    <div>
        <h1>Cart items</h1>
        <div class="table-responsive-sm">
            <table class="table table-secondary">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Quanity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <CartItem :item="item" @delete="deleteItem(index)" @quantity="updateQuantity(index , $event)"
                            @edit="editItem(item)" />
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Total {{ totalPrice }}</p>
    
        <div>
            <h1>Add new</h1>
            <form @submit.prevent="addItem">
                Name
                <input type="text" v-model="newItem.name" required>
                Price
                <input type="number" v-model="newItem.price" min="1">
                Quantity
                <input type="number" v-model="newItem.quantity" min="0">
                <button type="submit">add</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import { computed, ref } from 'vue';

const items = ref([]);
const newItem = ref({
  name: '',
  price: 0,
  quantity: 0
});

const totalPrice = computed(() => {
  return items.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
})
function addItem() {
  items.value.push({ name: newItem.value.name, price: newItem.value.price, quantity: newItem.value.quantity });
  newItem.value = {};
}
function deleteItem(index) {
  items.value.splice(index, 1);
}
function editItem(item) {
  newItem.value = { ...item };
}
function updateQuantity(index, quantity) {
  if (quantity > 0)
    items.value[index].quantity = quantity;
}
</script>