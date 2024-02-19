function $(selector) {
    return document.querySelector(selector)
}

function $$(selector) {
    return document.querySelectorAll(selector)
}



function createElement2(tagName,className,content) {
    const div = document.createElement(tagName);
    div.classList.add(className);
    div.innerHTML = content;

    return div
}





