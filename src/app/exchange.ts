export class Exchange {
    constructor(
        public currency: string,
        public startDate: Date = new Date(),
        public endDate: Date = new Date()
    ) { }
}