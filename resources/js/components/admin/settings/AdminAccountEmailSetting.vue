<template>
    <div>
        <h4 class="title-setting">{{ title }}</h4>
        <form v-if="!changeStatus" @submit.prevent="saveFirst">
            <div class="form-group">
                <input id="new_email" class="form-control" placeholder="Nowy adres E-mail" aria-label="Nowy adres E-mail" v-model="dataFirst.new_email">
            </div>
            <div class="form-group">
                <b-button type="submit" variant="outline-secondary">Dalej</b-button>
            </div>
        </form>
        <form v-else @submit.prevent="saveSecond">
            <div class="form-group">
                <input id="new_email_key" class="form-control" placeholder="Kod nowego adresu" aria-label="Kod nowego adresu" v-model="dataSecond.new_email_key">
            </div>
            <div class="form-group">
                <input id="old_new_key" class="form-control" placeholder="Kod obecnego adresu" aria-label="Kod obecnego adresu" v-model="dataSecond.old_email_key">
            </div>
            <div class="form-group">
                <b-button type="submit" variant="outline-secondary">Zapisz</b-button>
                <b-button @click="removeChangeKey" type="button" variant="outline-danger">Zacznij od początku</b-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AdminAccountEmailSetting",
    data() {
        return {
            dataFirst: {
                new_email: ''
            },
            dataSecond: {
                new_email_key: '',
                old_email_key: ''
            },
            title: 'Zmień adres E-mail',
            changeStatus: ''
        }
    },
    methods: {
        saveFirst() {
            this.$axios.post('settings/email-first', this.dataFirst)
            .then((data) => {
                if (data.data.success === 1) {
                    this.checkEmail();
                    this.dataFirst.new_email = '';
                    this.$notify({
                        group: 'notification-success',
                        title: 'Udało się',
                        text: 'Kody zostały wysłane na obecny i nowy adres e-mail. Sprawdź pocztę'
                    })
                }
            })
        },
        saveSecond() {
            this.$axios.post('settings/email-second', this.dataSecond)
            .then((data) => {
                if (data.data.success === 1) {
                    this.dataSecond.new_email_key = '';
                    this.dataSecond.old_email_key = '';
                    this.checkEmail();
                    this.$notify({
                        group: 'notification-success',
                        title: 'Udało się',
                        text: 'Adres E-mail został zmieniony'
                    })
                    // redirect to logout
                    window.location.reload();
                }
            })
        },
        checkEmail() {
            this.$axios.get('settings/check-email')
            .then((data) => {
                this.changeStatus = data.data.status;
            })
        },
        removeChangeKey() {
            this.$axios.delete('settings/change-email-delete')
            .then((data) => {
                if (data.data.success === 1) {
                    this.checkEmail();
                }
            })
        }
    },
    created() {
        this.checkEmail();
    }
}
</script>

<style scoped>
.title-setting {
    text-transform: uppercase;
    margin-bottom: 20px;
}
</style>
