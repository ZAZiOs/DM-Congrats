<script>
</script>

<div>
    <div class="progress-bar-gradient main-gradient">
        <div class="progress rounded-bottom-0">
            <div class="progress-bar progress-bar-striped progress-bar-animated progress-gradient" role="progressbar" style="width: 100%;"></div>
        </div>
    </div>
    <div class="dm-card-bg main-gradient">
        <div class="dm-card">
            <div class="dm-card-body">
                <h2 class="m-0">Пётр петрович</h2>
                <div class="overflow-scrolling">
                    Тут будет ваше поздравление
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .dm-card-bg {
        --radius: 7px;
        --mh: 100px;
        --mw: 400px;
        --body-bg-color: #dcdcdcAA;
        --border-color: #252525;
        --padding: 10px;
    }
    .dm-card {
        color: var(--border-color);
        --main-bg-color1: #eeeeeeaa;
        --main-bg-color2: #eeeeeeee;
        background: linear-gradient(180deg, var(--main-bg-color1) 10px, var(--main-bg-color2) calc(100% - 10px));
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom-right-radius: var(--bs-border-radius);
        border-bottom-left-radius: var(--bs-border-radius);
    }
    .dm-card-bg {
        border-bottom-right-radius: var(--bs-border-radius);
        border-bottom-left-radius: var(--bs-border-radius);
    }
    .progress {
        --bs-progress-bar-bg: none;
        --bs-progress-bg: none;
    }
    .main-gradient {
        background: #de831b;
        background: -moz-linear-gradient(90deg, #de831b 0%, #de8585 100%);
        background: -webkit-linear-gradient(90deg, #de831b 0%, #de8585 100%);
        background: linear-gradient(90deg, #de831b 0%, #de8585 100%);
    }
    .progress-bar-gradient {
        border-top-left-radius: var(--bs-border-radius);
        border-top-right-radius: var(--bs-border-radius);
    }

</style>