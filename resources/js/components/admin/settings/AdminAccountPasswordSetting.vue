<template>
<div>
    <h4 class="title-setting">{{ title }}</h4>
    <form @submit.prevent="save">
        <div class="form-group">
            <input id="old_password" type="password" aria-label="Obecne hasło" class="form-control" v-model="data.old_password" placeholder="Obecne hasło">
        </div>
        <div class="form-group">
            <input id="new_password" type="password" aria-label="Nowe hasło" class="form-control" v-model="data.new_password" placeholder="Nowe hasło">
        </div>
        <div class="form-group">
            <b-button type="submit" variant="outline-secondary"><b-spinner v-if="loadSpinner" small></b-spinner> Zapisz</b-button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "AdminAccountPasswordSetting",
    data() {
        return{
            data: {
                new_password: '',
                old_password: '',
                user_id: ''
            },
            title: 'Zmień hasło',
            loadSpinner: false
        }
    },
    methods: {
        save() {
            this.loadSpinner = true;
            this.$axios.post('settings/password', this.data)
            .then((data) => {
                this.loadSpinner = false;
                if (data.data.success === 1) {
                    this.data.new_password = '';
                    this.data.old_password = '';
                    this.$notify({
                        group: 'notification-success',
                        title: 'Udało się',
                        text: 'Hasło zostało zmienione. Wyloguj się i zaloguj używając nowego hasła'
                    })
                }
            }).catch((error) => {
                this.loadSpinner = false;
                this.handleAjaxError(error);
            })
        }
    },
    created() {
        if (this.$route.params.id){
            this.data.user_id = this.$route.params.id;
        }
    }
}
</script>

<style scoped>
.title-setting {
    text-transform: uppercase;
    margin-bottom: 20px;
}
</style>
