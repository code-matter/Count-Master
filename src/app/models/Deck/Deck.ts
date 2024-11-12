import { Rank, Suit } from '@/app/constants/cards/types'
import { Card } from '../Card/Card'

export class Deck {
    private cards: Card[] = []

    constructor() {
        this.initializeDeck()
    }

    private initializeDeck(): void {
        const suits: Suit[] = ['♠', '♣', '♦', '♥']
        const ranks: Rank[] = [
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'J',
            'Q',
            'K',
            'A',
        ]
        const valueMap: { [key in Rank]: -1 | 0 | 1 } = {
            '2': 1,
            '3': 1,
            '4': 1,
            '5': 1,
            '6': 1,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            J: -1,
            Q: -1,
            K: -1,
            A: -1,
        }

        for (const suit of suits) {
            for (const rank of ranks) {
                const cardString = `${rank}${suit}`
                const cardValue = valueMap[rank]
                this.cards.push({ card: cardString, value: cardValue })
            }
        }
    }

    getCards(): Card[] {
        return this.cards
    }
}
