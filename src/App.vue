<template>
    <div id="app">
        <transition name="router-anim" enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>
        <el-button class="right-bottom-btn" @click="changeTheme">
            Change theme
        </el-button>
    </div>

</template>

<script>

    export default {
        name: 'app',
        methods: {
            changeTheme() {
                if(document.body.className === 'dark') {
                    document.body.className = 'white';
                }else {
                    document.body.className = 'dark';
                }
            }
        }
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
    body.white {

    }
    body.dark {
        background-color: #2c2c2c !important;
        color: white;
    }
    body.dark .el-form-item__label {
        color: whitesmoke;
    }
    body.dark .el-input__inner {
        background-color: grey;
        color: #2c2c2c;
    }
    body.dark .el-input__icon {
        color: #2c2c2c;
    }
    body.dark .el-button--primary {
        background-color: grey;
        border-color: whitesmoke;
        color: #2c2c2c;
    }
    body.dark .el-picker-panel {
        background-color: grey;
        color: whitesmoke;
    }
    .right-bottom-btn {
        position: absolute;
        z-index: 11;
        right: 0;
        bottom: 0;
    }
</style>
