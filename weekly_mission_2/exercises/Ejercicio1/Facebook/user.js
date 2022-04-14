const user = {
    name: "Abraham Ariel Arizmendi Grijalva",
    userName: "abrahamariel145",
    numberFriends: 267,
    profilePhoto: true,
    relationship: true,
    Alias: "",
    birthday: "30/11/1992",

    getGeneralInfo() {
        return `El usuario ${this.userName} se llama ${this.name} y tiene ${this.numberFriends} amigos`
    }

}

console.log(user.getGeneralInfo());