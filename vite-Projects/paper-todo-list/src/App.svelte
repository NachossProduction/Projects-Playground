
<script lang="ts">

  import {TD} from './lib/TD.svelte';

  let TODOS = [];
  let textV = "";
  function add(s:string){
    let a: TD = new TD(s);
    TODOS.push(a);
  }





</script>

<link rel="stylesheet" href="https://unpkg.com/papercss@1.8.3/dist/paper.min.css">
  
<div class="no-mg-layout-body">
  <div class="container-md">
    <h1>Paper To Do List</h1>
  </div>

  <div class="container-lg">

    <div class="row">
      <div class="inputs">
        <textarea name="text" id="text" cols="30" rows="10" bind:value="{textV}"></textarea>
      </div>
      <div class="col-6 col">
        <button class="btn-block btn-success " on:click="{add(textV)}">Add New ToDo</button>
        <button class="btn-block">Delete Todo</button>
      </div>
    </div>
  </div>


</div>




<style>
  .no-mg-layout-body {
    width: 100vw;
    min-height: 100vh;
    height:fit-content;
    background-color: rgba(37, 100, 151, 0.68);
    margin:0;
    padding:5rem;
  }
</style>