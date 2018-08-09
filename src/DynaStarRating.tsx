import * as React from "react";
import {DynaSvg} from "dyna-svg";
import {dynaClassName} from "dyna-class-name";
import {EFormControlMode} from "dyna-interfaces";
import {round} from "./utils";

const starIcon: string = require('./star-solid.svg');
import "./DynaStarRating.less";

export enum EColor {
	YELLOW = "YELLOW",
	BLACK = "BLACK",
	GREEN = "GREEN",
	BLUE = "BLUE",
	RED = "RED",
}

export interface IDynaStarRatingProps {
	color?: EColor;
	mode?: EFormControlMode;    // default is view
	starsCount?: number;        // default is 5
	ratesCount?: number;        // default is null
	value: number;              // default is null, how many stars is the rate, max = starsCount, value might have decimal points (i.e.: 3.45)
	showNumber?: boolean;       // default is true
	numberPrecision?: number;   // default is 1 decimal point
	allowNull?: boolean;        // default is false, clicking on the same number of star, the value is set to null and no star is selected
	onChange?: (value: number) => void;  // the value is integer, is the number of the star
	// to set the size, set the font-size
}

export interface IDynaStarRatingState {
	size: number;
}

export class DynaStarRating extends React.Component<IDynaStarRatingProps, IDynaStarRatingState> {
	static defaultProps: IDynaStarRatingProps = {
		color: EColor.YELLOW,
		mode: EFormControlMode.VIEW,
		showNumber: true,
		numberPrecision: 1,
		allowNull: false,
		starsCount: 5,
		ratesCount: null,
		value: null,
		onChange: (value: number) => undefined,
	};

	constructor(props: IDynaStarRatingProps) {
		super(props);
		this.state = {
			size: 0,
		};
	}

	public refs: { container: HTMLDivElement };

	public componentDidMount(): void {
		this.setState({
			size: parseInt(getComputedStyle(this.refs.container).fontSize)
		});
	}

	private readonly className = dynaClassName("dyna-star-rating");

	private handleStarClick(userValue: number): void {
		const {value, allowNull, onChange} = this.props;
		if (allowNull &&  userValue === value) userValue = null;
		onChange(userValue);
	}

	private renderStars(className: string): JSX.Element {
		const {starsCount, mode, value} = this.props;
		const {size} = this.state;
		const frontStars: boolean = className === "__front";
		let starsContinerWidth: string = "";
		if (frontStars) starsContinerWidth = round(((value || 0) * size), mode === EFormControlMode.EDIT ? 0 : 3).toString() + "px";

		return (
			<div
				className={this.className("__stars", className)}
				style={{width: starsContinerWidth}}
			>
				{Array(starsCount).fill(null).map((v: any, index: number) => (
					<DynaSvg
						className={this.className("__star")}
						key={index}
						src={starIcon}
						style={{width: `${size}px`, height: `${size}px`}}
						onClick={this.handleStarClick.bind(this, index + 1)}
					/>
				))}
			</div>
		);
	}

	private renderNumber(): JSX.Element {
		const {
			showNumber,
			numberPrecision,
			value,
		} = this.props;

		if (!showNumber) return null;
		if (value === null) return null;

		return (
			<span className={this.className("__number")}> {round(value, numberPrecision).toString()}</span>
		);
	}
	private renderRatesCount(): JSX.Element {
		const {
			showNumber,
			ratesCount,
		} = this.props;

		if (!showNumber) return null;
		if (ratesCount === null) return null;

		return (
			<span className={this.className("__rates-count")}> ({ratesCount})</span>
		);
	}

	public render(): JSX.Element {
		const {
			mode, color,
		} = this.props;
		const {
			size,
		} = this.state;

		const className: string = this.className(` --mode-${mode} --color-${color}`);

		return (
			<div
				className={className}
				ref="container"
				style={{height: `${size}px`}}
			>
				{this.renderStars("__back")}
				{this.renderStars("__front")}
				{this.renderNumber()}
				{this.renderRatesCount()}
			</div>
		);
	}
}
