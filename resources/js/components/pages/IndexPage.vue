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
                                    <option v-for="category in categories" :value="category.id">{{ category.name }}
                                    </option>
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
        <div class="container">
            <div class="home-categories">
                <div v-if="categories.length >= 5" class="row">
                    <div v-for="category in categories.slice(0, 2)"
                         :class="checkClass(2)">
                        <div class="single-category" v-bind:style="{ backgroundImage: 'url(' + category.image + ')' }">

                        </div>
                    </div>
                    <div class="mt-4" v-for="category in categories.slice(2, 5)"
                         :class="checkClass(3)">
                        <div class="single-category" v-bind:style="{ backgroundImage: 'url(' + category.image + ')' }">

                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div v-for="category in categories.slice(0, 3)"
                         :class="checkClass(3)">
                         <div class="single-category" v-bind:style="{ backgroundImage: 'url(' + category.image + ')' }">

                         </div>
                    </div>
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
                },
                categories: []
            }
        },
        methods: {
            search() {
                //
            },
            loadCategories() {
                this.$axios.get('categories/all')
                    .then((data) => {
                        this.categories = data.data.data;
                        console.log(data.data.data)
                    })
                    .catch(() => {
                        //
                    })
            },
            checkClass(count) {
                let col = {
                    xl: 4,
                    lg: 4,
                    md: 4,
                    sm: 12,
                    xs: 12
                };
                switch (count) {
                    case 1:
                        col = {
                            xl: 6,
                            lg: 6,
                            md: 6,
                            sm: 12,
                            xs: 12
                        }
                        break;
                    case 2:
                        col = {
                            xl: 6,
                            lg: 6,
                            md: 6,
                            sm: 12,
                            xs: 12
                        }
                        break;
                    case 3:
                        col = {
                            xl: 4,
                            lg: 4,
                            md: 4,
                            sm: 12,
                            xs: 12
                        }
                        break;
                    case 4:
                        col = {
                            xl: 3,
                            lg: 3,
                            md: 3,
                            sm: 12,
                            xs: 12
                        }
                        break;
                }
                return 'col-xl-'+col.xl+' col-lg-'+col.lg+' col-md-'+col.md+' col-sm-'+col.sm+' col-xs-'+col.xs;
            }
        },
        created() {
            this.loadCategories();
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
    .home-categories .single-category {
        min-height: 600px;
        background-size: cover;
        background-position: center center;
    }
</style>
