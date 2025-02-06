const pool = require('../../data.js');
const {getStudentsQuery,getStudentByIDQuery, createStudentQuery, deleteStudentQuery, updateStudentQuery } = require('../queries/queries.js');

const getStudents = (req, res) => {
    pool.query(getStudentsQuery, ( err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows) ;
    })
    
}

const createStudent = (req, res) => {
    const {name, email, age, dob} = req.body;
    pool.query(createStudentQuery, [name, email, age, dob], 
        (err, result) => {
            if(err) throw err;
            res.status(201).json({ success: true, mess: "student created successfully"})
        }
    )
}

const getStudentByID = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(getStudentByIDQuery, [id], (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows[0])
    })
}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(getStudentByIDQuery, [id], (err, result) => {
        
        if(!result.rows.length){
            res.send("Student doesn't exixt in database")
        }

        pool.query(deleteStudentQuery, [id], (err, result) => {
            if(err) throw err
            res.status(200).json({success: true, mess: "Student deleted successfully"})
        })
    })
}

const updateStudent = (req, res) => {
    const {id, name} = req.body

    pool.query(getStudentByIDQuery, [id], (err, result) => {
        if(!result.rows.length){
            res.send('There is not student with such id')
        }

        pool.query(updateStudentQuery, [id, name] , (err, result) => {
            if(err) throw err
            res.status(200).json({success: true, mess: 'Student updates successfully'})
        })
    })
}
module.exports = {
    getStudents,
    createStudent,
    deleteStudent,
    getStudentByID,
    updateStudent
}