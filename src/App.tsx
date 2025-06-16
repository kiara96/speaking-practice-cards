import { useState } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import { PracticeCard } from './components/PracticeCard'
import { practiceCards, type PracticeCard as PracticeCardType } from './data/cards'

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f0f2f5;
  padding: 20px;
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`

const Title = styled.h1`
  color: #2c3e50;
  margin: 0;
`

const Subtitle = styled.p`
  color: #7f8c8d;
  margin: 10px 0 0;
`

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [cards, setCards] = useState<PracticeCardType[]>(practiceCards)

  const handleSwipeLeft = () => {
    setCurrentCardIndex((prev) => (prev + 1) % cards.length)
  }

  const handleSwipeUp = () => {
    setCurrentCardIndex((prev) => (prev + 1) % cards.length)
  }

  const handleSentenceComplete = (sentenceIndex: number) => {
    setCards(prevCards => {
      return prevCards.map((card, cardIndex) => {
        if (cardIndex === currentCardIndex) {
          return {
            ...card,
            sentences: card.sentences.map((sentence, index) => {
              if (index === sentenceIndex) {
                return {
                  ...sentence,
                  completed: !sentence.completed
                }
              }
              return sentence
            })
          }
        }
        return card
      })
    })
  }

  return (
    <AppContainer>
      <Header>
        <Title>Italian Practice Cards</Title>
        <Subtitle>Swipe left if too difficult, swipe up when done</Subtitle>
      </Header>

      <AnimatePresence mode="wait">
        <PracticeCard
          key={currentCardIndex}
          card={cards[currentCardIndex]}
          onSwipeLeft={handleSwipeLeft}
          onSwipeUp={handleSwipeUp}
          onSentenceComplete={handleSentenceComplete}
        />
      </AnimatePresence>
    </AppContainer>
  )
}

export default App
