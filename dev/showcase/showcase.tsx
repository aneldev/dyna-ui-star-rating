import * as React from 'react';
import {faIcon, IShowcase, IShowcaseViewProps} from "dyna-showcase";
import {Logo} from "../logo";

import {
	DynaStarRating, IDynaStarRatingProps,
	EFormControlMode, EColor,
} from "../../src";

import "./showcase.less";

export default {
	logo: <Logo/>,
	views: [
		{
			slug: 'intro',
			faIconName: 'circle-o-notch',
			title: 'Introduction',
			center: true,
			component: (
				<div>
					<h3>dyna-ui-star-rating</h3>
				</div>
			),
		},
		{
			slug: 'sizes',
			faIconName: 'flask',
			title: 'rounded - white/black - sizes',
			center: true,
			component: (
				<DynaStarRating
					value={3}
					onChange={(value: number) => console.log('star pressed', value)}
				>dyna button</DynaStarRating>
			),
			wrapperStyle: {
			},
			props: [
				{
					slug: 'value-undefined-black',
					title: 'undefined black',
					props: {
						className: "main-rating",
						value: undefined,
						color: EColor.BLACK,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-null-black',
					title: 'null black',
					props: {
						value: null,
						color: EColor.BLACK,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-0-black',
					title: '0 black',
					props: {
						value: 0,
						color: EColor.BLACK,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-1-black',
					title: '1 black',
					props: {
						value: 1,
						color: EColor.BLACK,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-2-black',
					title: '2 blue',
					props: {
						value: 2,
						color: EColor.BLUE,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-3-red',
					title: '3 red',
					props: {
						value: 3,
						color: EColor.RED,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-4-green',
					title: '4 green',
					props: {
						value: 4,
						color: EColor.GREEN,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-5-yellow',
					title: '5 yellow',
					props: {
						value: 5,
						color: EColor.YELLOW,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-45-yellow',
					title: '4.5 yellow',
					props: {
						value: 4.5,
						color: EColor.YELLOW,
					} as IDynaStarRatingProps
				},
				{
					slug: 'value-45-yellow-rates-count',
					title: '4.5 yellow and rates count',
					props: {
						value: 4.5,
						ratesCount: 234,
						color: EColor.YELLOW,
					} as IDynaStarRatingProps
				},
			]
		},
		{
			slug: "interactive",
			title: "interactive",
			center: true,
			component: (() => {

				interface IMyAppState {
					rateValue: number;
				}

				class MyApp extends React.Component<{}, IMyAppState> {
					constructor(props: {}) {
						super(props);
						this.state = {
							rateValue: 3.5,
						}
					}

					public render(): JSX.Element {
						return (
							<DynaStarRating
								mode={EFormControlMode.EDIT}
								value={this.state.rateValue}
								onChange={(value:number)=>this.setState({rateValue: value})}
							/>
						);
					}
				}

				return <MyApp/>
			})()
		},
		{
			slug: "interactive-wit-null-values",
			title: "interactive with null value",
			center: true,
			component: (() => {

				interface IMyAppState {
					rateValue: number;
				}

				class MyApp extends React.Component<{}, IMyAppState> {
					constructor(props: {}) {
						super(props);
						this.state = {
							rateValue: 3.5,
						}
					}

					public render(): JSX.Element {
						return (
							<DynaStarRating
								mode={EFormControlMode.EDIT}
								allowNull
								value={this.state.rateValue}
								onChange={(value:number)=>this.setState({rateValue: value})}
							/>
						);
					}
				}

				return <MyApp/>
			})()
		},
		{
			slug: 'the-end',
			title: 'the end',
			description: 'Thank you',
			center: true,
			component: (
				<div style={{textAlign: 'center'}}>
					<h1>The end</h1>
					<div style={{fontSize: '20px'}}>
						<p><a href="https://github.com/aneldev/dyna-ui-star-rating">{faIcon('github')} Github</a></p>
						<p><a href="https://www.npmjs.com/package/dyna-ui-star-rating">{faIcon('square')} npm</a></p>
					</div>
				</div>
			),
		},
	]
}as IShowcase;
