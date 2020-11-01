<template>

</template>

<script>
export default {
    name: "MetaComponent",
    data() {
        return {
            meta: {
                title: '',
                description: '',
                keywords: ''
            }
        }
    },
    metaInfo() {
        return {
            title: this.meta.title,
            meta: [
                {
                    name: 'description',
                    content: this.meta.description
                }
            ]
        }
    },
    props: {
        title: '',
        description: '',
        keywords: '',
        type: ''
    },
    methods: {
        checkType() {
            if (this.type === 'ITEM') {
                this.meta.title = this.title;
                this.meta.description = this.description;
                this.meta.keywords = this.keywords;
            } else {
                this.$axios.get(`meta/find?resource_type=${this.type}`)
                .then((data) => {
                    let meta = data.data.data;
                    this.meta.title = meta.title;
                    this.meta.description = meta.description;
                    this.meta.keywords = meta.keywords;
                })
            }
        }
    },
    created() {
        this.checkType();
    }
}
</script>

<style scoped>

</style>
