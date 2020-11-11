export default {
    methods: {
        handleAjaxError(err) {
            let errorText = err.response.data.message;

            if (err.response.status === 422) {
                errorText = this.convertLaravelErrorBagToString(err.response.data.errors);
                this.$notify({
                    group: 'notification-error',
                    title: 'Coś poszło nie tak',
                    text: errorText
                })
            }
            if (err.response.status === 401) {
                this.$notify({
                    group: 'notification-error',
                    title: 'Coś poszło nie tak',
                    text: 'Podano niewłaściwy email lub hasło'
                })
            }
            if (err.response.status === 500) {
                this.$notify({
                    group: 'notification-error',
                    title: 'Coś poszło nie tak',
                    text: 'Błąd server'
                })
            }
        },
        convertLaravelErrorBagToString(errorsArr) {
            let errorBag = [];

            Object.values(errorsArr).forEach(error_msg => {
                errorBag.push(error_msg);
            });

            return errorBag.join('<br/>')
        },
    }
}
