import { Rank, Suit } from '@/app/constants/cards/types'
import { Card } from '../Card/Card'

export class Deck {
    private cards: Card[] = []

    constructor() {
        this.initializeDeck()
    }

    private initializeDeck(): void {
        const suits: Suit[] = ['S', 'C', 'D', 'H']
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
            'j',
            'q',
            'k',
            'a',
        ]
        const weightMap: { [key in Rank]: -1 | 0 | 1 } = {
            '2': 1,
            '3': 1,
            '4': 1,
            '5': 1,
            '6': 1,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            j: -1,
            q: -1,
            k: -1,
            a: -1,
        }
        const valueMap: { [key in Rank]: number } = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            j: 10,
            q: 10,
            k: 10,
            a: 10,
        }

        for (const suit of suits) {
            for (const rank of ranks) {
                const cardString = `${suit}${rank}`
                const cardWeight = weightMap[rank]
                const cardValue = valueMap[rank]
                this.cards.push({
                    card: cardString,
                    weight: cardWeight,
                    value: cardValue,
                })
            }
        }
    }

    getCards(): Card[] {
        return this.cards
    }
}
