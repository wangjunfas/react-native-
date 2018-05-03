//此页面是利用合成的reducer创建store，并且绑上中间键（reducer的创建参考当前文件夹下的reducer.js）

import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(reducer , applyMiddleware(thunk))

export default store