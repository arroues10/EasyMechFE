import { WorkCard } from './workCard';

export class Part {

    public constructor(
        public id?: number,
        public name?: string,
        public originalPrice?: number,
        public replacementPrice?: number,
        public work_card_plate_number?: string
    ) { }
}