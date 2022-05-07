<script lang="ts">
import MdMenu from 'svelte-icons/md/MdMenu.svelte'
</script>


<div class='container-top-nav'>
    <div class="side-nav-button">
        <MdMenu/>
    </div>
    <div class="title">
        10 Count
    </div>
    <div class="contact">
        Contactez-nous !
    </div>
</div>


<style>
    .container-top-nav {
        position: fixed;
        top:0;
        right: 0;
        left:0;
        float: auto;
        min-width: max-content; 
        border: 2px solid black;
        min-height: 10vh;
        max-height: 15vh;
        margin:0;
        padding: 0;
        z-index: 10;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .side-nav-button {
        padding-left: 7rem;
        max-width: 3rem;
        max-height: 3rem;
    }

    .title {
        font-size: 5rem;
        line-height: 5vh;
        padding: 2rem 0;
    }

    .contact {
        padding-right: 7rem;
    }
</style>