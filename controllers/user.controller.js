const people=require('../assets/people.json')
class UserControler{
    get(req,res){
        //return res.status(200).json("chao ban");
        const fifter=req.query.fifter;
        //console.log("fifter",fifter);
        const fifterPeople=people.filter(person=>person.first_name.includes(fifter));
        return res.status(200).json({data:fifterPeople,length:fifterPeople.length});
    }
    post(req,res){
        const fitter=req.body;
        console.log("fitter",fitter);
        return res.status(200).json({result:"chao ban"})
    }
}
module.exports=new UserControler();