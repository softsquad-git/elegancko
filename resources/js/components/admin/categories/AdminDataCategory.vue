<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminDataCategoriesList'}" variant="outline-danger"><span class="fa fa-times"></span>
            </b-button>
        </div>
        <div class="content mt-4">
            <form @submit.prevent="save" class="mt-5">
                <div class="row form-group">
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <input id="name" type="text" class="form-control" placeholder="Nazwa" aria-label="Nazwa"
                               v-model="data.name">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <input id="alias" type="text" class="form-control" placeholder="Alias" aria-label="Alias"
                               v-model="data.alias">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <select id="parent" class="form-control" aria-label="Kategoria nadrzędna"
                                v-model="data.parent_id">
                            <option selected value="">Wybierz kategorię nadrzędną</option>
                            <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <select id="is_active" class="form-control" aria-label="Aktywna" v-model="data.is_active">
                            <option selected value="">Aktywna?</option>
                            <option value="1">Tak</option>
                            <option value="0">Nie</option>
                        </select>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <select id="position" class="form-control" aria-label="Pozycja" v-model="data.position">
                            <option selected value="">Pozycja</option>
                            <option value="1">Ogólna</option>
                            <option value="2">Na stronie głównej</option>
                        </select>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <select id="locale" class="form-control" aria-label="Język" v-model="data.locale">
                            <option selected value="">Wybierz język</option>
                            <option value="pl">Polski</option>
                            <option value="en">Angielski</option>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <b-form-group label="Wbierz zdjęcie:" label-for="file-default" label-cols-sm="2">
                            <b-form-file ref="files" id="file-default"></b-form-file>
                        </b-form-group>
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
    name: "AdminDataCategory",
    data() {
        return {
            title: 'Dodaj kategorię',
            categories: [],
            data: {
                name: '',
                alias: '',
                parent_id: '',
                is_active: '',
                position: '',
                locale: '',
                image: null
            }
        }
    },
    methods: {
        save() {
            this.data.image = this.$refs.files.files;
            if (this.data.image !== null) {
                let formData = new FormData();
                let image = this.data.image;
                formData.append('image', image[0], image.name);
                formData.append('name', this.data.name);
                formData.append('alias', this.data.alias);
                formData.append('parent_id', this.data.parent_id);
                formData.append('is_active', this.data.is_active);
                formData.append('position', this.data.position);
                formData.append('locale', this.data.locale);
                return this.saveData(formData);
            } else {
                return this.saveData(this.data);
            }
        },
        saveData(data) {
            let url = 'admin/categories/create';
            if (this.$route.params.id) {
                url = `admin/categories/update/${this.$route.params.id}`;
            }
            this.$axios.post(url, data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$router.push({name: 'AdminCategoriesList'})
                        this.data.name = '';
                        this.data.alias = '';
                        this.data.is_active = '';
                        this.data.position = '';
                        this.data.locale = '';
                    }
                })
                .catch((error) => {
                    //
                })
        }
    },
    created() {
        this.$axios.get(`admin/categories/all?parent_id=0`)
            .then((data) => {
                this.categories = data.data.data;
            });
        if (this.$route.params.id) {
            this.$axios.get(`admin/categories/find/${this.$route.params.id}`)
                .then((data) => {
                    let category = data.data.data;
                    this.data.name = category.name;
                    this.data.parent_id = category.parent_id === 0 ? '' : category.parent_id;
                    this.data.alias = category.alias;
                    this.data.locale = category.locale;
                    this.data.is_active = category.is_active;
                    this.data.position = category.position === null ? '' : category.position;
                })
        }
    }
}
</script>

<style scoped>

</style>
