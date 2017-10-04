<template lang="pug">
.ui.middle.aligned.center.aligned.grid
  .column
    h2.ui.teal.image.header
      i.users.icon
      .content Log-in to your account
    form.ui.large.form(@submit.prevent="goCreateRequestToken()")
      .ui.stacked.segment
        .field
          .ui.left.icon.input
            i.user.icon
            input(required type='text' placeholder='User Name' v-model.string='userName')
        .field
          .ui.left.icon.input
            i.lock.icon
            input(required type='password' placeholder='Password' v-model.string='userPassword')
        .fluid.large
          button.ui.teal.button(type="submit") Login
      .ui.secondary.inverted.red.segment(v-show="incorrecLogin")
        i.warning.icon
        | {{incorrecLogin}}
    .ui.message
      | New to us?
      a(href='https://www.themoviedb.org/account/signup') Sign Up
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['currentUser'],
  data() {
    return {
      userName: '',
      userPassword: '',
      incorrecLogin: '',
    }
  },
  methods: {
    ...mapActions(['createRequestToken', 'createSessionWithLogin', 'createSession', 'getDetailsOfAccount', 'setUsuarioLogin']),
    goCreateRequestToken: function () {
      this.createRequestToken()
        .then((response) => {
          this.createSessionWithLogin({ userName: this.userName, userPass: this.userPassword, requestToken: response })
            .then((response) => {
              this.createSession({ requestToken: response })
                .then((response) => {
                  this.getDetailsOfAccount({ session_id: response })
                    .then((response) => {
                      this.setUsuarioToStore(response);
                      this.incorrecLogin = response.username;
                      //this.$router.go(-1);
                      this.$router.push({name: 'discover'});
                    });
                }).catch((e) => {
                  this.incorrecLogin = e;
                });
            }).catch((e) => {
              this.incorrecLogin = e
            });
        }).catch((e) => {
          this.incorrecLogin = e;
        });
    },
    setUsuarioToStore: function (value) {
      this.setUsuarioLogin({ response: value });
    }
  }
}
</script>

<style scoped>
body {
  background-color: #DADADA;
}

body>.grid {
  height: 100%;
}

.image {
  margin-top: -100px;
}

.column {
  max-width: 450px;
}
</style>
