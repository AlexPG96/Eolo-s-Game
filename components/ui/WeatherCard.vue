<template>
    <div>   
        <div class="row pt-3 px-md-5">
            <div class="col-12">
                <div class="card mb-3 weather-card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-12 col-md-6 d-flex">
                            <div class="card-body">
                                <p class="date">{{dayOne.date}}</p>
                                <p class="description">{{dayOne.description}}</p>
                                <p class="rain-percent">Rain: {{dayOne.humidity}}%</p>
                            </div>
                            <div class="grades">{{Math.round(dayOne.temp - 273.15)}}ºC</div>
                        </div>
                        <div class="col-12 col-md-6 card-icon">
                            <div :class="dayOne.iconClass"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-5 px-md-5">
            <div class="col-12">
                <div class="card mb-3 weather-card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-12 col-md-6 d-flex">
                            <div class="card-body">
                                <p class="date">{{dayTwo.date}}</p>
                                <p class="description">{{dayTwo.description}}</p>
                                <p class="rain-percent">Rain: {{dayTwo.humidity}}%</p>
                            </div>
                            <div class="grades">{{Math.round(dayTwo.temp - 273.15)}}ºC</div>
                        </div>
                        <div class="col-12 col-md-6 card-icon">
                            <div :class="dayTwo.iconClass"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-5 px-md-5">
            <div class="col-12">
                <div class="card mb-3 weather-card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-12 col-md-6 d-flex">
                            <div class="card-body">
                                <p class="date">{{dayThree.date}}</p>
                                <p class="description">{{dayThree.description}}</p>
                                <p class="rain-percent">Rain: {{dayThree.humidity}}%</p>
                            </div>
                            <div class="grades">{{Math.round(dayThree.temp - 273.15)}}ºC</div>
                        </div>
                        <div class="col-12 col-md-6 card-icon">
                            <div :class="dayThree.iconClass"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTomorrowWeather } from '~/api/tomorrowWeather';

export default {

    data() {
        return {
            dayOne: [],
            dayTwo: [],
            dayThree: [],
        }
    },

    async fetch() {
        // Próximos 4 días.

        this.previousWeather = await getTomorrowWeather();
        this.previousWeather = this.previousWeather.tomorrowWeather;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const date = new Date();
        const numberDay = date.getDate();
        const numberDayTwo = date.getDate() + 1;
        const numberDayThree = date.getDate() + 2;

        const day = date.getDay();

        this.dayOne = {
            'humidity': this.previousWeather.list[7].main.humidity,
            'temp': this.previousWeather.list[7].main.temp,
            'description': this.previousWeather.list[7].weather[0].description,
            'iconClass': this.previousWeather.list[7].weather[0].main.toLowerCase(),
            'date': days[day] + ', ' + numberDay,
        };
        this.dayTwo = {
            'humidity': this.previousWeather.list[15].main.humidity,
            'temp': this.previousWeather.list[15].main.temp,
            'description': this.previousWeather.list[15].weather[0].description,
            'iconClass': this.previousWeather.list[15].weather[0].main.toLowerCase(),
            'date': days[day + 1] + ', ' + numberDayTwo,
        };
        this.dayThree = {
            'humidity': this.previousWeather.list[23].main.humidity,
            'temp': this.previousWeather.list[23].main.temp,
            'description': this.previousWeather.list[23].weather[0].description,
            'iconClass': this.previousWeather.list[23].weather[0].main.toLowerCase(),
            'date': days[day + 2] + ', ' + numberDayThree,
        };

    }

}
</script>

<style>

</style>