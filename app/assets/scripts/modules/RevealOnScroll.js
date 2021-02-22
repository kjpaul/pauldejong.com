import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(elms, thresholdPercent) {
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal = elms
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    } 

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            console.log('Resize just ran')
            this.browserHeight = window.innerHeight
        }, 300))
    }

    calcCaller() {
        console.log("scroll function ran")
            this.itemsToReveal.forEach(elm => {
                if (elm.isRevealed == false) {
                    this.calculateIfScrolledTo(elm)
                }
            })
    }

    calculateIfScrolledTo(elm) {
        if (window.scrollY + this.browserHeight > elm.offsetTop) {
            console.log("element was calculated.")
            let scrollPercent = (elm.getBoundingClientRect().top / this.browserHeight) * 100
            if (scrollPercent < this.thresholdPercent ) {
                elm.classList.add("reveal-item--is-visible")
                elm.isRevealed = true
                if (elm.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(elm => {
            elm.classList.add("reveal-item")
            elm.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}

export default RevealOnScroll;