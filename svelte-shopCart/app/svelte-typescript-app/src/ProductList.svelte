<script> 

    let products = [
        {
            name: "Whisky",
            cat: "alcohol",
            type: "whisky",
            prix: 5
        }
    ];
</script>


{#each products as produit }
    <div class="card col" style="text-align:center">
        = {produit.name} =
        <hr>
        <div class="row">
            catégorie: {produit.cat} <br>
            type: {produit.type} <br>
            prix_unite: {produit.prix} €<br>
            
        </div>

        <hr>
    </div>
{/each}



