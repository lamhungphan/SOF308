<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khoẻ cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card">
          <img :src="item.img" class="img-fluid" alt="Hình ảnh">
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <btn class="btn btn-info">Xem chi tiết</btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
                img: img1   
            },
            {
                title: 'Các loại gia vị tốt cho sức khoẻ',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia omnis modiconsectetur, voluptatum dolorum delectus pariatur fugit. Id sequi dolore repudiandae tempora omnis animi, voluptatum culpa enim vero placeat voluptatibus!',
                img: img2   
            },
            {
                title: '9 loại đậu bổ dưỡng nên dùng nhiều',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia omnis modiconsectetur, voluptatum dolorum delectus pariatur fugit. Id sequi dolore repudiandae tempora omnis animi, voluptatum culpa enim vero placeat voluptatibus!',
                img: img3   
            }
            ]
        };
    }
};
</script>

<style>
</style>