const user = {
userName:"@xian1455",
name: "Abraham Ariel Arizmendi Grijalva",
bio: "...",
city: "Hermosillo, Sonora",
birthday: "30/11/1992",
age: 29,
follows: 89,
followers: 37,

getuserNameandFollower() {
    return `El nombre del usuario es ${this.userName} y tiene ${this.followers} followers`
},

getname() {
    return `El propietario de la cuenta ${this.userName} se llama ${this.name}`
}

}

console.log(user.getname());
console.log(user.getuserNameandFollower());