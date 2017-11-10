import Cookies from 'js-cookie';

let util = {};
util.setCurrentPath = function (vm, name) {
  let currentPathArr = [{
    title: '首页',
    path: '/dashboard',
    name: 'home_index'
  }];
  if (name === "") {
    return currentPathArr
  }
  vm.$store.state.app.routers.forEach(item => {
    if (item.hidden !== true) {
      let length = item.children.length;
      item.children.forEach(child => {
        if (child.name === name) {
          if (length === 1) {
            let p1 = {
              title: item.title,
              path: item.path + "/" + child.path,
              name: child.name,
            };
            currentPathArr.push(p1);
          } else {
            let p1 = {
              title: item.title,
              path: '',
              name: item.name,
            };
            let p2 = {
              title: child.title,
              path: item.path + "/" + child.path,
              name: child.name,
            };
            currentPathArr.push(p1);
            currentPathArr.push(p2);
          }
          return currentPathArr;
        }
      })
    }
  });
  return currentPathArr;
};

util.toggleClass = function(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

util.getUser =function(){
  let userInfo = Cookies.get('userInfo');
  if(userInfo!==""&& userInfo!==undefined){
    return JSON.parse(userInfo)
  }else{
    return null;
  }
}

util.removeUser =function(){
  Cookies.remove("userInfo");
}

export default util;
