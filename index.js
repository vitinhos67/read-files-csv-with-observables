const {
    readFiles,
    ReadPathFiles
} = require('./utils/functions.files')

const {
    parseArray,
    separateInArrayWords,
    verifyTypeVehicle
} = require('./utils/functions.data')

const {
    errorSubscribe,
    handleError
} = require('./utils/errors/errors.handler')

const { brandModel, modelModel} = require('./database/schemas')


require('./database/connection')

const pathBrand = `${__dirname}/csv/marcas`
const pathModels = `${__dirname}/csv/modelos`



ReadPathFiles(pathBrand)
    .pipe(
        verifyTypeVehicle(),
        readFiles(pathBrand),
        separateInArrayWords(),
        parseArray()
        )
    .subscribe({
        async next(x) {


            x.data.forEach(async (element) => {
                  await brandModel.create({
                        brand: element[1],
                        id: element[0],
                        type: x.type,
                        visited: false,

                    })
                
                    console.log('Colections brands added..')
            });

        },
        error: errorSubscribe

    })

ReadPathFiles(pathModels)
    .pipe(
        verifyTypeVehicle(),
        readFiles(pathModels),
        separateInArrayWords(),
        parseArray()
        )
    .subscribe({
        async next(x) {

            x.data.forEach(async (element) => {
                    await modelModel.create({
                        id_brand: parseInt(element[1]),
                        id: parseInt(element[0]),
                        model: element[2],
                        type: x.type,
                        visited: false,
                    }).catch(handleError)


                                    
                    console.log('Colections models added..')
            });

            
            
        },
        error: errorSubscribe
    })

