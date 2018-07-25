# About

Star rating component in react.

Written in typescript runs everywhere.

# Demo

`npm start`

# Props

```
interface IDynaStarRatingProps {
	value: number;                          // (required) default is null, how many stars is the rate, max = starsCount, value might have decimal points (i.e.: 3.45)
	onChange?: (value: number) => void;     // (optional) the value is integer, is the number of the clicked star, onChange is working only when you set the `mode` to `EDIT` (see the `mode` prop)
	
    className?: string;                     // (optional) set a classname is order to style the component
	color?: EColor;             // (optional) default is EColor.YELLOW
	mode?: EFormControlMode;    // (optional) default is VIEW, EFormControlMode.EDIT or EFormControlMode.VIEW
	starsCount?: number;        // (optional) default is 5, how may stars to show (what't the max value)
	showNumber?: boolean;       // (optional) default is true, show number at the right of the stars.
	numberPrecision?: number;   // (optional) default is 1 decimal point
	allowNull?: boolean;        // (optional) default is false, clicking on the same number of star, the value is set to null and no star is selected
}

```

# Size

To adjust the size of the stars, set the `font-size` via css class name on the component.

The set `font-size` is applied on both `stars` and `number` of start.

To adjust the color of the `number` set the `color` with the same way.