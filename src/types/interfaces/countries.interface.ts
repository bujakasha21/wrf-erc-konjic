import { MotionValue } from "framer-motion";

export interface ColumnProps {
  start: number;
  end: number;
  countryCodes: string[];
  motionValue: MotionValue;
}

export type Transforms = {
  [key: `y${number}`]: MotionValue;
};
