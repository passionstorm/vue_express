<template lang="pug">
  .login-box
    .login-logo
      a(href='../../index2.html')
        b Admin
        | LTE
    .card
      .card-body.login-card-body
        p.login-box-msg Sign in to start your session
        form(action='../../index3.html', method='post')
          .input-group.mb-3
            input.form-control(type='email', placeholder='Email')
            .input-group-append.input-group-text
              span.fas.fa-envelope
          .input-group.mb-3
            input.form-control(type='password', placeholder='Password')
            .input-group-append.input-group-text
              span.fas.fa-lock
          .row
            .col-8
              .checkbox.icheck
                label
                  .icheckbox_square-blue(aria-checked='false', aria-disabled='false', style='position: relative;')
                    input(type='checkbox', style='position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;')
                    ins.iCheck-helper(style='position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;')
                  |  Remember Me
            .col-4
              button.btn.btn-primary.btn-block.btn-flat(type='submit') Sign In
        .social-auth-links.text-center.mb-3
          p - OR -
          a.btn.btn-block.btn-primary(href='#')
            i.fab.fa-facebook.mr-2
            |  Sign in using Facebook
          a.btn.btn-block.btn-danger(href='#')
            i.fab.fa-google-plus.mr-2
            |  Sign in using Google+
        p.mb-1
          a(href='#') I forgot my password
        p.mb-0
          a.text-center(href='register.html') Register a new membership
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {};
</script>