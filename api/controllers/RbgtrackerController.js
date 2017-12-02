/**
 * RbgtrackerController
 *
 * @description :: Server-side logic for managing rbgtrackers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        rbgrating : function(req, res) {                
               
                console.log("Query Parameters: ", req.query);
                RbgtrackerService.getMyInfo(req.headers, req.query, function(err, response, data) {
                        if (err) {
                                return res.send(err)
                        };
						
						// Building object for LaMetric. We will return it
					
                        var responseObj={};
										
                        responseObj.frames=[];
					
                        var frame = {
                            'text': data.pvp.brackets.ARENA_BRACKET_RBG.rating,                      
                            'icon':'i14684',  
                            'index':0                          
                        };												

                        responseObj.frames.push(frame);
					
                        if (!data) {
                            console.log("Error: ", response.statusCode);
                            res.status(response.statusCode).send(response.body);
                        } else {
                            console.log("Response: ", responseObj);
                            return res.status(200).json(responseObj);
                        }					
					
                })
        },
};
