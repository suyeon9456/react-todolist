const intialState = {
  todos: [
    {
      id: 1,
      title: '헬스장 가기',
      contents: '운동해야지이ㅣ',
      checked: false
    },
    {
      id: 2,
      title: '공부하기',
      contents: '리액트리액트',
      checked: false
    }
  ],
  todo: {}
}

const GET_ITEM = 'GET_ITEM'
const CREATE_ITEM = 'CREATE_ITEM'
const TOGGLE_ITEM = 'TOGGLE_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'

export const getItem = id => ({ type: GET_ITEM, id })
export const toggleItem = id => ({ type: TOGGLE_ITEM, id })
export const deleteItem = id => ({ type: DELETE_ITEM, id })
export const updateItem = ({ id, title, contents }) => ({ type: UPDATE_ITEM, id, title, contents })

function itemListReducer (state = intialState, action) {
  console.log('action', action)
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        todo: state.todos.find(item => item.id === action.id)
      }
    case CREATE_ITEM:
      return {
        ...state,
        todos: state.todos.concat(action.item)
      }
    case TOGGLE_ITEM:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.id
            ? {
                ...todo,
                checked: !todo.checked
              }
            : todo
        })
      }
    case DELETE_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case UPDATE_ITEM:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.id
            ? {
                ...todo,
                title: action.title,
                contents: action.contents
              }
            : todo
        }),
        todo: {
          ...state.todo,
          title: action.title,
          contents: action.contents
        }
      }
    default:
      return state
  }
}

export default itemListReducer
