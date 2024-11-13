'use client'
import { Button } from 'antd'
import { DeckManager } from './models/Deck/DeckManager'
import { useEffect, useRef, useState } from 'react'
import { Card } from './models/Card/Card'
import * as deck from '@letele/playing-cards'

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

    const Card = deck[`${drawnCard?.card}`]

    return (
        <div>
            <h1>Welcome to Count Master</h1>
            <h2>Decks in shoe: {decksInShoe.toFixed(2)}</h2>
            <h2>Cards left: {cardsLeft}</h2>
            <Button onClick={handleDrawCard}>Draw a card!</Button>
            <h2>
                Card drawn:{' '}
                {drawnCard?.card &&
                    `${drawnCard?.card} - Value:${drawnCard?.value}`}
            </h2>
            <Button onClick={handleReshuffle}>Reshuffle the Show</Button>
            <div>{drawnCard && <Card />}</div>
        </div>
    )
}
