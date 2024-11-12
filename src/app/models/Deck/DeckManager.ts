import { Card } from '../Card/Card'
import { Deck } from './Deck'

export class DeckManager {
    private decks: Card[] = []

    constructor(public numberOfDecks: number) {
        this.generateDecks()
    }

    private generateDecks(): void {
        for (let i = 0; i < this.numberOfDecks; i++) {
            const deck = new Deck()
            this.decks.push(...deck.getCards())
        }
    }

    getDecks(): Card[] {
        return this.decks
    }

    shuffle(): void {
        // Fisher-Yates Shuffle
        for (let i = this.decks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[this.decks[i], this.decks[j]] = [this.decks[j], this.decks[i]]
        }
    }

    drawCard(): Card | null {
        return this.decks.length > 0 ? this.decks.shift()! : null
    }
}
