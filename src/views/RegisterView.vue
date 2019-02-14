<template>
    <div>
        <el-row>
            <transition enter-active-class="animated fadeIn">
                <el-col :xs="24" :md="12">


                    <el-form ref="form" label-width="150px">


                        <el-form-item label="Username">
                            <el-input
                                    placeholder="Username"
                                    v-model="username">
                                <i slot="prefix" class="fas fa-user el-input__icon"></i>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-date-picker
                                    v-model="birthDay"
                                    type="date"
                                    placeholder="Pick a birth day">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="goToHome">Add</el-button>
                        </el-form-item>


                    </el-form>
                </el-col>
            </transition>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "RegisterView",
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
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>
