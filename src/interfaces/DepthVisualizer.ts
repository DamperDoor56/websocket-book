import { OrderType } from "../interfaces/OrderBook";

export interface DepthVisualizerProps {
    depth: number;
    orderType: OrderType;
    windowWidth: number;
  }

export const DepthVisualizerColors = {
    BIDS: "#113534",
    ASKS: "#3d1e28"
  };