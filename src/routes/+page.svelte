<script>
    export let data
    import Card from '$lib/card.svelte'
    let yp = data.old_post
    let posts = data.posts
</script>


<div class="container-main">
    {#if !yp.none}<h1 class="text-center mt-5">Ваш пост:</h1>
    <div class="d-flex justify-content-center">
        <Card name={yp.name} color={yp.color1} color2={yp.color2} congrats={yp.congrats} date={yp.date} unvisible={!yp.visible}> </Card>
    </div>
    <h1 class="text-center mt-3">А вот что написали остальные:</h1>
    {:else}
    <h1 class="text-center mt-5">Доска с поздравлениями Дани Мысливца</h1>
    {/if}
    <div class="d-flex w-100 flex-wrap justify-content-evenly align-items-center">
        {#each posts as post}
        <Card name={post.name} color={post.color1} color2={post.color2} congrats={post.congrats} date={post.date}> </Card>
        {/each}
    </div>
</div>

<style>
    .container-main {
        margin-right: 60px;
        margin-left: 60px;
    }
</style>
