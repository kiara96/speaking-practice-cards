import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import type { PracticeCard as PracticeCardType } from '../data/cards';

const COLORS = [
  '#EEEEEE', 
];

const getCardColor = (id: number) => COLORS[id % COLORS.length];

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 600px;
  overflow: hidden;
`;

const AdjacentCard = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  width: 60px;
  height: 90%;
  background: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${props => props.position === 'left' ? 'left: 0;' : 'right: 0;'}
  z-index: 1;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const CardContainer = styled(motion.div)`
  width: 95%;
  max-width: 800px;
  min-height: 500px;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  margin: 20px auto;
  position: relative;
  cursor: grab;
  z-index: 2;
`;

const Title = styled.h2`
  color: #1976d2;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  color:rgb(18, 129, 241);
  margin-bottom: 24px;
  margin-top: 32px;
  font-size: 1.1em;
`;

const Sentence = styled.div<{ completed: boolean; bgcolor: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background: ${props => props.bgcolor};
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${props => props.completed && `
    opacity: 0.7;
    text-decoration: line-through;
  `}
`;

const SentenceContent = styled.div<{ completed: boolean }>`
  flex: 1;
  color: #222;
  ${props => props.completed && `
    text-decoration: line-through;
    color: #666;
  `}
`;

const VocabularyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const Vocabulary = styled.div<{ bgcolor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  font-size: 0.95em;
  margin-bottom: 0;
  padding: 6px 8px;
  background: ${props => props.bgcolor};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #222;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Timer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2em;
  color: #2ecc71;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
`;

const ActionButton = styled.button<{ color: string; textcolor?: string }>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.color};
  color: ${props => props.textcolor || 'white'};
  font-size: 1.1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    opacity: 0.95;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const RolesSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 18px 0 18px 0;
`;

const RoleButton = styled(motion.button)`
  min-width: 60px;
  min-height: 32px;
  background: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95em;
  font-weight: 700;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  pointer-events: none;
  user-select: none;
  transition: all 0.2s ease;
  outline: none;
`;

interface PracticeCardProps {
  card: PracticeCardType;
  onSwipeLeft: () => void;
  onSwipeUp: () => void;
  onSentenceComplete: (sentenceIndex: number) => void;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  card,
  onSwipeLeft,
  onSwipeUp,
  onSentenceComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(7 * 60);
  const cardColor = getCardColor(card.id);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: onSwipeLeft,
    onSwipedUp: onSwipeUp,
    trackMouse: true,
  });

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <CardWrapper>
      <AdjacentCard 
        position="left" 
        onClick={onSwipeLeft}
        style={{ cursor: 'pointer' }}
      />
      <AnimatePresence mode="wait">
        <CardContainer
          key={card.id}
          {...handlers}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Timer>{formatTime(timeLeft)}</Timer>
          <Title>{card.title}</Title>

          <RolesSection>
            <RoleButton
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
              tabIndex={-1}
            >
              {card.roles[0]}
            </RoleButton>
            <RoleButton
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.25 }}
              tabIndex={-1}
            >
              {card.roles[1]}
            </RoleButton>
          </RolesSection>

          <Section>
            <SectionTitle>FRASI DA UTILIZZARE:</SectionTitle>
            {card.sentences.map((sentence, index) => (
              <Sentence 
                key={index} 
                completed={sentence.completed}
                bgcolor={cardColor}
              >
                <Checkbox
                  type="checkbox"
                  checked={sentence.completed}
                  onChange={() => onSentenceComplete(index)}
                />
                <SentenceContent completed={sentence.completed}>
                  <div>{sentence.text}</div>
                </SentenceContent>
              </Sentence>
            ))}
          </Section>

          <Section>
            <SectionTitle>PAROLE UTILI:</SectionTitle>
            <VocabularyGrid>
              {card.vocabulary.slice(0, 10).map((item, index) => (
                <Vocabulary 
                  key={index}
                  bgcolor={cardColor}
                >
                  <span>{item.word}</span>
                </Vocabulary>
              ))}
            </VocabularyGrid>
          </Section>

          <ButtonContainer>
            <ActionButton color="#fff" textcolor="#1976d2" onClick={onSwipeLeft}>
              <span role="img" aria-label="sweat"></span>
              MAGARI DOPO
            </ActionButton>
            <ActionButton color="#2ecc71" onClick={onSwipeUp}>
              <span role="img" aria-label="success"></span>
              FATTO!
            </ActionButton>
          </ButtonContainer>
        </CardContainer>
      </AnimatePresence>
      <AdjacentCard 
        position="right" 
        onClick={onSwipeLeft}
        style={{ cursor: 'pointer' }}
      />
    </CardWrapper>
  );
}; 