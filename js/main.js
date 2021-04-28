// Descrizione: Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.
var app = new Vue({
    el:'#root',
    data :{
        albumList :[],
        genreList :[],
        activeGenre:'-1'
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
                    this.genreList.sort()
                })
    },
    methods:{
        onChangeFilter(){
            // BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((discList)=>{
                    this.albumList =[]
                    if(this.activeGenre == "All"){
                        this.albumList = discList.data.response;
                    } else {
                        this.albumList = discList.data.response.filter((disc)=>{
                            return disc.genre == this.activeGenre
                        })
                    }

                    // BONUS 2: Ordinare i dischi per anno di uscita.
                    this.albumList.sort(function(a,b){
                        return a.year - b.year
                    })
                })
        }
    }
})

