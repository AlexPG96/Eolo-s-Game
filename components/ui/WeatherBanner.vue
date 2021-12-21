<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="head-card">
                    <h2>{{currentWeather.name}}, ES</h2>
                    <p v-for="(data, index) in currentWeather.weather" :key="index">{{data.description}}</p>
                </div>
                <div class="row bannerRow">
                    <div class="col-12 col-md-8">
                        <div :class="this.iconClass"></div>

                    </div>
                    <div class="col-12 col-md-4">
                        <p class="grades">{{this.celsius}}ºC</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="table-cells">
                            <div class="table-cell">
                                <h6>Wind Speed</h6>
                                <p>{{this.windSpeed}}</p>
                            </div>
                            <div class="table-cell">
                                <h6>Rain</h6>
                                <p>{{this.humidity}}%</p>
                            </div>
                            <div class="table-cell">
                                <h6>Temp Min</h6>
                                <p>{{this.temp_min}}ºC</p>
                            </div>
                            <div class="table-cell">
                                <h6>Temp Max</h6>
                                <p>{{this.temp_max}}ºC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <TomorrowBanner />
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <!-- <Clock /> -->
                <WeatherCard />
            </div>
        </div>
    </div>
</template>

<script>
import { getCurrentWeather } from '~/api/currentWeather';
export default {

    data() {
        return {
            currentWeather: [],
            previousWeather: [],
            celsius: String,
            temp_min: String,
            temp_max: String,
            humidity: String,
            windSpeed: String,
            iconClass: String,
            datetime: String,
        }
    },

    async fetch() {
        this.currentWeather = await getCurrentWeather();
        this.currentWeather = this.currentWeather.currentWeather;

        this.celsius = Math.round(this.currentWeather.main.temp - 273.15);
        this.temp_min = Math.round(this.currentWeather.main.temp_min - 273.15);
        this.temp_max = Math.round(this.currentWeather.main.temp_max - 273.15);

        this.humidity = this.currentWeather.main.humidity;
        this.windSpeed = this.currentWeather.wind.speed;

        this.iconClass = this.currentWeather.weather[0].main.toLowerCase();

        var date = new Date();

        this.datetime = date.getHours();

        if(this.datetime >= '08' && this.datetime <= '19'){
            this.iconClass = this.iconClass + " day"
        } else {
            this.iconClass = this.iconClass + " night"
        }
    },


}
</script>