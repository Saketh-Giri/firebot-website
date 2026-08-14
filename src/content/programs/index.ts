import { business } from "./business";
import { frc } from "./frc";
import { ftc } from "./ftc";
import { marketing } from "./marketing";
import type { Program } from "./types";

export type { Program, Subteam } from "./types";
export { business, frc, ftc, marketing };

export const programs: Program[] = [frc, ftc, business, marketing];
