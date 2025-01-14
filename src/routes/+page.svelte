<script>
    import Card from "$lib/card.svelte";
    import AltCard from "$lib/alt-cards.svelte";
    let congratulation = ''
    let name = ''
    let color = '#de831b'
    let color2 = '#de381b'
</script>

<div class="container text-center mt-5 d-flex flex-column">
    <h1>Поздравление для Даниила Мысливца</h1>
    <div class="alert alert-warning d-flex align-items-center" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i> 
        Всё что вы введёте на данном сайте пройдёт модерацию и будет опубликовано публично!
      </div>
    <div class="main-box mb-3">
        <form method="POST" action="/?/post">
            <div class="form-floating mb-3">
                <input bind:value={name} type="text" name="name" class={name.length <= 25 ? "form-control" : "form-control is-invalid"} id="nameInput" placeholder="ZAZiOs">
                <label for="nameInput">Ваше имя <sup class="text-secondary">(или никнейм) [{name.length} / 25]</sup></label>
            </div>
            <div class="form-floating mb-3">
                <textarea bind:value={congratulation} name="congrats" class={congratulation.length <= 1024 ? "form-control" : "form-control is-invalid"} placeholder="Оставьте ваше поздравление тут" id="congratInput" style="height: 100px"></textarea>
                <label for="congratInput">Поздравление <sup class="text-secondary">[{congratulation.length} / 1024]</sup></label>
            </div>
            <div class="form-floating">
                <div class="progress" id="colorbar" style="height: auto">
                    <input type="color" class="form-control form-control-color w-100 progress-bar progress-bar-striped progress-bar-animated" 
                    style="background-color: {color}; padding: calc(1rem + calc(var(--bs-border-width)* 2));border-top-right-radius: 0;border-bottom-right-radius: 0;" 
                    bind:value={color} placeholder="Шкала цвета" name="color">
                    <input type="color" class="form-control form-control-color w-100 progress-bar progress-bar-striped progress-bar-animated" 
                    style="background-color: {color2}; padding: calc(1rem + calc(var(--bs-border-width)* 2));border-top-left-radius: 0;border-bottom-left-radius: 0;" 
                    bind:value={color2} placeholder="Шкала цвета" name="color">
                </div>
                <sup class="text-secondary"><i>Данный цвет будет слева у карточки</i></sup>
            </div>
            {#if name.length <= 25 && congratulation.length <= 1024 && congratulation && name}
            <button type="submit" class="btn btn-outline-success mb-3">Отправить</button>
            {:else}
            <button type="submit" class="btn btn-outline-success mb-3" disabled>Отправить</button>
            {/if}
            
        </form>
        <Card {name} {color} {color2} congrats={congratulation} />
    </div>
</div>

<style>
    .main-box {
        min-width: 450px;
        margin-right: auto;
        margin-left: auto;
    }
    .container {
        max-width: 800px;
    }
</style>