import * as React from "react";
import { EFormControlMode } from "dyna-interfaces";
import "./DynaStarRating.less";
export declare enum EColor {
    YELLOW = "YELLOW",
    BLACK = "BLACK",
    GREEN = "GREEN",
    BLUE = "BLUE",
    RED = "RED"
}
export interface IDynaStarRatingProps {
    color?: EColor;
    mode?: EFormControlMode;
    starsCount?: number;
    ratesCount?: number;
    value: number;
    showNumber?: boolean;
    numberPrecision?: number;
    allowNull?: boolean;
    onChange?: (value: number) => void;
}
export interface IDynaStarRatingState {
    size: number;
}
export declare class DynaStarRating extends React.Component<IDynaStarRatingProps, IDynaStarRatingState> {
    static defaultProps: IDynaStarRatingProps;
    constructor(props: IDynaStarRatingProps);
    refs: {
        container: HTMLDivElement;
    };
    componentDidMount(): void;
    private readonly className;
    private handleStarClick;
    private renderStars;
    private renderNumber;
    private renderRatesCount;
    render(): JSX.Element;
}
