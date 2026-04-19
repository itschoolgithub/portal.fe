<template>
    <router-link
        :to="{name: 'article', params: {id: article.id}}"
        class="card text-decoration-none">
        <img :src="article.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        article: Object
    }
}
</script>

<style scoped>
    .card img {
        height: 200px;
        object-fit: cover;
    }
</style>