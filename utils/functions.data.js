const { subscribe } = require('moongose/routes')
const rxjs = require('rxjs')

exports.separateInArrayWords = () => (source) => 
new rxjs.Observable(observer => {
    return source.subscribe({
        next(x) {

        const splitLines = x.fileContent.split('\n').map(value => value.replace('\r', ''))
        observer.next({data: splitLines, type: x.type})

        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
    })
})


exports.parseArray = () => (source) => 
new rxjs.Observable(observer => {
    return source.subscribe({
        next(x) {
        
        const splitLines = x.data.map(value => value.split(';'))
    
        observer.next({
            data: splitLines,
            type: x.type
        })

        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
    })
})


exports.verifyTypeVehicle = () => (source) => 
new rxjs.Observable(observer => {
    return source.subscribe({
        next(x) {
        
        const regex = /[a-z]*-([a-z]*).csv/g    
        observer.next({
            type: regex.exec(x)[1],
            file: x
        })

        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
    })
})
