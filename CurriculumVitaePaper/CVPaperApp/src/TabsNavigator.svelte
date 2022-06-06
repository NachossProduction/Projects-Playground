<script>
import Comps from "./Comps.svelte";
import Exps from "./Exps.svelte";
import Other from "./Other.svelte";
import Studies from "./Studies.svelte";

</script>
<div class="row flex-spaces tabs">
    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1" class="paper-btn">Studies</label>
  
    <input id="tab2" type="radio" name="tabs">
    <label for="tab2" class="paper-btn">Expériences</label>
  
    <input id="tab3" type="radio" name="tabs">
    <label for="tab3" class="paper-btn">Compétences</label>
  
    <input id="tab4" type="radio" name="tabs">
    <label for="tab4" class="paper-btn">Other....</label>
  
    <div class="content" id="content1">
        <Studies />
    </div>
    <div class="content" id="content2">
        <Exps/>
    </div>
    <div class="content" id="content3">
      <Comps/>
    </div>
    <div class="content" id="content4">
      <Other />
    </div>
  </div>
  

  <style>
    label {

      border-radius: 25%;
    }
  </style>