<template>
<div class="ui centered grid">
  <div class="center aligned column">
    <div class="ui pagination menu">
      <a class="item" @click="updateDiscover(0)">
        <i class="angle left icon"></i>
      </a>
      <a :class="classObject(1)" @click="updateDiscover(1)">
        {{pagesNo[0]}}
      </a>
      <a :class="classObject(2)" @click="updateDiscover(2)">
        {{pagesNo[1]}}
      </a>
        <a :class="classObject(3)" @click="updateDiscover(3)">
        {{pagesNo[2]}}
      </a>
      <a class="item" @click="updateDiscover(4)">
        {{pagesNo[3]}}
      </a>
      <a class="item" @click="updateDiscover(5)">
        {{pagesNo[4]}}
      </a>
      <a class="item" @click="updateDiscover(6)">
        <i class="angle right icon"></i>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'paginator',
  props: ['pages','page'],
  data(){
    return{
      pagesNo:[1,2,3,4,5],
      toGoPage:0
    }
  },
  methods:{
    updateDiscover: function(value){
      switch (value) {
        case 0:
          if(this.page !== 1){
            this.updatePaginator(0,0);
            console.log(this.page);
            this.$store.dispatch('loadMovieDiscover',this.page-1);
          }
        break;
        case 1:
          this.updatePaginator(0,1);
          console.log(this.pagesNo);
          this.$store.dispatch('loadMovieDiscover',this.toGoPage);
          break;
        case 2:
          this.updatePaginator(0,2);
          this.$store.dispatch('loadMovieDiscover',this.toGoPage);
          break;
        case 3:
          this.updatePaginator(0,3);
          this.$store.dispatch('loadMovieDiscover',this.toGoPage);
          break;
        case 4:
          this.updatePaginator(1,4);
          this.$store.dispatch('loadMovieDiscover',this.toGoPage);
          break;
        case 5:
          this.updatePaginator(1,5);
          this.$store.dispatch('loadMovieDiscover',this.toGoPage);
          break;
        case 6:
          this.updatePaginator(1,6);
          this.$store.dispatch('loadMovieDiscover',this.toGoPage);
        break;

        default:
      }
    },
    updatePaginator(mode,itemCode){

      //mode 1 significa ir hacia adelante
      if (mode===1){

        if(itemCode===4){
          this.toGoPage=this.pagesNo[3];
          this.pagesNo[0]=this.pagesNo[3]-2;
          this.pagesNo[1]=this.pagesNo[3]-1;
          this.pagesNo[2]=this.pagesNo[3];
          this.pagesNo[4]=this.pagesNo[3]+2;
          this.pagesNo[3]=this.pagesNo[3]+1;
        }

        if(itemCode===5){
          this.toGoPage=this.pagesNo[4];
          this.pagesNo[0]=this.pagesNo[4]-2;
          this.pagesNo[1]=this.pagesNo[4]-1;
          this.pagesNo[2]=this.pagesNo[4];
          this.pagesNo[3]=this.pagesNo[4]+1;
          this.pagesNo[4]=this.pagesNo[4]+2;
        }

        if(itemCode===6){
          this.toGoPage=this.page+1;
          if(this.page>=3){
            for(var i=0; i<5; i++){
              this.pagesNo[i]=this.pagesNo[i]+1
            }
          }
        }

      }else{
        //mode 0 significa ir hacia atras
        if(this.page>=5){
          if(itemCode===1){
            this.toGoPage=this.pagesNo[0];
            this.pagesNo[1]=this.pagesNo[0]-1
            this.pagesNo[2]=this.pagesNo[0]
            this.pagesNo[4]=this.pagesNo[0]+2
            this.pagesNo[3]=this.pagesNo[0]+1
            this.pagesNo[0]=this.pagesNo[0]-2
          }
          if(itemCode===2){
            this.toGoPage=this.pagesNo[1];
            this.pagesNo[0]=this.pagesNo[1]-2
            this.pagesNo[2]=this.pagesNo[1]
            this.pagesNo[3]=this.pagesNo[1]+1
            this.pagesNo[4]=this.pagesNo[1]+2
            this.pagesNo[1]=this.pagesNo[1]-1
          }
        }else if (this.page===4 && itemCode===1) {
          this.toGoPage=this.pagesNo[0];
          this.pagesNo[1]=this.pagesNo[0]
          this.pagesNo[2]=this.pagesNo[0]+1
          this.pagesNo[3]=this.pagesNo[0]+2
          this.pagesNo[4]=this.pagesNo[0]+3
          this.pagesNo[0]=this.pagesNo[0]-1
        }else if(this.page===4 && itemCode===2) {
          this.toGoPage=this.pagesNo[1];
          this.pagesNo[0]=this.pagesNo[1]-2
          this.pagesNo[2]=this.pagesNo[1]
          this.pagesNo[3]=this.pagesNo[1]+1
          this.pagesNo[4]=this.pagesNo[1]+2
          this.pagesNo[1]=this.pagesNo[1]-1
        }

        if(this.page<=3){
          if(itemCode===1){
            this.toGoPage=this.pagesNo[0]
          }
          if(itemCode===2){
            this.toGoPage=this.pagesNo[1]
          }
          if(itemCode===3){
            this.toGoPage=this.pagesNo[2]
          }
        }



        if(this.page>3 && itemCode===0){
          this.toGoPage=this.page-1;
          for(var i=0; i<5; i++){
            this.pagesNo[i]=this.pagesNo[i]-1
          }
        }
      }
    },
    classObject: function(value){
      switch (value) {
        case 1:
          if (this.page === 1){
            return 'active item'
          }else{
            return 'item'
          }
        break;
        case 2:
          if (this.page === 2){
            return 'active item'
          }else{
            return 'item'
          }
        break;
        default:
          if (this.page >= 3){
            return 'active item'
          }else {
            return 'item'
          }
        break;
      }
    }
  }
}
</script>
