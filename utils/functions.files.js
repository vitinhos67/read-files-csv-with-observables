const rxjs = require('rxjs')
const fs = require('fs')
exports.ReadPathFiles = (path) => {
    return new rxjs.Observable(subscriber => {
        try {

            fs.readdirSync(path).forEach(element => subscriber.next(element))
            subscriber.complete()
        } catch (error) {
            subscriber.error(error)
        }
    })
}

exports.readFiles =  () => (source) =>
new rxjs.Observable(observer => {
  return source.subscribe({
    next(x) {
    
    const path = `${__dirname}/../csv/marcas`

    const pathFile = `${path}/${x}`
    const file = fs.readFileSync(pathFile, {
        encoding: 'utf-8'
    })
    observer.next(file)
    },
    error(err) { observer.error(err); },
    complete() { observer.complete(); }
  })
});



