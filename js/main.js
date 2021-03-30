// Descrizione: Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.
var app = new Vue({
    el:'#root',
    data :{
        albumList :[],
        genreList :[]
    },
    mounted(){
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((discList)=>{

                    // crea lista album-------
                    this.albumList = discList.data.response;
                    // console.log(discList.data.response);

                    // estrai generi da lista album---------
                    for( let i=0;i<this.albumList.length;i++){
                        if(!this.genreList.includes(this.albumList[i].genre))
                        this.genreList.push(this.albumList[i].genre)
                    };
                    // console.log(this.genreList)
                })
    }
})















// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.