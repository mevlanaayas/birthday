<template>
    <div>
        <h1>Give your friend a nice countdown,</h1>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">
                <el-form ref="form" label-width="50px">
                    <el-form-item label="Name">
                        <el-input
                                placeholder="enter a name"
                                v-model="username">
                            <i slot="prefix" class="fas fa-user el-input__icon"></i>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="Birthday">
                        <el-date-picker
                                v-model="birthDay"
                                type="date"
                                :picker-options="pickerOptions"
                                placeholder="Pick a birth day">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="goToHome">Add</el-button>
                    </el-form-item>

                </el-form>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "RegisterView",
        data: function ()  {
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now();
                    },
                },
            }
        },
        computed: {
            username: {
                get() {
                    return this.$store.getters.getName
                },
                set(value) {
                    this.$store.commit('addName', value)
                }
            },
            birthDay: {
                get() {
                    return this.$store.getters.getDate
                },
                set(value) {
                    this.$store.commit('addDate', value)
                }
            }
        },
        methods: {
            goToHome() {
                this.$router.push("/home")
            }
        }
    }
</script>

<style scoped>
    .registry-view label {
        font-size: 40px !important;
    }

</style>
