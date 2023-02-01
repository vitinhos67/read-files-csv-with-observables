
const {
    readFiles,
    ReadPathFiles
} = require('./utils/functions.files')

const {
    parseArray,
    separateInArrayWords
} = require('./utils/functions.data')

const path = `${__dirname}/csv/marcas`


ReadPathFiles(path)
    .pipe(
        readFiles(path),
        separateInArrayWords(),
        parseArray()
        )
    .subscribe({
        next(value) {
            console.log(value)
        },
        error(err) {
            if(err) {
                console.log(err)
            }
        },
        complete() {
            console.log('Operation completed...')
        }
    })



