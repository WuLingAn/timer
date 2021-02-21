let store = {
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: false },
      { id: 4, text: '...', done: false },
      { id: 5, text: '...', done: false },
      { id: 6, text: '...', done: false },
      { id: 7, text: '...', done: false },
      { id: 8, text: '...', done: false },
      { id: 9, text: '...', done: false },
      { id: 10, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneOddTodos: state => {
      return state.todos.filter(todo => todo.id%2!==0)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
}

export default store;
