const asm3Router = require('express').Router()
var numeral = require('numeral');


asm3Router.post('/income', (req, res) => {

    let inCome = req.body.income

    if(inCome.length > 0){
        if(inCome < 150001){
            let pit = 0
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
        else if(inCome > 150000 && inCome < 300001){
            let pit = (inCome - 150000) * 0.05
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
        else if(inCome > 300000 & inCome < 500001){
            let pit = ((inCome - 300000) * 0.1) + 7500
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
        else if(inCome > 500000 && inCome < 750001){
            let pit = ((inCome - 500000) * 0.15) + 27500
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
        else if(inCome > 750000 && inCome < 1000001){
            let pit = ((inCome - 750000) * 0.2) + 65000
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
        else if(inCome > 1000000 && inCome < 2000001){
            let pit = ((inCome - 1000000) * 0.25) + 115000
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
        else if(inCome > 2000000 && inCome < 5000001){
            let pit = ((inCome - 2000000) * 0.3) + 365000
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
        else{
            let pit = ((inCome - 5000000) * 0.35) + 1265000
            res.status(200).json({
                status: true,
                message: 'cal PIT success',
                tax_pit: pit
            })
        }
    }else{
        res.status(400).json({
            status: false,
            message: 'cal PIT fail'
        })
    }
})

module.exports = asm3Router