export function getStyle (el, prop) {
    let getComputedStyle = window.getComputedStyle
    if (getComputedStyle) {
        return getComputedStyle(el, null).getPropertyValue(prop)
    } else {
        return el.style[prop]
    }
}

export function isScrollEl (el) {
    let flag = getStyle(el, 'overflow') + getStyle(el, 'overflow-y') + getStyle(el, 'overflow-x')
    return /(scroll|auto)/.test(flag)
}

export function getScrollParent (el){
    if(!(el instanceof window.HTMLElement)){
        return document
    }

    let currentEl = el
    while (currentEl) {
        if (currentEl === document ||
            currentEl === document.documentElement ||
            currentEl === document.body ||
            currentEl === window
        ) {
            break
        }

        if (isScrollEl(currentEl)) {
            return currentEl
        }

        currentEl = currentEl.parentNode
    }

    return document
}

export function isSupportWebp () {
    const canvas = document.createElement('canvas')
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}
