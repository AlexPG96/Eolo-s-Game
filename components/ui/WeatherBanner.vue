<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <p>Hola banner</p>
            </div>
        </div>
        <p>{{currentWeather}}</p>
    </div>
</template>

<script>
import { getCurrentWeather } from '~/api/currentWeather';
export default {

    data() {
        return {
            currentWeather: [],
        }
    },

    async fetch() {
        this.currentWeather = await getCurrentWeather();
        console.log(this.currentWeather);
    },

}
</script>

<style>

</style>