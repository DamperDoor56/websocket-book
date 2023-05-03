export interface OrderbookState {
    market: string;
    rawBids: number[][];
    bids: number[][];
    maxTotalBids: number;
    rawAsks: number[][];
    asks: number[][];
    maxTotalAsks: number;
    groupingSize: number;
  }