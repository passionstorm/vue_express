<template lang="pug">
  div
    section.content-header
      h1 Ứng dụng Facebook
    section.content
      .container-fluid
        button.btn(@click="loginFacebook" v-html="connect.title" v-bind:class="connect.css")
        span(:html="loginStatus")
        button.btn.btn-default(@click="getProfile") Xem thông tin của bạn
        button.btn.btn-default(@click="testAction") Test
        button.btn.btn-default(@click="getListFriend") Get Friend
      pre(v-html="getApiResponse")
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      connect: {
        css: "btn-default",
        title: "Kết nối facebook"
      },
      accessToken: "",
      loginStatus: "",
      apiResponse: ""
    };
  },
  computed: {
    getApiResponse: function() {
      return JSON.stringify(this.apiResponse, undefined, 2);
    }
  },
  methods: {
    getListFriend() {
   
      axios({
        method: "get",
        url: "https://www.facebook.com/vohoangminhdn93/posts/2520275857983320",
        contentType: 'text',
      }).then(function(res) {
        
      });

      return "";
    },
    testAction() {
      let t = this;
      FB.api("/2522082197802686_2520275857983320/comments", function(res) {
        t.apiResponse = res;
      });
    },
    getProfile() {
      let t = this;
      FB.api("/me/posts", function(res) {
        t.apiResponse = res;
      });
    },
    loginFacebook() {
      let t = this;
      FB.login(function(res) {
        if (res.authResponse) {
          console.log(res);
          t.accessToken = res.authResponse.accessToken;
          t.apiResponse = res;
          t.connect.css = "btn-success";
          t.connect.title = "Đã kết nối";
        } else {
        }
      });
    }
  },
  created: function() {
    let t = this;
    window.fbAsyncInit = function() {
      FB.init({
        appId: "358293438213385",
        xfbml: true,
        version: "v2.11"
      });

      //This function should be here, inside window.fbAsyncInit
      FB.getLoginStatus(function(res) {
        if (res) {
          t.loginStatus = "Đã kết nối";
          t.accessToken = res.authResponse.accessToken;
          t.connect.css = "btn-success";
          t.connect.title = "Đã kết nối";
        } else {
          t.loginStatus = "Chưa kết nối";
        }
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
};
</script>
