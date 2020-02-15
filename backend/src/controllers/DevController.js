const axios = require('axios')

module.exports = {
   
    async store( req, res){
        const name = "wilsonazer"
        const response = await axios.get(`https://api.github.com/users/${ name }`)

        res.json( response.data )
    }
}