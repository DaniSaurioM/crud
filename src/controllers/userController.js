const controller ={};

controller.list =(req, res)=>{

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM users',(err,users)=>{
            if(err){
                res.json(err)
            }
            
            res.render('users',{
                data:users
            });
        });
    });
}

controller.save=(req,res)=>{
    const data=req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO users set ?',[data],(err, users)=>{
            console.log(users);
            res.redirect('/')
        })
    })
}
controller.edit=(req,res) =>{
    const {id}=req.params
    req.getConnection((err,conn)=>{
        req.getConnection((err,conn)=>{
            conn.query('SELECT * FROM users WHERE id = ?',[id],(err, users)=>{
                res.render('users_edit',{
                    data:users[0]
                })
            })
        }) 
    })

}
controller.update=(req,res) =>{
    const {id}=req.params
    const newUsers=req.body

    req.getConnection((err,conn)=>{
        req.getConnection((err,conn)=>{
            conn.query('UPDATE users set ? WHERE id = ?',[newUsers, id],(err, users)=>{
                res.redirect('/')
            })
        }) 
    })

}
controller.delete=(req,res)=>{
    const {id}=req.params
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM users WHERE id = ?',[id],(err, users)=>{
            res.redirect('/')
        })
    })
}

module.exports=controller