// .this is used to refer current context ( kiske bare mai bat ho rhi hai )

const user = {
    username:"Gaurav",
    price:999,
    welcome: function(){
        console.log(this.username)
    }
}

user.welcome();