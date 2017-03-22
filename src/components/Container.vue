<template>
    <div class="v-page-content" :class="[scroll ? 'v-can-scroll' : '']">
        <slot></slot>
    </div>
</template>

<style rel="stylesheet/less" lang="less">
    @import "../assets/less/util";
    .v-page-content {
        position: relative;
        width: 100%;
        flex: 1;
    }
    .v-can-scroll{
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        .hidden-scrollbar();
    }
</style>

<script>
    export default {
        props: {
            scroll: {
                default: true
            }
        }
    }
</script>

