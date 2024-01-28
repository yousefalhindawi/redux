import { BUY_PLANE } from "./plane.constants";

const buyPlane = (payload) => {
  return { type: BUY_PLANE, payload };
};

export { buyPlane };
