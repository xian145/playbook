const trendingTopic = {
    trendingFrom: "Mexico",
    numberOfTrendings: 30,
    trendingNumberOne: "#selfiesforchan",
    trendingNumberTwo: "Elon Musk",
    numbersOfTweets: "28.3K",

    getTrendingOne() {
        return `La tendencia numero uno en ${this.trendingFrom} es ${this.trendingNumberOne} con ${this.numbersOfTweets} tweets relacionados`
    },

    getSecond() {
        return `La segunda tendencia en ${this.trendingFrom} es ${this.trendingNumberTwo}`
    }
}

console.log(trendingTopic.getTrendingOne());
console.log(trendingTopic.getSecond());