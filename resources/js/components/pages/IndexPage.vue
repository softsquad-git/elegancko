<template>
    <div class="home">
        <div class="top-section">
            <div class="container-fluid">
                <div class="search-form">
                    <form @submit.prevent="search">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-5">
                                <input id="title" class="form-control" aria-label="Tytuł" type="text"
                                       placeholder="Tytuł ..." v-model="data.title">
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5">
                                <select id="category" class="form-control" aria-label="Kategoria"
                                        v-model="data.category">
                                    <option selected value="">Wybierz kategorię</option>
                                </select>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2">
                                <button class="btn main-btn w-100" type="submit"><span class="fa fa-search"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexPage",
        data() {
            return {
                data: {
                    title: '',
                    category: ''
                }
            }
        },
        methods: {
            search() {
                //
            }
        }
    }
</script>

<style scoped>
    .search-form {
        padding: 30px;
        background: #fff;
        border: 1px solid #e8e4e4;
        border-radius: 6px;
        position: absolute;
        width: 98.3%;
        bottom: 50%;
        top: 50%;
        height: 114px;
    }

    #title, #category {
        margin-top: 6px;
    }

    .top-section {
        background: url("https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg");
        background-size: cover;
        background-position: center center;
        height: 100vh;
        position: relative;
    }
</style>
