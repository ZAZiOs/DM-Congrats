<script>
    export let name, color, color2, congrats, date
    if (!name) name = 'Имя неизвестного человека'
    if (!congrats) congrats = 'Пример для поздравления'
    if (!color) color = '#de831b'
    if (!color2) color2 = '#de8585'
    let randomY = Math.floor(Math.random() * 50)
    let randomX = Math.ceil(Math.random() * 100) * (Math.round(Math.random()) ? 1 : -1)
    let random_deg = Math.ceil(Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1)
    date = new Date(date)
</script>

<div class="dm-card-container" style="--gradient-color1: {color}; --gradient-color2: {color2}; top: {randomY}px; left: {randomX}px; --rotate: {random_deg}deg;">
    <svg width="40" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-img"
    id='color-{color}'>
    <g filter="url(#filter0_d_1_30)">
        <circle cx="16.5" cy="12.5" r="12.5" fill="url(#paint0_linear_1_30-{color}-{color2})" />
    </g>
    <circle cx="11" cy="6" r="2" fill="white" fill-opacity="0.4" />
    <circle cx="10" cy="5" r="1" fill="white" fill-opacity="0.4" />
    <defs>
        <filter id="filter0_d_1_30" x="0" y="0" width="33" height="40" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
            <feOffset dy="2" dx='1' />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.60 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_30" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_30" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_1_30-{color}-{color2}" x1="12.3693" y1="4.18793e-07" x2="20.6307" y2="25"
            gradientUnits="userSpaceOnUse">
            <stop stop-color={color} />
            <stop offset="1" stop-color={color2} />
        </linearGradient>
    </defs>
    </svg>
    <div class="progress-bar-gradient main-gradient">
        <div class="progress rounded-bottom-0">
            <div class="progress-bar progress-bar-striped progress-bar-animated progress-gradient" role="progressbar" style="width: 100%;"></div>
        </div>
    </div>
    <div class="dm-card-bg main-gradient">
        <div class="dm-card">
            <div class="dm-card-body">
                <h2 class="m-0 mb-2">{name}</h2>
                <div class="overflow-scrolling">
                    {@html congrats.replaceAll('\n\n', '\n').replaceAll('\n', '<br>')}
                </div>
                <h6 class="text-dark-subtle opacity-50 mt-2 mx-2">{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</h6>
            </div>
        </div>
    </div>
</div>

<style>
    .btn-img {
        position: relative;
        top: 27px;
    }
    .dm-card-container:hover {
        z-index: 2;
        transition: all .2s;
    }
    .dm-card-container {
        transition: all .2s;
        z-index: 0;
        position: relative;
        top: 0;
        --rotate: 0deg;
        transform: rotate(var(--rotate));
        --gradient-color1: #de831b;
        --gradient-color2: #de8585;
        width: 400px;
        margin-left: 75px;
        margin-right: 75px;
        text-align: center;
        margin-bottom: 50px;
    }
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
        padding: var(--padding);
        border-bottom-right-radius: var(--bs-border-radius);
        border-bottom-left-radius: var(--bs-border-radius);
    }
    .dm-card-bg {
        border-bottom-right-radius: var(--bs-border-radius);
        border-bottom-left-radius: var(--bs-border-radius);
    }
    .dm-card-body {
        word-wrap: break-word;
    }
    .progress {
        --bs-progress-bar-bg: none;
        --bs-progress-bg: none;
    }
    .main-gradient {
        background: var(--gradient-color1);
        background: -moz-linear-gradient(90deg, var(--gradient-color1) 0%, var(--gradient-color2) 100%);
        background: -webkit-linear-gradient(90deg, var(--gradient-color1) 0%, var(--gradient-color2) 100%);
        background: linear-gradient(90deg, var(--gradient-color1) 0%, var(--gradient-color2) 100%);
    }
    .progress-bar-gradient {
        border-top-left-radius: var(--bs-border-radius);
        border-top-right-radius: var(--bs-border-radius);
    }

</style>