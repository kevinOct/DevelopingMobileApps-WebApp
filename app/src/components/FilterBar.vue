<template>
    <Button
          @btn-click="toggleShow()"
        btnClass = "icon-only"
        showIcon
        icon= "options-outline" />
    <div class="filters" v-if=show>
    <Button
          @btn-click="toggleAll()"
          text= "All"
        btnClass = "icon-only"
        showIcon
        icon= "color-filter-outline" />

    <Button
              @btn-click="toggleHobbies()"
              text= "Hobbies"
            btnClass = "icon-only"
            showIcon
            icon= "bicycle-outline" />

     <Button
      @btn-click="togglePolitics()"
      text= "Politics"
    btnClass = "icon-only"
    showIcon
    icon= "earth-outline" />

    <Button
          @btn-click="toggleKids()"
          text= "Kids"
        btnClass = "icon-only"
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
        all: true,
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
    async toggleAll(){
        this.all =!this.all
      },
     async toggleHobbies(){
        if (this.hobbies==false){
            this.all=false
        }
        this.hobbies=!this.hobbies
      },
     async togglePolitics(){
        if (this.politics==false){
           this.all=false
        }
        this.politics=!this.politics
      },

      async toggleKids(){
        if (this.politics==false){
            this.all=false
        }
        this.kids=!this.kids
       }
    }
}
  
  </script>

  <style scoped>

  button{
    float: right;
  }

  </style>