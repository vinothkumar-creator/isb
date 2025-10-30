import { AppRegistry, Platform } from 'react-native';

// Disable react-native-screens for web (must be done before any navigation imports)
if ( Platform.OS === 'web' ) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { enableScreens } = require( 'react-native-screens' );
        if ( enableScreens ) {
            enableScreens( false );
        }
    } catch ( error ) {
        console.warn( 'Failed to disable react-native-screens:', error );
    }
}

import App from './App';
import { name as appName } from './app.json';

// Verify root element exists
const rootElement = document.getElementById( 'root' );
if ( !rootElement ) {
    console.error( 'Root element not found! Make sure index.html has <div id="root"></div>' );
}

// Register and run the application
try {
    AppRegistry.registerComponent( appName, () => App );

    AppRegistry.runApplication( appName, {
        initialProps: {},
        rootTag: rootElement,
    } );
} catch ( error ) {
    console.error( 'Failed to start application:', error );
}
