<template>
    <div class="float-right">
    <Button
          @btn-click="toggleShow()"
        btnClass = "icon-only"
        showIcon
        icon= "options-outline" />
    </div>

    <div class="filters" v-if=show>
    <div>
        <h3 style="display:inline-block"> Let´s talk about: </h3>
        <Button
              @btn-click="removeFilters()"
              text= "Remove filters"
            btnClass = "icon-only float-right"
            showIcon="false"
            />

    </div>


    <Button
              @btn-click="toggleHobbies()"
              text= "Hobbies"
            :btnClass = "hobbies==true? 'filter-selected': 'filter-unselected'"
            showIcon
            icon= "bicycle-outline" />

     <Button
      @btn-click="togglePolitics()"
      text= "Politics"
    :btnClass = "politics==true? 'filter-selected': 'filter-unselected'"
    showIcon
    icon= "earth-outline" />

    <Button
          @btn-click="toggleKids()"
          text= "Kids"
        :btnClass = "kids==true? 'filter-selected': 'filter-unselected'"
        showIcon
        icon= "extension-puzzle-outline" />

    </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: 'FilterBar',
  props: {

    },
  components: {
    Button
  },
  data: function(){
    return{
        hobbies: false,
        politics: false,
        kids: false,
        show: Boolean
    }
  },
  created() {
      this.show = false;
    },
  methods:{

    toggleShow(){
       this.show = !this.show
    },
    async removeFilters(){
            this.hobbies=false
            this.kids=false
            this.politics=false
            this.show=false
      },
     async toggleHobbies(){
        this.hobbies=!this.hobbies
        if (this.hobbies==false){
            this.all=false
        }

      },
     async togglePolitics(){
        this.politics=!this.politics
        if (this.politics==false){
           this.all=false
        }

      },

      async toggleKids(){
        this.kids=!this.kids
        if (this.kids==false){
            this.all=false
        }

       }
    }
}
  
  </script>

  <style scoped>

  .float-right{
    float: right;
  }

  </style>