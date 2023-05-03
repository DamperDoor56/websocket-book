export enum OrderType {
    BIDS,
    ASKS
  }
  
export interface OrderBookProps {
    windowWidth: number;
    productId: string;
    isFeedKilled: boolean;
  }
  
export interface Delta {
    bids: number[][];
    asks: number[][];
  }
  