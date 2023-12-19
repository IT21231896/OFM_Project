const Bill = require('../Models/Bill');


exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { billno, item, quantity, price, totalprice,} = req.body;

    
    const bill = new Bill({
        billno,
        item,
        quantity,
        price,
        totalprice
        
    })
    
    bill.save()
        .then(() => {
            res.status(201).send({message : "Bill Registered Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while registering the bill"
            });
        });
}



//Retrieve and return all kit
exports.findAll = (req,res) => {
    Bill.find()
            .then(bill => {
                res.send(bill)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retrieving bill information" })
            })
}

//Retrieve and return a single kit
exports.findOne = (req,res) => {
    if(req.params.id){
        const id = req.params.id;

        Bill.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Bill not found with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving bill with id " + id})
            })
    }
}


exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Bill.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update bill with ${id}. Maybe bill not found!`})
            }else{
                res.status(201).send({message : "Bill details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating bill information"})
        })
}


exports.delete = (req,res) => {
    const id = req.params.id;

    Bill.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete bill with ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Bill details deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting bill with id = ${id}`});
        })
}