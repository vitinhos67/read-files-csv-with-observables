const rxjs = require('rxjs')

exports.separateInArrayWords = () => (source) => 
new rxjs.Observable(observer => {
    return source.subscribe({
        next(x) {
        
        const splitLines = x.split('\n').map(value => value.replace('\r', ''))
        
        observer.next(splitLines)

        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
    })
})


exports.parseArray = () => (source) => 
new rxjs.Observable(observer => {
    return source.subscribe({
        next(x) {
        
        const splitLines = x.map(value => value.split(';'))
        
        observer.next(splitLines)

        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
    })
})
