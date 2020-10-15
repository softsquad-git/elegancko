<template>
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
                <select id="parent" class="form-control" aria-label="Kategoria nadrzędna" v-model="data.parent_id">
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
                <b-button type="submit" variant="outline-secondary">Zapisz</b-button>
            </div>
        </div>
    </form>
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
                locale: ''
            },
            type: null
        }
    },
    methods: {
        save() {
            let url = 'admin/categories/create';
            if (this.type != null) {
                let url = `admin/categories/update/${this.type}`;
            }
            this.$axios.post(url, this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$emit('loadData');
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
        },
        edit(category) {
            this.type = category.id;
            this.data.name = category.name;
            this.data.alias = category.alias;
            this.data.parent_id = category.parent_id;
            this.data.is_active = category.is_active;
            this.data.position = category.position;
            this.data.locale = category.locale;
        }
    },
    created() {
        this.$axios.get(`admin/categories/all?parent_id=0`)
        .then((data) => {
            this.categories = data.data.data;
        })
    }
}
</script>

<style scoped>

</style>
