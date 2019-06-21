<template lang="pug">
    aside.main-sidebar.sidebar-dark-primary.elevation-4(style='min-height: 952px;')
        a.brand-link(href='index3.html')
            //- img.brand-image.img-circle.elevation-3(src='dist/img/AdminLTELogo.png', alt='AdminLTE Logo', style='opacity: .8')
            //- span.brand-text.font-weight-light AdminLTE 3
        .sidebar
            .user-panel.mt-3.pb-3.mb-3.d-flex
              .image
                  img.img-circle.elevation-2(src='dist/img/user2-160x160.jpg', alt='User Image')
              .info
                  a.d-block(href='#') Alexander Pierce
            nav.mt-2
              ul.nav.nav-pills.nav-sidebar.flex-column
                li.nav-item(v-for="menu in menuItems" :class="{'has-treeview': menu.items, 'menu-open': menu.open}")
                  router-link(v-if="menu.link" :to="menu.link" class="nav-link")
                    i(v-if="menu.icon" :class="'nav-icon ' + menu.icon")
                    p {{menu.title}}
                      i.right.fas.fa-angle-left(v-if='menu.items')
                  a.nav-link(v-else href='javascript:void(0)' @click="menu.open = !menu.open")
                    i(v-if="menu.icon" :class="'nav-icon ' + menu.icon")
                    p {{menu.title}}
                      i.right.fas.fa-angle-left(v-if='menu.items')
                  ul.nav.nav-treeview(v-if="menu.items")
                    li.nav-item(v-for="item in menu.items")
                      router-link(:to="item.link" class="nav-link")
                        i(v-if="item.icon" :class="'nav-icon ' + item.icon")
                        p {{item.title}}
                                    
</template>

<script>
export default {
  name: "Siderbar",
  data() {
    return {
      menuItems: []
    };
  },
  methods: {},
  created: function() {
    this.menuItems = [
      {
        icon: "fas fa-tachometer-alt",
        link: "/admin",
        title: "Dashboard",
        open: false
      },
      {
        title: "HRM managemenet",
        open: false,
        icon: "fas fa-users",
        link: "",
        items: [
          {
            title: "Overtime Pass",
            icon: "far fa-circle",
            link: "/overtime/pass"
          },
          { title: "Overtime Petitioner", icon: "far fa-circle", link: "/overtime/petitioner" },
          { title: "Attendace", icon: "far fa-circle", link: "/overtime/attendace" },
          { title: "Leave Record", icon: "far fa-circle", link: "/overtime/leave" },
        ]
      }
    ];
  }
};
</script>
<style scoped>
.nav-sidebar .menu-open .nav-treeview {
  display: block;
}
</style>
