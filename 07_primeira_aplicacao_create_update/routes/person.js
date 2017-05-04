var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

/**
 *  find methods
 */
router.get('/', function(req, res) {
    /**
     *  find
     */
    Person.find({}, function (err, people) {
        if(err) {
            return;
        }

        res.send(people);
    });

    /**
     *  findOne
     */
    // Person.findOne({
    //     _id: req.params.id
    // }, function (err, person) {
    //     if(err) {
    //         return;
    //     }
    //
    //     res.send(person);
    // });

    /**
     *  findById
     */
    // Person.findById( req.params.id , function (err, person) {
    //     if(err) {
    //         return;
    //     }
    //
    //     res.send(person);
    // });
});

/**
 *  create methods
 */
router.post('/', function(req, res) {
    /**
     *  create
     */
    Person.create({
        name: {
            firstname: 'Wesley',
            lastname: 'Willians'
        },
        age: 23
    }, function (err, person) {
        if(err) {
            return;
        }

        res.send(person);
    });

    /**
     *  create with save method
     */
    // var person = new Person({
    //     name: {
    //         firstname: 'Alvin',
    //         lastname: 'Brand'
    //     },
    //     age: 24
    // });
    //
    // person.save(person, function (err, person) {
    //     if(err) {
    //         return;
    //     }
    //
    //     res.send(person);
    // });

    /**
     *  create with insertMany method
     */
    //     var arr = [
    //         {
    //             name: {
    //                 firstname: 'Alvin 1',
    //                 lastname: 'Brand'
    //             },
    //             age: 30
    //         },
    //         {
    //             name: {
    //                 firstname: 'Alvin 2',
    //                 lastname: 'Brand'
    //             },
    //             age: 27
    //         },
    //         {
    //             name: {
    //                 firstname: 'Alvin 3',
    //                 lastname: 'Brand'
    //             },
    //             age: 28
    //         }
    //     ];
    //
    //     Person.insertMany(arr, function (err, person) {
    //         if(err) {
    //             return;
    //         }
    //
    //         res.send(person);
    //     });
});

/**
 *  update methods
 */
router.put('/:id', function (req, res) {
    /**
     *  findOneAndUpdate
     */
    Person.findOneAndUpdate({
        _id: req.params.id
    },{
        name: {
            firstname: 'Thed',
            lastname: 'Talks'
        }
    }, function (err, person) {
        if(err) {
            return;
        }

        res.send(person);
    });

    /**
     *  update
     */
    // Person.update({
    //     _id: req.params.id
    // },{
    //     name: {
    //         firstname: 'Bread',
    //         lastname: 'Paints'
    //     }
    // }, function (err, person) {
    //     if(err) {
    //         return;
    //     }
    //
    //     res.send(person);
    // });
});

module.exports = router;