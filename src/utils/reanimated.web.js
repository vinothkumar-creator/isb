// Web mock for react-native-reanimated
const React = require( 'react' );
const RN = require( 'react-native' );

const reanimatedMock = {
    View: RN.View,
    Text: RN.Text,
    ScrollView: RN.ScrollView,
    FlatList: RN.FlatList,
    createAnimatedComponent: ( component ) => component,
    useSharedValue: ( value ) => ( { value } ),
    useAnimatedStyle: () => ( {} ),
    useAnimatedGestureHandler: () => ( {} ),
    useAnimatedReaction: () => { },
    useDerivedValue: ( callback ) => ( { value: callback() } ),
    withTiming: ( value ) => value,
    withSpring: ( value ) => value,
    withRepeat: ( value ) => value,
    withSequence: ( ...values ) => values[ values.length - 1 ],
    Easing: {
        linear: () => { },
        ease: () => { },
        quad: () => { },
        cubic: () => { },
        poly: () => { },
        sin: () => { },
        circle: () => { },
        exp: () => { },
        elastic: () => { },
        back: () => { },
        bounce: () => { },
        bezier: () => { },
        in: () => { },
        out: () => { },
        inOut: () => { },
    },
    runOnJS: ( fn ) => fn,
    runOnUI: ( fn ) => fn,
};

module.exports = reanimatedMock;
module.exports.default = reanimatedMock;

