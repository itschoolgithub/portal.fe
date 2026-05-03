<template>
    <div class="row py-3">
        <div class="col">
            <h1 class="text-center text-success">Регистрация</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-4 offset-4">
            <div class="mb-3">
                <label for="name" class="form-label">Имя</label>
                <input type="text" class="form-control" id="name" placeholder="Иван">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="password" placeholder="******">
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Повторите пароль</label>
                <input type="password" class="form-control" id="password_confirmation" placeholder="******">
            </div>
            <button class="btn btn-primary">Зарегистрироваться</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>