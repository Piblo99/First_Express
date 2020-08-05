const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {
        name: 'Index',
        date: 'Aug 5 2020',
        profiles: [
            {name: 'Smelly', pic: '/images/smelly.png', cuteness: 10},
            {name: 'Yasmeen', pic: '/images/yas.png', cuteness: 10},
            {name: 'Elmo', pic: '/images/Elmo.png'}
        ]
    }
    res.render('index', data)
})

router.post('/join', (req, res, next) => {
    const body = req.body
    
    res.json({
        data: body
    })
})

router.get('/json', (req, res, next) => {
    const data = {name:'Smelly', location:'Albaturkey'}
    res.json(data);
})

router.get('/html', (req, res, next) => {
    const html = '<html><h1>This is an HTML response</h1></html>'
    res.send(html);
})

router.get('/query', (req, res, next) => {
    const query = req.query
    res.json(query)
})

router.get('/params/:name/:location/:occupation', (req, res, next) => {
    const params = req.params
    res.json({
        params: params
    })
})

module.exports = router