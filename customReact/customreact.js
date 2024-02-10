function customRender (reactElement, mainContainer) {
  //TODO ***Problem with this is its a basic method where we have to set Each attributese with Corresponding items like i have use  domElement.setAttribute 2 times to set href and target ***
  //   const domElement = document.createElement(reactElement.type)
  //   domElement.innerHTML = reactElement.children
  //   domElement.setAttribute('href', reactElement.props.name)
  //   domElement.setAttribute('href', reactElement.props.href)
  //   mainContainer.appendChild(domElement)
  //! ***  Using for loop to remove mulriple time adding attributes issue in previous code  ***
  //   const domElement = document.createElement(reactElement.type)
  //   domElement.innerHTML = reactElement.children
  //   for (const prop in reactElement.props) {
  //     if (prop === 'children') continue
  //     domElement.setAttribute(prop, reactElement.props[prop])
  //   }
  //   mainContainer.appendChild(domElement)
}

//! reactElement is Object literal in  js
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
    name: '_blank'
  },
  children: 'Click me to visit google '
}





const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
