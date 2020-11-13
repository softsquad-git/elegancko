<template>
<span class="lang">
    {{ $t('lang.select') }}:
    <img v-if="lang === 'en-EN'" width="20" height="20" @click="setLang('pl-PL')" src="https://elegancko.store/images/flags/pl.svg" alt="pl-PL">
    <img v-else width="20" height="20" src="https://elegancko.store/images/flags/en.svg" @click="setLang('en-EN')" alt="en-EN">
</span>
</template>

<script>
export default {
    name: "SelectLanguage",
    data() {
        return {
            lang: localStorage.getItem('lang')
        }
    },
    methods: {
        setLang(lang) {
            localStorage.setItem('lang', lang);
            window.location.reload();
        },
        checkLang() {
            if (!localStorage.getItem('lang')) {
                localStorage.setItem('lang', window.navigator.language)
            }
        }
    },
    created() {
        this.checkLang();
    }
}
</script>

<style lang="scss">
img{
    padding-bottom: 2px;
    &:hover{
        cursor: pointer;
    }
}
</style>
