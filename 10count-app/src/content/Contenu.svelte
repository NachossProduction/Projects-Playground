<script lang="ts">

  import ProduitPreview from './vitrine/ProduitPreview.svelte'


  let produitTable = [];

  for(let i = 0; i< 100; i++) {
    produitTable.push({
      p_id: i,
      p_nom: "produit numéro "+ i,
      p_description: 'très bon produit !!!!',
      p_prix: Math.random()* 10 + " € ",
    })
  }



</script>


<div class="body">

    <div class="article">
        <h1>Article Template</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt fuga! Minima soluta nobis, incidunt dolores hic quod. Praesentium corporis, a id ullam quam suscipit velit fuga molestias quisquam error.
        </p>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed hic, odio adipisci vero soluta consequatur corrupti minus enim? Cumque laboriosam possimus vero soluta illum quidem omnis reprehenderit maxime cum iure!</p>
    
    
    </div>

    {#each produitTable as produit }
      <ProduitPreview {produit} />
    {/each}
    
</div>



<style >
    :root {
        --article-border: rgba(4, 34, 78, 0.895);
    }

    .body {
    margin: 16vh 15vw;
    background-color: rgb(158, 72, 72);
    color:white;
    min-width: 50vw;
    z-index: 0;
  }

  .article {
      margin:2rem 0;
      display: flex;
      flex-direction: column;
      padding: 2rem;
      border: var(--article-border) 2px solid;
  }

  /* img {
    height: 16rem;
    width: 16rem;
  } */

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