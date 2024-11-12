// import { Rank, Suit } from '@/app/constants/cards/types'

// export class Card {
//     constructor(
//         public rank: Rank,
//         public suit: Suit,
//         public value: -1 | 0 | 1,
//     ) {}

//     toString(): string {
//         return `${this.rank}${this.suit}`
//     }
// }

export interface Card {
    card: string // e.g., 'K♣'
    value: -1 | 0 | 1 // The value of the card for counting purposes
}
