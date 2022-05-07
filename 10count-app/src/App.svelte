<script lang="ts">
  import logo from './assets/svelte.png'
import Contenu from './content/Contenu.svelte';
import TopNav from './content/TopNav.svelte';
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <TopNav />
  <Contenu />
</main>

<style>
  :root {
    font-family:"Marck Script",serif;
    margin: 0;
    padding:0;
    background-color: antiquewhite;
  }

  main {
    text-align: center;
    padding: 0;
    margin: 0;
    
  }



  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
