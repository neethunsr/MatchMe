document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'kurama',
            img: 'images/naruto.png'
        },
        {
            name: 'kurama',
            img: 'images/naruto.png'
        },
        {
            name: 'kakashi',
            img: 'images/kakashi.jpeg'
        },
        {
            name: 'kakashi',
            img: 'images/kakashi.jpeg'
        },
        {
            name: 'itachi',
            img: 'images/itachi.jpeg'
        },
        {
            name: 'itachi',
            img: 'images/itachi.jpeg'
        },
        {
            name: 'sakura',
            img: 'images/sakura.jpeg'
        },
        {
            name: 'sakura',
            img: 'images/sakura.jpeg'
        },
        {
            name: 'naruto',
            img: 'images/rasengaan.png'
        },
        {
            name: 'naruto',
            img: 'images/rasengaan.png'
        },
        {
            name: 'sasuke',
            img: 'images/sasuke.jpeg'
        },
        {
            name: 'sasuke',
            img: 'images/sasuke.jpeg'
        },
    ]

    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const displayScore = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //creating the board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'images/random.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const choiceOneId = cardsChosenId[0]
        const choiceTwoId = cardsChosenId[1]
        if(choiceOneId === choiceTwoId){
            alert('You chose the same card!')
            cards[choiceOneId].setAttribute('src','images/random.jpeg')
            cards[choiceTwoId].setAttribute('src','images/random.jpeg')
        }else if(cardsChosen[0] === cardsChosen[1]){
            alert('It\'s a match!')
            cards[choiceOneId].setAttribute('src', 'images/blank.png')
            cards[choiceTwoId].setAttribute('src', 'images/blank.png')
            cards[choiceOneId].removeEventListener('click', flipCard)
            cards[choiceTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }else{
            cards[choiceOneId].setAttribute('src','images/random.jpeg')
            cards[choiceTwoId].setAttribute('src','images/random.jpeg')
            alert('Oops! Try again! Believe It!')
        }
        cardsChosen = []
        cardsChosenId = []
        displayScore.textContent = cardsWon.length
        if(cardsWon.length == cardArray.length/2){
            displayScore.textContent = 'Yayy you MatchedMe!'
        }
    }
    

    //flip the card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img) //add img to card based on cardId
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})