<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminPagesList'}" variant="outline-danger"><span class="fa fa-times"></span>
            </b-button>
        </div>
        <div class="content mt-3">
            <form @submit.prevent="save">
                <div class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input id="title" class="form-control" aria-label="Tytuł" placeholder="Tytuł"
                               v-model="data.title">
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <select id="locale" class="form-control" aria-label="Język" v-model="data.locale">
                            <option selected value="">Wybierz język</option>
                            <option value="pl">PL</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <select id="position" aria-label="Pozycja" class="form-control" v-model="data.position">
                            <option selected value="">Wybierz pozycję</option>
                            <option value="top">Góra</option>
                            <option value="bottom">Stopka</option>
                        </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <select id="active" aria-label="Aktywny?" class="form-control" v-model="data.is_active">
                            <option selected value="">Aktywny?</option>
                            <option value="1">Tak</option>
                            <option value="0">Nie</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <quill-editor v-model="data.content"></quill-editor>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <b-button type="submit" variant="outline-secondary">Zapisz</b-button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor} from 'vue-quill-editor';

export default {
    name: "AdminDataPage",
    components: {
        quillEditor
    },
    data() {
        return {
            title: 'Dodaj stronę',
            data: {
                title: '',
                content: '',
                locale: '',
                is_active: '',
                position: ''
            }
        }
    },
    methods: {
        save() {
            let url = 'admin/pages/create';
            if (this.$route.params.id) {
                url = `admin/pages/update/${this.$route.params.id}`
            }
            this.$axios.post(url, this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$router.push({name: 'AdminPagesList'})
                        this.$notify({
                            group: 'notification-success',
                            title: 'Udało się',
                            text: data.data.msg
                        })
                    }
                })
                .catch((error) => {
                    //
                })
        }
    },
    created() {
        if (this.$route.params.id) {
            this.$axios.get(`admin/pages/find/${this.$route.params.id}`)
                .then((data) => {
                    let page = data.data.data;
                    this.data.title = page.title;
                    this.data.content = page.content;
                    this.data.locale = page.locale;
                    this.data.position = page.position
                    this.data.is_active = page.is_active;
                })
        }
    }
}
</script>

<style scoped>

</style>
