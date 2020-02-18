const Dev = require('../models/DevModel')

module.exports = {
    async store( req, res ){
        const  { user } = req.headers
        const { dev_id } =  req.params

        const loggedDev = await Dev.findById( user )
        const targetDev = await Dev.findById( dev_id )

        if( !targetDev ){
            return res.status(400).json({ erro :'dev not exist'})
        }

       return res.json({  targetDev })

    }
}