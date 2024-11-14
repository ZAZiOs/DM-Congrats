<script>
    export let name, color, congrats
    if (!name) name = 'Пётр петрович'
    if (!congrats) congrats = 'Тут будет ваше поздравление'
    if (!color) color = '#de831b'
</script>




<div class="card_body" style="--card_color: {color}">
    <div class="card_main text-start">
        <h2 class="m-0" style="word-break: break-all;">{name}</h2>
        <div class="overflow-scrolling">
            {@html congrats.replaceAll('\n\n', '\n').replaceAll('\n', '<br>')}
        </div>
    </div>
</div>


<style>
    .card_body {
        --radius: 7px;
        --mh: 100px;
        --mw: 400px;
        --main-bg-color: gainsboro;
        --border-color: #252525;
    }
    .card_body {
        color: black;
        padding-left: var(--radius);
        border: var(--border-color) 2px solid;
        border-radius: var(--radius);
        min-height: var(--mh);
        max-width: var(--mw);
        background-color: var(--card_color)
    }
    .card_main {
        padding: 7px;
        padding-top: 0;
        background-color: var(--main-bg-color);
        min-height: var(--mh);
        border-radius: calc(var(--radius) - 2px);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .overflow-scrolling {
        overflow-y: scroll;
        max-height: 85px;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    /* Chrome Safari and Opera */
    .overflow-scrolling::-webkit-scrollbar {
        display: none;
    }
</style>