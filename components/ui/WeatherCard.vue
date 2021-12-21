<template>
    <div class="row pt-5 px-md-5">
        <div class="col-12">
            <div class="card mb-3 weather-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-12 col-md-6 d-flex">
                        <div class="card-body">
                            <p class="date">{{date}}</p>
                            <p class="description">{{description}}</p>
                            <p class="rain-percent">Rain: {{rainPercent}}%</p>
                        </div>
                        <div class="grades">{{grades}}ºC</div>
                    </div>
                    <div class="col-12 col-md-6 card-icon">
                        <div :class="iconClass"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [
        'date',
        'description',
        'rainPercent',
        'grades',
        'iconClass'
    ]

}
</script>

<style>

</style>