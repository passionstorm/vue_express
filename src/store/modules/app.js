function updateBodyClass(state){
    state.bodyClass = state.sidebar.css + ' ' + state.modal
}


const app = {
    state: {
        bodyClass: '',
        sidebar: {
            css: '',
            opened: true
        },
        modal: '',
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
            if (state.sidebar.opened) {
                state.sidebar.css = 'sidebar-open'
            } else {
                state.sidebar.css = 'sidebar-collapse'
            }
            updateBodyClass(state)
        },
        CLOSE_SIDEBAR: state => {
            state.sidebar.opened = false
            state.sidebar.css = 'sidebar-collapse'
            updateBodyClass(state)
        },
        OPEN_MODAL: (state, bool) => {
            state.modal = bool ? 'modal-open' : ''
            updateBodyClass(state)
        },
    },
    actions: {
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },
        CloseSideBar({ commit }) {
            commit('CLOSE_SIDEBAR')
        },
        OpenModal({ commit }, bool) {
            commit('OPEN_MODAL', bool)
        },

    }
}

export default app
