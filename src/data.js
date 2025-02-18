export const convertor = (views) => {
    if (views >= 100000) {
        return Math.floor(views / 100000) + "M"
    }
    else if (views >= 1000) {
        return Math.floor(views / 1000 ) + "k"
    }
    else {
        return views 
    }
}
