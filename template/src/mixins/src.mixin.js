export const s = n => `https://rochecrm.g2digi.com/images/v2/${n}`
// export const s = n => `https://rochecrm.g2digi.com/h5/images/${n}`

export default {
    data: {
        src$: {}
    },
    src (n) {
        return s(n)
    },
}
