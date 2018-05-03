//将 hone组件的仓库(reducer) 以及 绑定了操作仓库方法的组件(view) 放在一个文件里方便管理，
//这样，在别的组件中引入的时候，只需要引入 
//import { reducer as home }'XX/view/home/'  或者  import { view as Home }'XX/view/home/'就行了，
//引入的路径很统一，而不是像'XX/view/home/renducer'或者'XX/view/home/view'一样找路径很麻烦

import reducer from './reducer'
import View from './View'  

export { reducer , View }