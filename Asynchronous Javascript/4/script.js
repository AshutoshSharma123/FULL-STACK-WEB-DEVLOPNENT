// chained promises User->Post->Comments



function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Ashu" });
        }, 1000);
    })
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['great post', 'amazing post', 'awesome post']);
        }, 1000);
    })
}



function getComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['great comment', 'amazing comment', 'awesome comment']);
        }, 1000);
    })
}
getUser().then(function (data) {
    console.log(data);
    return getPosts(data.id);

}).then(function (titles) {
    console.log(titles);
    return getComments('A comment')
}).then(function (cmts) {
    console.log(cmts);
}).finally(() => {
    console.log('all data fetched');
})