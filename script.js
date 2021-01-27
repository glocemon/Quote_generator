var quotes = ["A beautiful, smart, and loving person will be coming into your life", 
    "A dubious friend may be an enemy in camouflage",
    "A faithful friend is a strong defense",
    "A feather in the hand is better than a bird in the air",
    "A fresh start will put you on your way",
    "A friend asks only for your time not your money",
    "A friend is a present you give yourself",
    "A gambler not only will lose what he has, but also will lose what he doesn’t have",
    "A golden egg of opportunity falls into your lap this month",
    "A good friendship is often more important than a passionate romance"];
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length)); 
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

     