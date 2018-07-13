



module.exports = {
    create: (res, req, next) => {
        const dbData = req.app.get('db');
        const {name, price, imageUrl} = req.body;

        dbData.create([name, price, imageUrl]).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'you did it wrong'})
        })
    },

    read: (res, req, next) => {
        const dbData = req.app.get('db');
        const {params} = req;

        dbData.read([params.id]).then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'you did it wrong'})
        })
    },

    update: (res, req, next) => {
        const dbData = req.app.get('db');
        const {params} = req;

        dbData.update([params.id]).then(() => res.status(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'you did it wrong'})
        })
    },

    delete: (res, req, next) => {
        const dbData = req.app.get('db');
        const {params} = req;

        dbData.delete([params.id]).then(() => res.send(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'you did it wrong'})
        })
    }
}