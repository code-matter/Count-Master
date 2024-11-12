'use client'
import { Button } from 'antd'
import { DeckManager } from './models/Deck/DeckManager'
import { useEffect, useRef, useState } from 'react'
import { Card } from './models/Card/Card'

export default function Home() {
    const [drawnCard, setDrawnCard] = useState<Card | null>(null)
    const deckManager = useRef(new DeckManager(5))
    const [cardsLeft, setCardsLeft] = useState<number>(
        deckManager.current.getDecks().length,
    )
    const [decksInShoe, setDecksInShoe] = useState<number>(
        deckManager.current.getDecks().length / 52,
    )

    useEffect(() => {
        deckManager.current.shuffle()

        return () => {
            setDrawnCard(null)
        }
    }, [])

    const handleDrawCard = () => {
        const card = deckManager.current.drawCard()
        setDrawnCard(card)
        setCardsLeft(deckManager.current.getDecks().length)
        setDecksInShoe(deckManager.current.getDecks().length / 52)
    }

    const handleReshuffle = () => {
        deckManager.current = new DeckManager(5)
        deckManager.current.shuffle()
        setCardsLeft(deckManager.current.getDecks().length)
        setDecksInShoe(deckManager.current.getDecks().length / 52)
        setDrawnCard(null)
    }

    return (
        <div>
            <h1>Decks in shoe: {decksInShoe.toFixed(2)}</h1>
            <h1>Cards left: {cardsLeft}</h1>
            <Button onClick={handleDrawCard}>Draw a card!</Button>
            <h1>
                Card drawn:{' '}
                {drawnCard?.card &&
                    `${drawnCard?.card} - Value:${drawnCard?.value}`}
            </h1>
            <Button onClick={handleReshuffle}>Reshuffle the Show</Button>
        </div>
    )
}
