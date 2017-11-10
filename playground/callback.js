console.log('Start');
var getUser = (id , callback) => {
    var user = {
        id : id,
        name: 'Abhinish'
    };
   setTimeout(() => {
       callback(user);
   },3000);
};

getUser(31 , (userObject) => {
    console.log(userObject);
});

console.log('End');