let {people} = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        //people.push({id:})
        return res.status(401).json({success:false,msg:'Please privide name value'})
    }
    //console.log('Success');
    res.status(201).json({success:true,person:name})
}

const createPostmanPerson = (req,res)=>{
    const {name} = req.body
    if(name){
        return res
        .status(200)
        .send({success:true,data:[...people,name]})
    }
    //console.log(req.body);
    res.status(400).send('Please Provide Name')
}

const updatePerson = (req,res)=>{
    const {name} = req.body
    const {id} = req.params
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res
            .status(404)
            .json({success:false, msg:`No person with id ${id}`})
    }
    //console.log(req.body);
    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
   return res.status(200).send({success:true,data:newPerson})  
}

const deletePerson = (req,res)=>{
    const {id} = req.params
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:`No person with id ${id}`})
    }
    //console.log(req.body);
    const newPerson = people.filter((person)=>person.id !== Number(id))
    return res.status(200).send({success:true,data:newPerson})  
}
module.exports = {
    getPeople,
    createPerson,
    createPostmanPerson,
    updatePerson,
    deletePerson
}