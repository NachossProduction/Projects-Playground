<script lang="ts">
  import logo from './assets/svelte.png'
import Contenu from './content/Contenu.svelte';
import TopNav from './content/TopNav.svelte';
  import Counter from './lib/Counter.svelte'
  import FirebaseConfig from './FirebaseConfig.svelte'
  

</script>

<body>
  <main>
    <TopNav />
    <Contenu />
  </main>
</body>


<style>
  :root {
    --bg-t1: rgba(0, 0, 0, 0.792);
    --border-t1: rgb(77, 255, 0);
  }
:global(Contenu) {
  border: 20px solid var(--border-t1);
    padding: 2rem;
}
body {
    background-color: var(--bg-t1);
    display: flex;
    flex-direction: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
}



</style>
