export const blurActiveElement = () => {
    if (typeof document !== 'undefined' &&
        document.activeElement &&
        document.activeElement.tagName !== 'BODY' &&
        document.activeElement.blur) {
        document.activeElement.blur()

        return true
    }

    return false
}

export const generateId = ((index = 0) => () => (index++).toString())()


export const createModalEvent = (args = {}) => {
    return {
        id: generateId(),
        timestamp: Date.now(),
        canceled: false,
        ...args
    }
}

export const createDivInBody = () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    return div
}