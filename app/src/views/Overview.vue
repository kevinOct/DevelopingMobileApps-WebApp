<template>
  <div class="outer-wrapper">
    <div class="toggle-wrapper">
        <label class="switch" >
            <input type="checkbox" checked v-on:change="toggleActive()">
            <span class="slider round"></span>
        </label>
    </div>

    <div v-if=active class="results">
        <div>
            <h2 style="display:inline-block"> People near you </h2>
            <FilterBar />
        </div>
        <Loading :loading="this.loading" />
        <NearUserPreview
        v-for="nearUser in nearUsers"
        :key="nearUser"
        :nearUser="nearUser"
        :highlight="false"
        />
     </div>
     <div v-if=!active>
             <h2 class="center-vertically"> Turn on and connect to people around you!</h2>
      </div>
  </div>

</template>

<script>
import FilterBar from "../components/FilterBar";
import NearUserPreview from "../components/NearUserPreview";
import Loading from "../components/Loading";

export default {
  name: "Overview",
  components: {
    FilterBar,
    NearUserPreview,
    Loading,
  },
  data() {
    return {
      nearUsers: ["a", "b"],
      loading: false,
      active: true
    };
  },
  async created() {
    this.nearUsers = await this.getNearUsers();
  },
  methods: {
    async getNearUsers() {

      this.loading = false
      this.nearUsers= [
                        {
                        "name":"Adam",
                        "profiletext":"Just approach me!",
                          "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      },
                      {
                      "name":"Luise",
                      "profiletext":"Happy to have a conversation",
                        "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"

                      },
                      {
                      "name":"William",
                      "profiletext":"Just approach me!",
                        "image": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"

                      },
                        {
                          "name":"Catherine",
                          "profiletext":"Just approach me!",
                          "image": "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"

                        },
                        {
                          "name":"Eva",
                          "profiletext":"Let´s talk about art:)",
                          "image": "https://images.pexels.com/photos/2568412/pexels-photo-2568412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        }
                      ]
        return this.nearUsers
    },
    toggleActive(){
    console.log("toggled")
        this.active= !this.active;
    }
  },
};
</script>

<style scoped>
.toggle-wrapper{
    text-align: center
}
 /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 40px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--lightgrey);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 32px;
  width: 32px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--blue);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--blue);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.center-vertically{
   height: 80vh;
  display:flex;/*this is  what was missing */
  flex-flow:column;/*this is  what was missing too*/
  align-items: center;
  justify-content: center;
  text-align:center
}

</style>