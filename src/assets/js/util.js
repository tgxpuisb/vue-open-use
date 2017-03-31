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
    if (isSupportWebp.webp !== undefined) {
        return isSupportWebp.webp
    }
    const canvas = document.createElement('canvas')
    const result = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
    isSupportWebp.webp = result
    return result
}

export function toString (o) {
    return Object.prototype.toString.call(o)
}

export function getBrowserPrefix () {
    let docStyle = document.documentElement.style

    if (window.opera && toString(window.opera) === '[object Opera]') {
        return 'O'
    } else if ('MozAppearance' in docStyle) {
        return 'Moz'
    } else if ('WebkitAppearance' in docStyle) {
        return 'Webkit'
    } else if (typeof window.navigator.cpuClass === 'string') {
        return 'ms'
    } else {
        return ''
    }
}
