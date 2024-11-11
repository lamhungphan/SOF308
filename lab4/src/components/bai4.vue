<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import img1 from '../assets/eat-clean.png'
import img2 from '../assets/eat-clean.png'
import img3 from '../assets/eat-clean.png'

export default {
    data(){
        return {
            items: [
            {
                title: '8 loại rau củ giàu canxi',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia omnis modiconsectetur, voluptatum dolorum delectus pariatur fugit. Id sequi dolore repudiandae tempora omnis animi, voluptatum culpa enim vero placeat voluptatibus!',
                image: img1   
            },
            {
                title: 'Các loại gia vị tốt cho sức khoẻ',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia omnis modiconsectetur, voluptatum dolorum delectus pariatur fugit. Id sequi dolore repudiandae tempora omnis animi, voluptatum culpa enim vero placeat voluptatibus!',
                image: img2   
            },
            {
                title: '9 loại đậu bổ dưỡng nên dùng nhiều',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia omnis modiconsectetur, voluptatum dolorum delectus pariatur fugit. Id sequi dolore repudiandae tempora omnis animi, voluptatum culpa enim vero placeat voluptatibus!',
                image: img3   
            }
            ]
        };
    }
};
</script>

<template>
<div class="container">
    <h1 class="text-center">Kiến thức sức khoẻ cộng đồng</h1>
    <div class="row">
        <div class="col-sm-4">
            <div class="card">
                <img :src="items[0].image" alt="hình ảnh">
                <div class="card-body">
                    <h3 class="card-title">{{ items[0].title }}</h3>
                    <p class="card-text">{{ items[0].content }}</p>
                    <button class="btn btn-info">Xem chi tiết</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                <img :src="items[1].image" alt="hình ảnh">
                <div class="card-body">
                    <h3 class="card-title">{{ items[1].title }}</h3>
                    <p class="card-text">{{ items[1].content }}</p>
                    <button class="btn btn-info">Xem chi tiết</button>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                <img :src="items[2].image" alt="hình ảnh">
                <div class="card-body">
                    <h3 class="card-title">{{ items[2].title }}</h3>
                    <p class="card-text">{{ items[2].content }}</p>
                    <button class="btn btn-info">Xem chi tiết</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>

</style>

