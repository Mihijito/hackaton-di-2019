export default {
  namespaced: true,
  state: {
    game: {
      mode: 'advanced'
    }
  },
  getters: {
    mode: state => {
      return state.game.mode;
    }
  },
  mutations: {
    setMode: (state, mode) => {
      state.game.mode = mode;
    }
  },
  actions: {
    setMode({ commit }, mode) {
      commit('setMode', mode);
    }
  }
};
