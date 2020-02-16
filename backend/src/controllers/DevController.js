const axios = require('axios')

module.exports = {
   
    async store( req, res){
        const name = "wilsonazer"
        const response = await axios.get(`https://api.github.com/users/${ name }`)

        const { name: user , location, bio } =  response.data

        res.json( {
            user,
            location,
            bio
        } )
    }
}