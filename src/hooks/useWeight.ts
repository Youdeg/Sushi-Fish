import { useMemo } from "react";

export default function useWeight(weight: number) {
    const getWeightWithUnit = (weight: number): string => {
        if (weight < 1000) return weight + "гр";
        return Math.floor(weight / 1000) + "кг";
    }

    const weightWithUnit = useMemo(() => getWeightWithUnit(weight), [weight]);

    return weightWithUnit;
}