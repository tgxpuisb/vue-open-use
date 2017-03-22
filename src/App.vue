<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="v-page"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                transitionName: ''
            }
        },
        name: 'app',
        watch: {
            '$route': function(to, from){
                const toDepth = to.name.split('-').length
                const formDepth = from.name.split('-').length
                this.transitionName = toDepth < formDepth ? 'page-slide-right' : 'page-slide-left'
            }
        }
    }
</script>

<style>
    @import "./assets/less/page.less";
    #app{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .v-page {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 2;
        opacity: 1;
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        transition: all .4s cubic-bezier(.55,0,.1,1);
        display: flex;
        flex-direction: column;
    }
</style>
