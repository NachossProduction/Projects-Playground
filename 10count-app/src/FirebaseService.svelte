<script lang="ts" context="module">
    import * as FireB from "firebase/database"
    // init
    export class FirebaseServiceInstance {
        
        FirebaseService() {

        }
        
        init(app: any) {
            
            // let db = FireB.getDatabase();
            let DB = FireB.getDatabase(app)
            // DB.getInstance("https://sveltetdl-default-rtdb.europe-west1.firebasedatabase.app/")


        let magasins = [];
        console.log(DB, FireB.enableLogging(true));
        // magasins.push


        }
    }
   

</script>