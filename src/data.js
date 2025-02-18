export const viewsCount = (views) => {
    if (views >= 100000) {
        return Math.floor(views / 100000) + "M views"
    }
    else if (views >= 1000) {
        return Math.floor(views / 1000 ) + "k views"
    }
    else {
        return views + 'views'
    }
}