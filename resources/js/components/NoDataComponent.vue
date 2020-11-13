<template><div class="no-data text-center">{{ msg }}</div></template>
<script>
export default {
    name: "NoDataComponent",
    props: {msg: ''}
}
</script>

<style scoped>
.no-data {
    width: 100%;
    padding: 20px 0;
    font-size: 18px;
    font-weight: bold;
}
</style>
