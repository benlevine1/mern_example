const students = ['Bob', 'Cathy', 'Doug', 'Emma', 'Frank', 'Grace'];

exports.getAll = (req, res)=>{

    res.send({
        success: true,
        students: students
    });
    }

    exports.getOne = (req, res)=>{
        const{student_id} = req.params;
        res.send({
            success: true,
            student: students[student_id]
        });
}