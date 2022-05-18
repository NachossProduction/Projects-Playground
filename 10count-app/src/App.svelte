<script lang="ts">
  import logo from './assets/svelte.png'
import Contenu from './content/Contenu.svelte';
import TopNav from './content/TopNav.svelte';
  import Counter from './lib/Counter.svelte'
  import FirebaseConfig from './FirebaseConfig.svelte'
  

</script>

<FirebaseConfig />

<body class="themeFigma">
  <main>
    <TopNav />
    <Contenu />
  </main>
</body>
