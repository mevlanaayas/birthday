<template>
    <div>
        <h1>Hello there,</h1>
        <h1 class="eta-title">ETA for {{this.$store.getters.getName}}'s birthday:</h1>
        <countdown :time="calculatedTime">
            <template slot-scope="props"><span class="counter-title">{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }}
                minutes, {{ props.seconds }} seconds</span>
            </template>
        </countdown>
        <iframe width="1" height="1" src="https://www.youtube.com/embed/jA1kX-ZqUME?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
    import Countdown from "@chenfengyuan/vue-countdown/src";

    export default {
        name: "Counter",
        components: {Countdown},
        computed: {
            calculatedTime: function () {
                let target = this.$store.getters.getDate;
                let targetMM = target.getTime();
                let now = new Date();
                let nowMM = now.getTime();
                // eslint-disable-next-line
                console.log(targetMM-nowMM);
                return targetMM-nowMM
            }
        }
    }
</script>

<style scoped>
    .eta-title {
        font-size: 50px;
    }
    .counter-title {
        font-size: 30px;
    }

</style>
