<template lang="pug">
    nav.main-header.navbar.navbar-expand.bg-white.navbar-light.border-bottom
        ul.navbar-nav
            li.nav-item
            a.nav-link(@click='toggleSideBar', href='javascript:void(0)')
                i.fa.fa-bars
            li.nav-item.d-none.d-sm-inline-block
            a.nav-link(href='index3.html') Home
            li.nav-item.d-none.d-sm-inline-block
            a.nav-link(href='#') Contact
        form.form-inline.ml-3
            .input-group.input-group-sm
                input.form-control.form-control-navbar(type='search', placeholder='Search', aria-label='Search')
                .input-group-append
                    button.btn.btn-navbar(type='submit')
                        i.fa.fa-search
        ul.navbar-nav.ml-auto
            li.nav-item.dropdown
            a.nav-link(data-toggle='dropdown', href='#')
                i.fa.fa-comments-o
                span.badge.badge-danger.navbar-badge 3
            .dropdown-menu.dropdown-menu-lg.dropdown-menu-right
                a.dropdown-item(href='#')
                .media
                    img.img-size-50.mr-3.img-circle(src='dist/img/user1-128x128.jpg', alt='User Avatar')
                    .media-body
                    h3.dropdown-item-title
                        | Brad Diesel
                        span.float-right.text-sm.text-danger
                        i.fa.fa-star
                    p.text-sm Call me whenever you can...
                    p.text-sm.text-muted
                        i.fa.fa-clock-o.mr-1
                        |  4 Hours Ago
                .dropdown-divider
                a.dropdown-item(href='#')
                .media
                    img.img-size-50.img-circle.mr-3(src='dist/img/user8-128x128.jpg', alt='User Avatar')
                    .media-body
                    h3.dropdown-item-title
                        | John Pierce
                        span.float-right.text-sm.text-muted
                        i.fa.fa-star
                    p.text-sm I got your message bro
                    p.text-sm.text-muted
                        i.fa.fa-clock-o.mr-1
                        |  4 Hours Ago
                .dropdown-divider
                a.dropdown-item(href='#')
                .media
                    img.img-size-50.img-circle.mr-3(src='dist/img/user3-128x128.jpg', alt='User Avatar')
                    .media-body
                    h3.dropdown-item-title
                        | Nora Silvester
                        span.float-right.text-sm.text-warning
                        i.fa.fa-star
                    p.text-sm The subject goes here
                    p.text-sm.text-muted
                        i.fa.fa-clock-o.mr-1
                        |  4 Hours Ago
                .dropdown-divider
                a.dropdown-item.dropdown-footer(href='#') See All Messages
            li.nav-item.dropdown
            a.nav-link(data-toggle='dropdown', href='#')
                i.fa.fa-bell-o
                span.badge.badge-warning.navbar-badge 15
            .dropdown-menu.dropdown-menu-lg.dropdown-menu-right
                span.dropdown-header 15 Notifications
                .dropdown-divider
                a.dropdown-item(href='#')
                i.fa.fa-envelope.mr-2
                |  4 new messages
                span.float-right.text-muted.text-sm 3 mins
                .dropdown-divider
                a.dropdown-item(href='#')
                i.fa.fa-users.mr-2
                |  8 friend requests
                span.float-right.text-muted.text-sm 12 hours
                .dropdown-divider
                a.dropdown-item(href='#')
                i.fa.fa-file.mr-2
                |  3 new reports
                span.float-right.text-muted.text-sm 2 days
                .dropdown-divider
                a.dropdown-item.dropdown-footer(href='#') See All Notifications
            li.nav-item
            a.nav-link(data-widget='control-sidebar', data-slide='true', href='#')
                i.fa.fa-th-large
</template>

<script>
export default {
    name: 'narbar',
    methods: {
        toggleSideBar() {
             this.$store.dispatch('ToggleSideBar')
        }
    }

}
</script>
