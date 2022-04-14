const hashtag = {
    name: "#selfieforchan",
    tweetDestacado: {
        userName: "@Kent_girl17",
        comments: 3,
        retweets: 525,
        likes: 3035
    },
    masResiente: {
        userName: "@WalyRiot",
        comments: 0,
        retweets: 0,
        likes: 0
    },

    getInfoDestacado() {
        return `El usuario con el tweet mas destacado del hashtag ${this.name} es: ${this.tweetDestacado.userName}`
    },

    getInfomasResiente() {
        return `El usuario con el tweet mas resiente con el hashtag ${this.name} es: ${this.masResiente.userName}`
    }

}

console.log(hashtag.getInfoDestacado());
console.log(hashtag.getInfomasResiente());