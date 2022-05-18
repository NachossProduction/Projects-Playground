<script lang="ts">
import Home from "./Home.svelte";
import Panier from "./Panier.svelte";
import Profil from "./Profil.svelte";
import Shop from "./Shop.svelte";


</script>

<div class="main">
	<div class="paper container">
		<!-- <h1>Some Fresh Title</h1> -->
		<h1>10 Count </h1> 


		<div class="row flex-spaces tabs">
			<input id="tab1" type="radio" name="tabs" checked>
			<label for="tab1">Home</label>
		  
			<input id="tab2" type="radio" name="tabs">
			<label for="tab2">Shop</label>
		  
			<input id="tab3" type="radio" name="tabs">
			<label for="tab3">Panier</label>
		  
			<input id="tab4" type="radio" name="tabs">
			<label for="tab4">Profil</label>
		  
			<div class="content" id="content1">
				<Home />
			</div>
			<div class="content" id="content2">
				<Shop />
			</div>
			<div class="content" id="content3">
				<Panier />
			</div>
			<div class="content" id="content4">
				<Profil />
			</div>
		  </div>
	</div>
				<h4>10Count-Dunkerque</h4>
</div>

<style>
	.main {
		text-align: center;
	}

	h1 {
		margin: 1rem auto;
	}
</style>