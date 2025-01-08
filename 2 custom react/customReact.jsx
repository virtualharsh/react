const customRender = (reactElement, container) => {
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.text;
    element.draggable = true
    console.log(element);
    container.appendChild(element);
}

const reactElement = {
    type: "h1",
    text: "Harsh",
}

const root = document.getElementById("root")

customRender(reactElement, root)