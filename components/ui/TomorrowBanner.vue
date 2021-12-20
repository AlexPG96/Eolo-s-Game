<template>
    <div class="tomorrow mt-3">
        <div class="col-12 d-flex justify-content-between">
            <p>Tomorrow</p>
            <p class="tomorrow-grades">{{this.tomorrowGrades}}ºC</p>
            <div :class="this.tomorrowIcon"></div>
        </div>
    </div>
</template>

<script>
import { getTomorrowWeather } from '~/api/tomorrowWeather';
export default {

    data() {
        return {
            tomorrowWeather: [],
            tomorrowList: [],
            tomorrowGrades: String,
            tomorrowIcon: String,
            datetime: String,
        }
    },

    async fetch() {
        this.tomorrowWeather = await getTomorrowWeather();
        this.tomorrowWeather = this.tomorrowWeather.tomorrowWeather;
        this.tomorrowList = this.tomorrowWeather.list[8];

        this.tomorrowGrades = Math.round(this.tomorrowList.main.temp - 273.15);
        this.tomorrowIcon = this.tomorrowList.weather[0].main.toLowerCase();

        var date = new Date();

        this.datetime = date.getHours();

        if(this.datetime >= '08' && this.datetime <= '19'){
            this.tomorrowIcon = this.tomorrowIcon + " day"
        } else {
            this.tomorrowIcon = this.tomorrowIcon + " night"
        }

    }

}
</script>