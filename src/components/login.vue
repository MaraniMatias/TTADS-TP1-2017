<template>
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="assets/images/logo.png" class="image">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="user_name" placeholder="User Name" v-model="userName">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" v-model="userPassword">
          </div>
        </div>
        <div class="ui fluid large teal submit button" @click="goCreateRequestToken()">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="https://www.themoviedb.org/account/signup">Sign Up</a>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default { 
    methods: {
        ...mapActions(['createRequestToken', 'createSessionWithLogin', 'createSession', 'getDetailsOfAccount']),
        goCreateRequestToken: function () {
            this.createRequestToken()
            .then((response) => {
                this.createSessionWithLogin({ userName: this.userName, userPass: this.userPassword,  requestToken: response})
                .then((response) => {
                    this.createSession({requestToken: response})
                    .then((response) => {
                        this.getDetailsOfAccount({session_id: response});
                    });
                });
            });
        }
    }
}
</script>

<style scoped>
 body{
    background-color: #DADADA;
}
body > .grid {
  height: 100%;
}
.image {
  margin-top: -100px;
}
.column {
max-width: 450px;
}
</style>
