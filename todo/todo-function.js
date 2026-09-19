export const createDomElement = (tag, classes, text) => {
    const newElement = document.createElement(tag);
    for (let key of classes) {
        newElement.classList.add(key);
    }
    if (text) {
        newElement.textContent = text;
    } 
    return newElement;
};

export function getCurrentFormattDate() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    return formattedDate;
}
