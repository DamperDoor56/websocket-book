import React, { FunctionComponent } from 'react';

import { MOBILE_WIDTH } from "../../constants";
import { OrderType } from "../../interfaces/OrderBook";
import { DepthVisualizerColors, DepthVisualizerProps } from '../../interfaces/DepthVisualizer';

const DepthVisualizer: FunctionComponent<DepthVisualizerProps> = ({windowWidth, depth, orderType }) => {
  return <div data-testid="depth-visualizer" style={{
    backgroundColor: `${orderType === OrderType.BIDS ? DepthVisualizerColors.BIDS : DepthVisualizerColors.ASKS}`,
    height: "1.250em",
    width: `${depth}%`,
    position: "relative",
    top: 21,
    left: `${orderType === OrderType.BIDS && windowWidth > MOBILE_WIDTH ? `${100 - depth}%` : 0}`,
    marginTop: -24,
    zIndex: 1,
  }} />;
};

export default DepthVisualizer;