<template>
    <div id="app">
        <transition name="router-anim" enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>

    export default {
        name: 'app',
    }


</script>

<style>
    #app {
        font-family: 'Inconsolata', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
    }
</style>
