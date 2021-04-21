var axios = require('axios');
var data = JSON.stringify({"userId":"200028164","deviceNo":"M98V35PL6YW66I33","currPage":1,"pageSize":10});

var config = {
    method: 'get',
    url: 'http://api.tlink.io/api/device/getSingleDeviceDatas',
    headers: {
        'Authorization': 'Bearer 84d97b7c-db58-455f-87a7-82a4283a5675',
        'tlinkAppId': '15d5cc203396495e8056ab1747340861',
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
