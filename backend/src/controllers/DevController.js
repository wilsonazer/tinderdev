const axios = require('axios')
const Dev = require('../models/DevModel')

module.exports = {
    async store( req, res){
        const { username } =  req.body

        const devExists = await Dev.findOne( { user: username } )

        if( devExists){
           return res.json( devExists )
        }
        
        const response = await axios.get(`https://api.github.com/users/${ username }`)

        const { name, bio, avatar_url: avatar } =  response.data

        const dev = await Dev.create(
            {
                name,
                user: username,
                bio,
                avatar
            } 
        )

        res.json( dev )
    }
}