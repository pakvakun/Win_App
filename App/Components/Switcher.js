import React, {useState} from 'react';
import {Switch} from 'react-native-switch';
import {Colors} from '../src/Themes';

const Switcher = () => {
  const [switcherValue, setSwitcherValue] = useState(false);

  return (
    <Switch
      value={switcherValue}
      onValueChange={(val) => setSwitcherValue(val)}
      disabled={false}
      // activeText={'On'}
      // inActiveText={'Off'}
      circleSize={17}
      barHeight={11}
      circleBorderWidth={0}
      backgroundActive={Colors.lightBlue}
      backgroundInactive={Colors.grey}
      circleActiveColor={Colors.blue}
      circleInActiveColor={Colors.darkGrey}
      changeValueImmediately={true}
      innerCircleStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }} // style for inner animated circle for what you (may) be rendering inside the circle
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
      switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
      switchWidthMultiplier={1.18} // multipled by the `circleSize` prop to calculate total width of the Switch
      switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
    />
  );
};

export default Switcher;
