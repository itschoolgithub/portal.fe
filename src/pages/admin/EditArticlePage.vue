<template>
    <div class="row mt-4">
        <div class="col">
            <h1>Отредактировать статью</h1>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div
                class="alert alert-danger mb-3"
                v-if="error"
            >
                {{ error }}
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Заголовок статьи</label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="article.title"
                >
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Текст статьи</label>
                <textarea
                    class="form-control"
                    id="content"
                    rows="5"
                    v-model="article.content"
                ></textarea>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Ссылка на картинку</label>
                <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="article.image"
                >
            </div>
            <button
                class="btn btn-success"
                @click="updateArticle"
            >Обновить</button>
        </div>
    </div>
</template>

<script>
import api from "@/api";
export default {
    data() {
        return {
            articleId: this.$route.params.id,
            article: {},
            error: ''
        }
    },
    mounted() {
        this.loadArticle();
    },
    methods: {
        async loadArticle() {
            const response = await api.get("/admin/articles/" + this.articleId);
            this.article = response.data;
        },
        async updateArticle() {
            this.error = '';
            try {
                await api.put("/admin/articles/" + this.articleId, {
                    title: this.article.title,
                    content: this.article.content,
                    image: this.article.image
                });
                this.$router.push({
                    name: 'admin_articles'
                });
            } catch (e) {
                if (e.status == '422') {
                    this.error = e.response.data.message;
                }
            }
        }
    },
    watch: {
        "$route.params.id": function (newId) {
            this.articleId = newId;
            this.loadArticle();
        }
    }
}
</script>