function myRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
   container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://goole.com'
    },
    children: "click"
}

const rootC = document.querySelector('#root')

myRender(reactElement, rootC)