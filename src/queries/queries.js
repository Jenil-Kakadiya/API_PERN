const getStudentsQuery = 'select * from students'
const getStudentByIDQuery = 'select * from students where id=$1'
const updateStudentQuery = 'update students set name = $2 where id = $1' 
const createStudentQuery = 'insert into students (name, email, age, dob) values($1, $2, $3, $4)'
const deleteStudentQuery = 'delete from students where id = $1'


module.exports = {
    getStudentsQuery,
    createStudentQuery,
    deleteStudentQuery,
    getStudentByIDQuery,
    updateStudentQuery
} 
