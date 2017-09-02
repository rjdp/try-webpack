function getComponent() {

  return import(/* webpackChunkName: "lodash" */ 'lodash').then(function() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(function() {console.log('An error occurred while loading the component');});
}

getComponent().then(function(component) {
  document.body.appendChild(component);
})