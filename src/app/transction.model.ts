
export class Transction{
    public amount: number;
    public categoryCode: string;
    public merchant: string;
    public merchantLogo: string;
    public transactionDate: number;
    public transactionType: string

    constructor(amount: number, categoryCode: string, merchant: string, merchantLogo: string, transactionDate: number, transactionType: string){
        this.amount= amount;
        this.categoryCode= categoryCode;
        this.merchant= merchant;
        this.merchantLogo= merchantLogo;
        this.transactionDate= transactionDate;
        this.transactionType= transactionType;
    }
}