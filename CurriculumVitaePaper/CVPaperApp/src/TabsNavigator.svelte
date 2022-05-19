<script>
import Studies from "./Studies.svelte";

</script>
<div class="row flex-spaces tabs">
    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1">Studies</label>
  
    <input id="tab2" type="radio" name="tabs">
    <label for="tab2">Expériences</label>
  
    <input id="tab3" type="radio" name="tabs">
    <label for="tab3">Compétences</label>
  
    <input id="tab4" type="radio" name="tabs">
    <label for="tab4">Other....</label>
  
    <div class="content" id="content1">
        <Studies />
    </div>
    <div class="content" id="content2">
      <p>
        Bacon ipsum dolor sit amet landjaeger sausage brisket...
      </p>
    </div>
    <div class="content" id="content3">
      <p>
        Bacon ipsum dolor sit amet beef venison beef ribs kielbasa...
      </p>
      <p>
        Brisket meatball turkey short loin boudin leberkas meatloaf...
      </p>
    </div>
    <div class="content" id="content4">
      <p>
        Bacon ipsum dolor sit amet landjaeger sausage brisket...
      </p>
    </div>
  </div>