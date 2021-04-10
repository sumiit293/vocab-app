const axois = require("axios");

exports.axiosRequest = (method, word, data = null)=> {
    console.log("Called...");
    let URL = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=true`;
    return axois({
        method: method,
        url: URL,
        headers: {
            "app_id": process.env.app_id,
            "app_key": process.env.app_key,
            "Content-Type": "application/json"
        },
        data: data
    })
    .then((res) => res)
    .catch((err) => {
            throw err;
    });    
}