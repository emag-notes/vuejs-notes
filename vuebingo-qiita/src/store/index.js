import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  state: {
    remainingNumber: allRange(5),
    resultNumber: 0,
    history: [],
    nowShuffle: false
  }
});

function allRange (number) {
  if (typeof number !== 'number') {
    return null;
  }

  const args = [];
  for (let i = 1; i <= number; i++) {
    args.push(i);
  }

  return args;
}
