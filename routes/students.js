
const express =require('express');
const student=require('../views/student')
const router=express.Router();


//get all student 
//  '/student' jaya min fichier lfih liste des student weli ismou student.js'
router.get('/student',(req,res)=>{
    res.json(student)
})
//get one student
router.get('/student/:id',(req,res)=>{
    let students=student.filter(el=>el.id===parseInt(req.params.id))
    if(students.length===0){
        res.json({msg:"we dont have any student with id ="+req.params.id})


    }else{
        res.json(students)
    }
   
})
//delete one student a laide dun id
router.delete('/student/:id',(req,res)=>{
    let students=student.filter(el=>el.id!==parseInt(req.params.id))
    res.json(students)
})
//add new student
//elemnt lbech nzidou  min front yetsajel fi req.body
router.post('/student',(req,res)=>{
   // res.send(req.body)===>hethi na3mlha wa9t lnheb nthabet 9a3ed na5ou fi fi les donner lijou min front
     res.send(student.concat(req.body))
})

// eddit des nouveau information
router.put('/student/:id',(req,res)=>{
    res.send(student.map(el=>el.id===parseInt(req.params.id) ? {...req.body,id:el.id}:el))
})




module.exports=router;

