const app = {
    state: {
        sidebar: {
            css: '',
            opened: true
        }
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
            if(state.sidebar.opened){
                state.sidebar.css = 'sidebar-open'
            } else{
                state.sidebar.css = 'sidebar-collapse'
            }
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            state.sidebar.opened = false
            state.sidebar.css = 'sidebar-collapse'
        },
    },
    actions: {
        ToggleSideBar: ({commit}) => {
            commit('TOGGLE_SIDEBAR')
        },
        CloseSideBar({ commit }) {
            commit('CLOSE_SIDEBAR')
        },

    }
}

export default app
