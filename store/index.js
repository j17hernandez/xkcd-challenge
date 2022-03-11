export const state = () => ({
  numberMaxComic: 1,
  itemsRating: [],
})

export const mutations = {
  addNumberMaxComic(state, number) {
    state.numberMaxComic = number
  },
  addItemRating(data) {
    const items = data
    state.itemsRating.push(items)
  }
}


export const actions = {
  addItem({ commit }, item) {
    commit("addItemRating", item)
  },
  setNumberMaxComic({ commit }, data) {
    commit("addNumberMaxComic", data)
  }

}