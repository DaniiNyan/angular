export class Attempt {
    constructor(
        public isFull: boolean,
        public urlFullHeart: string = 'assets/full_heart.png',
        public urlEmptyHeart: string = 'assets/empty_heart.png'
    ) {}

    get url() {
        if (this.isFull) {
            return this.urlFullHeart;
        }
        return this.urlEmptyHeart;
    }
}