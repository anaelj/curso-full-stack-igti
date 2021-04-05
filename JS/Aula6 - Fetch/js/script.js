fetch('https://api.github.com/users/anaelj').then(res => {
    res.json().then(data => {
        console.log(data);
    })
})