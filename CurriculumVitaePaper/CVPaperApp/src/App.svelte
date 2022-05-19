<script lang="ts">
  // This will just be a blank Page where i fill in my professionnal information about me
  /**
   * I will need 
   *  a Photo
   *  my coords
   *  a layout
   * 
   *  a theme
   *  
   * content like Compétences -> Expériences -> Competences / Scolarité_ cursus / Diplomes /  
   * 
   * 
   * 
  */

import TabsNavigator from "./TabsNavigator.svelte";

</script>


<main class="container-lg paper">
  
  <div class="paper bg-sheet">
    
    
    <!-- HEADER -->
    <div class="paper container-xs hue row" id="header">

        <div class="col sm-3"> Curriculum Vitae </div>
        <div class="box sm-6">        
          Younes Anis Harrat
        </div>
        <div class="col sm-3">  Web Developper </div>
    </div>

    <!-- Content Layout -->

    <div class="paper content">

      <div class="container-xs">
        <TabsNavigator />
      </div>
      <div class="row flex-spaces child-borders child-shadows-hover">
        <div class="sm-3 col callButton">H-Over Here ! </div>
      </div>
    </div>

    <!-- Footer -->

    <div class="paper " id="footer">
      <div class="box">
        Made by Y.A.H :) 
        using PaperCSS, Vite and Svelte-ts
      </div>

    </div>

  </div>
 
</main>


<style>
  main {
    background-color: black;
    color: goldenrod;
    text-align:center;
    margin:0;
    padding: 0 5rem;
    width: fit-content;
    height: fit-content;
  }

#header {
  text-decoration: underline blink wavy rgb(189, 181, 160);
  margin: 0;
    padding: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}

  #footer {
    border-radius: 20rem;
    margin: 0;
    padding: 0;
    background-color: rgba(9, 135, 142, 0.445);
    text-shadow:rgb(145, 145, 2) 1px 1px 2px;
    color:aliceblue;
  }

.bg-sheet {
  border-top-right-radius: 5vh;
  border-bottom-left-radius: 5vh;
  background-color: rgba(144, 144, 143, 0.799);
  background-image: url(https://img5.goodfon.com/wallpaper/nbig/a/83/bumaga-fon-kraski-colorful-akvarel-texture-background-pape-6.jpg);
  background-repeat: no-repeat;
  background-clip: border-box;
  background-size: cover;
}

  .box {
    display: flex;

    align-items: center;
    justify-content: center;
  }

  .hue {
    box-shadow: coral .1rem .2rem .1rem ;
    border-radius: 20rem;
  }

  .callButton {
    min-width: fit-content;
  }
</style>