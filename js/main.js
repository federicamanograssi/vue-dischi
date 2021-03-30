// Descrizione: Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.
var app = new Vue({
    el:'#root',
    data :{
        albumList :[]
    },
    mounted(){
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((discList)=>{
                    this.albumList = discList.data.response;
                    console.log(this.albumList)
                })
    }
})















// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.