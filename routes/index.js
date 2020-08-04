const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {
        name: 'Home',
        date: 'Aug 4 2020'
    }
    res.render('index', data)
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