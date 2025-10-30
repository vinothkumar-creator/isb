// Web mock for react-native-gesture-handler
export const GestureHandlerRootView = ( { children, style } ) =>
{
    const React = require( 'react' );
    const { View } = require( 'react-native' );
    return React.createElement( View, { style }, children );
};

export default {
    GestureHandlerRootView,
};


