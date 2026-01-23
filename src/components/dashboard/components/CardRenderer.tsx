

import type { CardRendererProps } from "../Dashboard.types.js";

import NumberCard from "../dashcards/NumberCard.js";
import GridCard from "../dashcards/Grid.js";
import LogiksChart from "logiks-chart";


const CardRenderer = ({ cardConfig, methods = {}, sqlOpsUrls, module_refid }: CardRendererProps) => {

  if (!cardConfig?.config?.type) return null;

  switch (cardConfig?.config.type) {
    case "number": return <NumberCard module_refid={module_refid} cardConfig={cardConfig} methods={methods} sqlOpsUrls={sqlOpsUrls} />;
    case "grid": return <GridCard module_refid={module_refid} cardConfig={cardConfig} methods={methods} sqlOpsUrls={sqlOpsUrls} />;
    default:
      return <LogiksChart module_refid={module_refid} graph_config={cardConfig} methods={methods} sqlOpsConfig={sqlOpsUrls} />;

  }
};

export default CardRenderer;