<template>
    <div class="home-info">
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="icon">
                    <span class="fa fa-shipping-fast"></span>
                </div>
                <p class="desc">
                    {{ $t('page.home.info.shipment') }}
                </p>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="icon">
                    <span class="fa fa-shield-alt"></span>
                </div>
                <p class="desc">
                    {{ $t('page.home.info.security') }}
                </p>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="icon">
                    <span class="fa fa-life-ring"></span>
                </div>
                <p class="desc">
                    {{ $t('page.home.info.support') }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeInfo"
}
</script>

<style lang="scss" scoped>
.home-info {
    margin: 70px 0;

    .icon {
        font-size: 3.3em;
        color: #444141;
    }

    p.desc {
        font-size: 20px;
    }

}
</style>
