export const state = () => ({
  numberMaxComic: 1,
  itemsRating: [],
})

export const mutations = {
  addNumberMaxComic(states, number) {
    states.numberMaxComic = number
  },
  addItemRating(states, data) {
    states.itemsRating.push(data)
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