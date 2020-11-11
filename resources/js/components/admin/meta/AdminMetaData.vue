<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminMetaList'}" variant="outline-danger"><span class="fa fa-times"></span>
            </b-button>
        </div>
        <div class="content mt-4">
            <form @submit.prevent="save" class="mt-5">
                <div class="form-group row">
                    <div class="col-12">
                        <input id="resourceType" :disabled="$route.params.id ? true : false" class="form-control"
                               v-model="data.resource_type" aria-label="Typ" placeholder="Typ">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <input id="meta-title" class="form-control" v-model="data.title" aria-label="Meta title"
                               placeholder="Meta tytuł">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <textarea id="meta-desc" class="form-control" v-model="data.description" aria-label="Meta opis"
                                  placeholder="Meta opis"></textarea>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <input id="meta-keywords" class="form-control" v-model="data.keywords"
                               aria-label="Meta słowa kluczowe" placeholder="Meta słowa kluczowe">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <select id="locale" aria-label="Język" class="form-control" v-model="data.locale">
                            <option selected value="">Wybierz język</option>
                            <option value="pl">Polski</option>
                            <option value="en">Angielski</option>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <b-button type="submit" variant="outline-secondary">Zapisz</b-button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminMetaData",
    data() {
        return {
            title: '',
            data: {
                title: '',
                description: '',
                keywords: '',
                locale: '',
                resource_type: ''
            }
        }
    },
    methods: {
        loadDataEdit() {
            if (this.$route.params.id) {
                this.title = 'SEO - Edytuj wpis';
                this.$axios.get(`admin/meta/find/${this.$route.params.id}`)
                    .then((data) => {
                        let meta = data.data.data;
                        console.log(meta)
                        this.data.resource_type = meta.resource_type;
                        this.data.title = meta.title;
                        this.data.description = meta.description;
                        this.data.keywords = meta.keywords;
                        this.data.locale = meta.locale_key;
                    }).catch((error) => {
                    this.handleAjaxError(error);
                })
            } else {
                this.title = 'SEO - Dodaj nowy wpis'
            }
        },
        save() {
            let url = 'admin/meta/create';
            if (this.$route.params.id) {
                url = `admin/meta/update/${this.$route.params.id}`;
            }
            this.$axios.post(url, this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$router.push({
                            name: 'AdminMetaList'
                        });
                        this.$notify({
                            group: 'foo',
                            title: 'Udało się',
                            text: 'Zamówienie zostało złożone i oczekuje na realizację'
                        });
                    }
                })
                .catch((error) => {
                    this.handleAjaxError(error);
                })
        }
    },
    created() {
        this.loadDataEdit();
    }
}
</script>

<style scoped>

</style>
