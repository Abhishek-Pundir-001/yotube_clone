export const ApiKey = 'AIzaSyChe3Xw-78bY9N10rdSN4KOwvWSsGNW3KM';

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