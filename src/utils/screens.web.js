// Web mock for react-native-screens
// This module needs to be disabled on web for React Navigation to work properly
const React = require( 'react' );
const { View, Text } = require( 'react-native' );

let screensEnabled = false;

// Mock components that React Navigation needs
const MaybeScreenContainer = ( { children, ...props } ) =>
{
    return React.createElement( View, props, children );
};

const MaybeScreen = ( { children, ...props } ) =>
{
    return React.createElement( View, props, children );
};

module.exports = {
    enableScreens: ( enable = true ) =>
    {
        screensEnabled = enable;
    },
    screensEnabled: () => screensEnabled,
    MaybeScreenContainer,
    MaybeScreen,
    Screen: View,
    ScreenContainer: View,
    NativeScreen: View,
    NativeScreenContainer: View,
};

