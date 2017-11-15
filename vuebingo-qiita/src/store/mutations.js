export default {
  start(state) {
    if (! state.nowShuffle) {
      state.history.push(state.resultNumber);
    }
    state.nowShuffle = true;
  },
  stop(state) {
    if (! state.nowShuffle) {
      return;
    }
    const length = state.remainingNumber.length;
    const i = Math.floor(Math.random() * length);
    state.resultNumber = state.remainingNumber[i];
    state.remainingNumber.splice(i, 1);
    state.nowShuffle = false;
  }
};