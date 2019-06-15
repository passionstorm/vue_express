<template lang="pug">
    .sidebar-mini.layout-fixed(:class="sidebar.css")
        .wrapper
            nav-bar
            sider-bar
            .content-wrapper
            footer-bar
            #sidebar-overlay(@click="closeSideBar")
</template>

<script>
import Navbar from './admin-layout/Navbar'
import Sidebar from './admin-layout/Sidebar'
import Footerbar from './admin-layout/Footerbar'
export default {
    name: 'admin',
    components:{
       'nav-bar': Navbar,
       'sider-bar': Sidebar,
       'footer-bar': Footerbar    
    },
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar
        },
    },
    methods: {
        closeSideBar() {
            this.$store.dispatch('CloseSideBar')
        }
    }
}
</script>

