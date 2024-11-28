<template>
    <div >
        <Navbar />
        <div class="row">
            <div class="col-lg-8">
                <!-- Post content-->
                <article>
                    <!-- Post header-->
                    <header class="mb-4">
                        <!-- Post title-->
                        <h1 class="fw-bolder mb-1">Mọi chuyện chắc sẽ ổn thôi?</h1>
                        <!-- Post meta content-->
                        <div class="text-muted fst-italic mb-2">14/11/2024 - Monet Monet</div>
                        <!-- Post categories-->
                        <a class="badge bg-secondary text-decoration-none link-light" href="#!">Phát triển bản thân</a>
                        <a class="badge bg-primary text-decoration-none link-light" href="#!">Thảo luận</a>
                    </header>
                    <!-- Preview image figure-->
                    <figure class="mb-4"><img class="img-fluid rounded" src="./assets/post-1-big.jpeg" alt="..." />
                    </figure>
                    <!-- Post content-->
                    <section class="mb-5">
                        <h2 class="fw-bolder mb-4 mt-5">Khi còn ở trong khủng hoảng, thật khó để tin vào sự tồn tại của
                            lối ra</h2>
                        <p class="fs-5 mb-4">Sẽ có một giai đoạn nào đấy trong cuộc đời mà bạn thấy nó như ngày tận thế.
                            Một chuyện tồi tệ quá sức chịu đựng xảy đến hoặc nhiều chuyện khó khăn ập đến cùng thời
                            điểm. Bạn thấy mình như bị chôn vùi, tự nhủ: "thôi thế là xong, chẳng còn gì nữa." </p>
                        <p class="fs-5 mb-4">Mình cũng vậy. Khi khủng hoảng qua đi, đầu óc thông suốt, nhìn lại thấy
                            không còn nặng lòng như trước. Nhưng trong bão khủng hoảng, có cố mấy mình cũng không thể
                            lạc quan nổi. Cuộc sống của mình từ năm 9 tuổi đến nay rất hiếm khi có được 6 tháng bình
                            yên. Những sóng gió liên tục ập đến, quật ngã mình hết lần này đến lần khác. Những chuyện
                            xảy ra với mình có lẽ không phải là những chuyện khổ sở nhất thế giới nhưng đối với mình, nó
                            luôn quá sức. Có những chuyện giờ nghĩ lại mình thấy khá nhẹ nhàng nhưng đối với mình năm 15
                            tuổi lại kinh thiên động địa. </p>
                        <p class="fs-5 mb-4">Sóng gió liên tục đã vùi dập niềm tin: mọi chuyện cũng sẽ ổn thôi ở
                            trong mình và thậm chí
                            còn đẩy mình vào tâm thế nạn nhân. Mình từng rất ghét quan điểm: khó khăn là để rút ra
                            bài học, chúng ta sẽ phát triển khi tìm cách vượt qua thách thức. Mình kiểu: Quá mệt rồi,
                            tui không có nhu cầu học gì nữa được không. Tôi không phát triển cũng được, vô tri cũng
                            được. Xin đấy. Chị Hạnh bảo, rất hiếm có ai trải qua ngần đấy chuyện mà vẫn giữ được sự vô
                            tư,
                            lạc quan như mình. Nhưng tự thân mình thấy, mình chẳng lạc quan đến thế. Nhiều chuyện đến,
                            mình thấy tệ đến mức trở nên vô cảm, mặc kệ chứ không hề lạc quan. Chỉ có gần đây, mình mới
                            biết có hy vọng thực sự là thế nào.</p>
                        <h2 class="fw-bolder mb-4 mt-5">Điều gì biến một sự kiện thành khủng hoảng?</h2>
                        <p class="fs-5 mb-4">Vì tính chất công việc, mình thường xuyên được đồng hành cùng khách hàng
                            trong những giai đoạn khủng hoảng. Có người đối diện với bệnh tật, thiếu thốn. Có người đổ
                            nợ, mất tiền, gia đình lục đục. Có người thất tình, thất nghiệp. Có người gặp cảnh người
                            thân đau ốm, qua đời. Có người quá tải với các vai trò xã hội. Có người được cả combo, một
                            lúc đối diện hết những điều trên. Đừng ai nói rằng, ngoài kia còn đầy người đói ăn, thiếu
                            nước còn bạn thì vẫn có cái này cái kia. "Một người đau chân có lúc nào quên được cái chân
                            đau của mình để nghĩ đến một cái gì khác đâu". Trong đầu lúc đó chỉ toàn là vấn đề của bản
                            thân, tâm sức đâu nhìn ra ngoài để so sánh.</p>
                        <p class="fs-5 mb-4">Bản chất sự kiện không phải khủng hoảng nhưng chính cách chúng ta diễn giải
                            và phản ứng với sự kiện đó lại sinh ra khủng hoảng. Mà khi khủng hoảng đến, ai cũng như kẻ
                            mù tìm đường trong tối, càng đi càng bế tắc. Dù có ai khuyên bảo hay nói gì, chúng ta cũng
                            chỉ thấy sự mù mịt phía trước. Bởi chúng ta bị bủa vây bởi ma trận của những suy nghĩ, cảm
                            xúc và hành vi tiêu cực với bản thân. Mô hình ABC trong liệu pháp tâm lý nhận thức - hành vi
                            (CBT) và ABCDE trong liệu pháp hành vi cảm xúc hợp lý (REBT) đề cập và giải thích rất rõ
                            điều này.</p>
                    </section>
                </article>
                <Comment />
            </div>
        </div>
    </div>
</template>

<script setup>
import Comment from '@/components/Comment.vue';
import Navbar from '../components/Navbar.vue'
</script>

<style></style>