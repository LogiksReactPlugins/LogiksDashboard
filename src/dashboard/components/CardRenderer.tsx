

import type { CardRendererProps } from "../Dashboard.types.js";

import NumberCard from "../dashcards/NumberCard.js";
import GridCard from "../dashcards/Grid.js";
import LogiksChart from "logiks-chart";


const CardRenderer = ({ cardConfig, methods = {}, sqlOpsUrls }: CardRendererProps) => {

  if (!cardConfig?.config?.type) return null;

console.log("cardConfig?.config.type",cardConfig?.config.type)
  switch (cardConfig?.config.type) {
    case "number": return <NumberCard cardConfig={cardConfig} methods={methods} sqlOpsUrls={sqlOpsUrls} />;
    case "grid": return <GridCard cardConfig={cardConfig} methods={methods} sqlOpsUrls={sqlOpsUrls} />;
    default:
      return <LogiksChart config={cardConfig} methods={methods} sqlOpsConfig={sqlOpsUrls} />;

  }
};

export default CardRenderer;