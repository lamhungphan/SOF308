<template>
    <div class="col-lg-8">
        <!-- Vòng lặp hiển thị các bài viết -->
        <div v-for="article in paginatedArticles" :key="article.id" class="card mb-4">
            <router-link :to="`/blog/${article.id}`" class="nav-link">
                <img class="card-img-top" :src="article.image" alt="image" />
            </router-link>
            <div class="card-body">
                <div class="small text-muted">{{ article.date }}</div>
                <h2 class="card-title h4">{{ article.title }}</h2>
                <p class="card-text">{{ article.content }}</p>
                <router-link :to="`/blog/${article.id}`" class="btn btn-primary">Đọc tiếp →</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        itemsPerPage: {
            type: Number,
            default: 4
        },
    },
    data() {
        return {
            articles: [],
        };
    },
    computed: {
        paginatedArticles() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.articles.slice(start, start + this.itemsPerPage);
        },
    },
    mounted() {
        fetch("/src/articles.json")
            .then((response) => response.json())
            .then((data) => {
                this.articles = data;
            })
            .catch((error) => console.error("Error loading articles:", error));
    }
};
</script>

<style scoped></style>
