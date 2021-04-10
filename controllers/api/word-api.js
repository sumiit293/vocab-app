const {axiosRequest} = require("./../../config/axiosRequest");
const WordMeaning = require("./../../models/WordMeaning");

exports.searchWord = async (req,res)=>{
    if(!req.params.word){
        return res.status(500).json({error: "Must contains searching word"});
    }
    try {
        let _id = '';
        let lexicalCategory = [];
        let etymologies = [];
        let senses = [];
        const response = await axiosRequest("GET",req.params.word);

        _id = response.data.results[0]['id'];

        response.data.results
                        .map((result)=>result['lexicalEntries']
                        .map((item)=> {lexicalCategory .unshift(item['lexicalCategory'].id)}));

        response.data.results
                        .map((result)=>!!result['lexicalEntries'] && result['lexicalEntries']
                        .map((item)=> !!item['entries'] && item['entries']
                        .map((entry)=>!!entry['etymologies'] && entry['etymologies']
                        .map((etymologie)=>etymologies.push(etymologie)))));

        response.data.results
                        .map((result)=>!!result['lexicalEntries'] && result['lexicalEntries']
                        .map((item)=> !!item['entries'] && item['entries']
                        .map((entry)=>!!entry['senses'] && entry['senses']
                        .map((sense)=>  { senses.unshift({def: !!sense['definitions']?sense['definitions'][0]: null, example: !!sense['examples'] ? sense['examples'][0]['text']: null})}))));

        const newWM = new WordMeaning({_id,lexicalCategory,etymologies,senses});
        await newWM.save();
        return await res.json({info: newWM});
    } catch (error) {
       if(error.response && error.response.statusText){
           return await res.status(500).json({error: "Not word found"});
       }else{
           console.log(error);
            return await res.status(500).json({error: "Something went wrong"});
       }
    }
}

exports.getAllWord = async (req,res)=>{
    try {
        const response = await (await WordMeaning.find({})).reverse();
        res.json({list: response});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }
}