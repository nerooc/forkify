import axios from 'axios';

async function getResults(query){
    try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        console.log(res);
    } catch(error){
        alert(error);
    }
}

getResults('pasta');

//http://forkify-api.herokuapp.com/
//https://forkify-api.herokuapp.com/api/get?rId=${this.id}