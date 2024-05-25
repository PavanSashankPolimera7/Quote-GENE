let quoteList=[
    {
        quote:"Lives of great men all remind us We can make our lives sublime, And, departing, leave behind us Footprints on the sands of time.",
        author:"Henry Wadsworth Longfellow"
    },

    {
        quote:"The happiest man is he who learns from nature the lesson of worship.",
        author:"Ralph Waldo Emerson"
    },

    {
        quote:"There are two days about which nobody should ever worry, and these are yesterday and tomorrow.",
        author:"Robert Jones Burdette"
    },

    {
        quote:"In a friend you find a second self.",
        author:"Isabelle Norto"
    },

    {
        quote:"Life holds so much, so much to be happy about always. Most people ask for happiness on condition. Happiness can be felt only if you don't set any conditions.",
        author:"Artur Rubinstein"
    },

    {
        quote:"Avarice is as destitute of what it has as poverty is of what it has not.",        
        author:"Publilius Syrus"
    },

    {
        quote:"We act as though comfort and luxury were the chief requirements of life, when all that we need to make us really happy is something to be enthusiastic about.",
        author:"Charles Kingsley"
    },

    {
        quote:"Skilled labor teaches something not to be found in books or in colleges.",
        author:"Laura Towne"
    },

    {
        quote:"The most lasting reputation I have is for an almost ferocious aggressiveness, when in fact I am amiable, indulgent, affectionate, shy and rather timid at heart.",
        author:"J. B. Priestley"
    },

    {
        quote:"I am not the smartest or most talented person in the world, but I succeeded because I keep going, and going, and going.",
        author:"Sylvester Stallone"
    },
]
let quoteEle=document.getElementById("quote")
let authorEle=document.getElementById("author")


function getLocalQuotes(){
    let i=Math.floor(Math.random()*quoteList.length)
    quoteEle.innerText=quoteList[i].quote
    authorEle.innerText="--"+"  "+quoteList[i].author
}
document.getElementById("get-Quote").onclick=getLocalQuotes
