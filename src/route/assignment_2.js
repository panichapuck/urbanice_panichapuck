const asm2Router = require('express').Router()
const db = require('../configs/database')

// get group //
asm2Router.get('/groups', (req, res) => {

    let sql = "select * from `group`"
    
    let query = db.query(sql,(err,results) => { 
        
        if (err) {
            res.status(400).json({
                status: false,
                message: 'group all fail'
            })
            console.log(err)
        }
        else {
            let count_contacts = results.length
            res.status(200).json({
                status: true,
                message: ' group all success',
                count_contacts:count_contacts,
                group:results
            })
        }
    })     
})

// get contact //
asm2Router.get('/groups/:id', (req, res) => {

    var id = req.params.id

    let sql = "select * from `group` where id = "+id+" "
    
    let query = db.query(sql,(err,results) => { 
        if (err) {
            res.status(400).json({
                status: false,
                message: 'group one fail'
            })
            console.log(err)
        }
        else {
            let count_contacts = results.length
            res.status(200).json({
                status: true,
                message: ' group one success',
                count_contacts:count_contacts,
                group:results
            })
        }
    })  
})

// add group //
asm2Router.post('/groups', (req, res) => {
    
    let name = req.body.group_name

    let sql = "INSERT INTO `group`(`group_name`) VALUES ('"+name+"')";

    db.query(sql, function (err, result) {

        if (err) {
            res.status(400).json({
                status: false,
                message: 'group add fail'
            })
            console.log(err)
        }
        else {
            res.status(200).json({
                status: true,
                message: 'group add success'
            })
        }
    })  
})

// update group //
asm2Router.put('/groups/:id', (req, res) => {
    
    var id = req.params.id
    let name = req.body.group_name

    let sql = "UPDATE `group` SET `group_name`='"+name+"' WHERE id = "+id+" ";

    db.query(sql, function (err, result) {

        if (err) {
            res.status(400).json({
                status: false,
                message: 'group update fail'
            })
            console.log(err)
        }
        else {
            res.status(200).json({
                status: true,
                message: 'group update success'
            })
        }
    })  
})

// add contact // 
asm2Router.post('/contact', (req, res) => {
    
    let group_id = req.body.group_id
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let birth_date = req.body.birth_date
    let photo = req.body.photo
    let phone = req.body.phone
    let email = req.body.email
    let url = req.body.url

    let sql = "INSERT INTO `contact`(`group_id`, `first_name`, `last_name`, `birth_date`, `photo`, `phone`, `email`, `url`) VALUES ('"+group_id+"','"+first_name+"','"+last_name+"','"+birth_date+"','"+photo+"','"+phone+"','"+email+"','"+url+"')";

    db.query(sql, function (err, result) {

        if (err) {
            res.status(400).json({
                status: false,
                message: 'contact add fail'
            })
            console.log(err)
        }
        else {
            res.status(200).json({
                status: true,
                message: 'contact add success'
            })
        }
    })  
})

// update contact //
asm2Router.put('/contact/:id', (req, res) => {
    
    var id = req.params.id
    let group_id = req.body.group_id
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let birth_date = req.body.birth_date
    let photo = req.body.photo
    let phone = req.body.phone
    let email = req.body.email
    let url = req.body.url
    
    let sql = "UPDATE `contact` SET `group_id`='"+group_id+"',`first_name`='"+first_name+"',`last_name`='"+last_name+"',`birth_date`='"+birth_date+"',`photo`='"+photo+"',`phone`='"+phone+"',`email`='"+email+"',`url`='"+url+"' WHERE id = "+id+" "

    db.query(sql, function (err, result) {

        if (err) {
            res.status(400).json({
                status: false,
                message: 'contact update fail'
            })
            console.log(err)
        }
        else {
            res.status(200).json({
                status: true,
                message: 'contact update success'
            })
        }
    })  
})


module.exports = asm2Router