class hashtag { //creacion de la clase
    constructor(name, userName, comments, retweets, likes) {
        this.name = name,
        this.userName = userName,
        this.comments = comments,
        this.retweets = retweets,
        this.likes = likes
    }

    getInfoDestacado() {
        return `El usuario con el tweet mas destacado del hashtag ${this.name} es: ${this.tweetDestacado.userName}`
    }

}

class trending { //creacion de la clase
    constructor(trendingFrom, numberOfTrendings, trendingNumberOne, trendingNumberTwo, numbersOfTweets) {
        this.trendingFrom = trendingFrom,
        this.numberOfTrendings = numberOfTrendings,
        this.trendingNumberOne = trendingNumberOne,
        this.trendingNumberTwo = trendingNumberTwo,
        this.numbersOfTweets = numbersOfTweets
    }

    getTrendingOne() {
        return `La tendencia numero uno en ${this.trendingFrom} es ${this.trendingNumberOne} con ${this.numbersOfTweets} tweets relacionados`
    }

    getSecond() {
        return `La segunda tendencia en ${this.trendingFrom} es ${this.trendingNumberTwo}`
    }

}

class user { //creacion de la clase
    constructor(userName, name, bio, city, birthday, age, followers, follows) {
        this.userName = userName,
        this.name = name,
        this.bio = bio,
        this.city = city,
        this.birthday = birthday,
        this.age = age,
        this.followers = followers,
        this.follows = follows
    }

    getuserNameandFollower() {
        return `El nombre del usuario es ${this.userName} y tiene ${this.followers} followers`
    }
    
    getname() {
        return `El propietario de la cuenta ${this.userName} se llama ${this.name}`
    }

}
