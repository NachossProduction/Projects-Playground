<script lang='ts'>
export let produit;

</script>

<div class="produitBox">

    <!-- image produit centré -->
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="10count-app/src/assets/whisky3.jpg" /> 
    <h3>Nom de Produit : {produit.p_nom}</h3>

    <p>phrase de {produit.p_description} </p>
    <ul>
      <li>Prix : {produit.p_prix} €</li>

    </ul>

  </div>
