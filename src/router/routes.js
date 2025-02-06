const { Router } = require('express');
const { getStudents, 
    createStudent, 
    deleteStudent, 
    getStudentByID,
    updateStudent
} = require('../controller/controller.js');

const router = Router();

router.get("/", getStudents)
router.post("/new", createStudent)
router.get("/:id", getStudentByID)
router.patch("/update/", updateStudent)
router.delete("/delete/:id", deleteStudent)

module.exports = router;