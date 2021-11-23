<template>
    <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <input type="text" name="text" v-model="username" placeholder="Username" />
    </div>

    <div class="form-control" v-show="onSignUpPage">
      <input type="text" name="text" v-model="email" placeholder="Email" />
    </div>

    <div class="form-control">
      <input
        type="password"
        name="day"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <div class="form-control-check" v-show="onSignUpPage">
      <label>I have read the privacy policy</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" v-bind:value="text" class="btn btn-block" />
  </form>
</template>

<script>
    export default {
        name: 'Form',

        props: {
          text: String,
        },

        data() {
            return {
                email: '',
                username: '',
                password: '',
            }
        },

        computed: {
          onSignUpPage() {
            if (this.$route.path === '/signup') {
              return true
            } else {
              return false
            }
          }
        }
    }


</script>

<style scoped>
.add-form {
    display: flex;
    width: 350px;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
}
.form-control {
  margin: 20px, 0;
  width: 100%;
}

.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 63px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 16px;
  color: #A1A4B2;
  background: #F2F3F7;
  border-radius: 15px;
  border: none;
}
.form-control-check {
  display: flex;
  width: 300px;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 20px;
}

</style>