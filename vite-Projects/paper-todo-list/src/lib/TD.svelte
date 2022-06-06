<script context="module" lang="ts">
    // your script goes here
    export class TD {
    order: string = "aaa";
    completed: boolean = false;

    constructor( s: string ) {
      
      this.order = s;
      this.completed = false;
    }

    complete() {
      this.completed = true;
    }
  }
</script>