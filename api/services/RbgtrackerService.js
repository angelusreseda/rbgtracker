module.exports = {
        /**
         * Method: getMyInfo
         * @return json
         * returns Gets authenticated user profile
         */
        getMyInfo: function(headers, parameters, callback) {
                var url = sails.config.rbgtracker.baseUrl;            
				
				var params = [				
					{
						part:'ARENA_BRACKET_RBG'	
					}						
				];

				var postHeader={
					'User-Agent': headers.host,
					'Accept':'application/json',
					'Authorization':headers.authorization // pass authorization header received in request
                };
                RequestService.getData(url, postHeader, params, callback);
        },
}