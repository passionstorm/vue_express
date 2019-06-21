<template lang="pug">
    .sidebar-mini.layout-fixed(:class="bodyClass")
        .wrapper
          nav-bar(ref="mainHeader")
          sider-bar(ref="sidebar")
          .content-wrapper(:style="{'min-height': contentWrapperHeight}")
            section.content-header 
              .container-fluid
                .row.mb-2
                  .col-sm-6
                    h1 {{ $route.meta.title }}
                  .col-sm-6
                    ol.breadcrumb.float-sm-right
                      li.breadcrumb-item
                        a(href='#') Home
                      li.breadcrumb-item.active Flot
            section.content
              router-view  
          footer-bar(ref="mainFooter")
          #sidebar-overlay(@click="closeSideBar")
        .modal-backdrop.fade.show(v-if="isModalShow")
</template>

<script>
import Navbar from "./admin-layout/Navbar";
import Sidebar from "./admin-layout/Sidebar";
import Footerbar from "./admin-layout/Footerbar";
export default {
  name: "admin",
  data() {
    return {
      modelShow: false,
      windowHeight: 0,
      footerHeight: 0,
      headerHeight: 0,
      sidebarHeight: 0,
      contentWrapperHeight: 0,
    };
  },
  components: {
    "nav-bar": Navbar,
    "sider-bar": Sidebar,
    "footer-bar": Footerbar,
    "v-modal": () => import("../components/Modal")
  },
  computed: {
    sidebar() {
      return;
    }
  },
  computed: {
    bodyClass: function() {
      return this.$store.state.app.bodyClass;
    },
    isModalShow: function() {
      return this.$store.state.app.modal !== "";
    }
  },
  methods: {
    closeSideBar() {
      this.$store.dispatch("CloseSideBar");
    },
    launchModel() {
      this.modelShow = true;
    },
    closeModel() {
      this.modelShow = false;
    },
    handleResize() {
      this.windowHeight = window.innerHeight;
    }
  },
  created() {
    let t = this;
    window.addEventListener("resize", t.handleResize);
    t.handleResize();
    t.$nextTick(() => {
      t.headerHeight = t.$refs.mainHeader.$el.clientHeight
      t.footerHeight = t.$refs.mainFooter.$el.clientHeight
      t.sidebarHeight = t.$refs.sidebar.$el.clientHeight
      t.contentWrapperHeight = t.windowHeight - t.footerHeight - t.headerHeight + 'px';
    });
  }
};
</script>
<style scoped>
.main-sidebar{
  z-index: 950;
}
</style>

