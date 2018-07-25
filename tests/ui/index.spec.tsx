import "jest";

import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaStarRating} from '../../src';

describe('Home', () => {
	let wrapper;

	it('has expected content with deep render', () => {
		wrapper = enzyme.shallow(
			(
				<DynaStarRating
					value={3}
					onChange={(value: number) => console.log('clicked value', value)}
				/>
			),
			{}
		);
		expect(wrapper).toMatchSnapshot();
	});
});
