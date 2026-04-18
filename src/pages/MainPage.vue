<template>
    <div class="row py-3">
        <div class="col">
            <h1 class="text-danger">Новости</h1>
        </div>
    </div>
    <div class="row">
        <div
            class="col-lg-3 col-md-4 col-sm-6 col-12 mb-2"
            v-for="article in articles"
            :key="article.id"
        >
            <a href="#" class="card text-decoration-none">
                <img :src="article.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ article.title }}</h5>
                </div>
            </a>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: 'Новость номер 1',
                    image: "https://cdn.tripster.ru/photos/acc71780-337e-494a-9b0f-6f81e740c717.jpg"
                },
                {
                    id: 2,
                    title: 'Новая новость',
                    image: "https://www.afdb.org/sites/default/files/argentina.jpg"
                }
            ]
        }
    }

}
</script>

<style scoped>
    .card img {
        height: 200px;
        object-fit: cover;
    }
</style>