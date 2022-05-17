<script lang="ts">
  import Horaire from './Horaire.svelte'
  import ProduitPreview from './vitrine/ProduitPreview.svelte'


  let produitTable = [];

  for(let i = 0; i< 10; i++) {
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
<div class="contact">
  Contactez-nous !
</div>
