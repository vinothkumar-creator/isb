# ISB Educational Platform

A production-ready React Native application built with a **single codebase** for **Android, iOS, and Web**, following **MVVM (Model-View-ViewModel)** architecture.

## 📋 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Path Aliases](#path-aliases)
- [MVVM Pattern](#mvvm-pattern)
- [Theming](#theming)
- [Navigation](#navigation)
- [Scripts](#scripts)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)

##  Features

- ✅ **Single Codebase** - One codebase for Android, iOS, and Web
- ✅ **MVVM Architecture** - Clean separation of concerns
- ✅ **TypeScript** - Full type safety
- ✅ **React Navigation** - Robust navigation system
- ✅ **Theming** - Light/Dark mode support
- ✅ **Code Quality** - ESLint + Prettier configured
- ✅ **Path Aliases** - Clean imports with `@components`, `@screens`, etc.
- ✅ **Production Ready** - Scalable folder structure

##  Architecture

### MVVM Pattern

This project follows the **Model-View-ViewModel (MVVM)** architecture pattern:

- **Model** (`src/api`, `src/services`, `src/store`): Data layer, business logic, and state management
- **View** (`src/screens`, `src/components`): Presentation layer, UI components
- **ViewModel** (`src/hooks`, `src/utils`): Logic layer, connects View to Model

### Folder Structure

```
isb/
├── android/                 # Android native code
├── ios/                     # iOS native code
├── public/                  # Public web assets
│   └── index.html
├── src/
│   ├── api/                 # API client & network layer (Model)
│   │   ├── client.ts
│   │   ├── types.ts
│   │   └── index.ts
│   ├── assets/              # Images, fonts, icons
│   ├── components/           # Shared UI components (View)
│   │   ├── CourseCard.tsx
│   │   ├── ExploreCourses.tsx
│   │   └── index.ts
│   ├── constants/           # Colors, fonts, spacing, configs
│   │   ├── theme.ts
│   │   └── index.ts
│   ├── hooks/               # Custom hooks (ViewModel)
│   │   ├── useTheme.ts
│   │   └── index.ts
│   ├── navigation/          # React Navigation setup
│   │   ├── AppNavigator.tsx
│   │   ├── types.ts
│   │   └── index.ts
│   ├── screens/             # Screen components (View)
│   │   ├── HomeScreen.tsx
│   │   ├── AboutScreen.tsx
│   │   ├── ExploreCoursesScreen.tsx
│   │   └── index.ts
│   ├── services/            # Business logic (Model)
│   │   ├── CourseService.ts
│   │   └── index.ts
│   ├── store/               # Global state (Model)
│   │   ├── useAppStore.tsx
│   │   └── index.ts
│   ├── utils/               # Helper functions (ViewModel)
│   │   ├── formatting.ts
│   │   ├── validation.ts
│   │   └── index.ts
│   └── AppNavigator.tsx     # Main navigator (legacy - use src/navigation)
├── App.tsx                  # Root component
├── index.js                 # Entry point (Android/iOS)
├── index.web.js             # Entry point (Web)
├── webpack.config.js         # Webpack config for web builds
├── babel.config.js          # Babel config with path aliases
├── tsconfig.json            # TypeScript config
├── .eslintrc.js             # ESLint config
├── .prettierrc              # Prettier config
└── package.json
```

## 🛠️ Tech Stack

- **React Native** 0.82.1
- **React** 19.1.1
- **React Native Web** 0.19.13
- **TypeScript** 5.8.3
- **React Navigation** 6.1.18
- **Webpack** 5.96.1
- **Babel** with module-resolver
- **ESLint** + **Prettier**

##  Prerequisites

- **Node.js** >= 20
- **npm** or **yarn**
- For iOS: **Xcode** and **CocoaPods**
- For Android: **Android Studio** and **JDK**
- For Web: Modern browser

##  Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd isb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

##  Running the App

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Web

```bash
npm run web
```

The web app will be available at `http://localhost:3000`

### Metro Bundler

```bash
npm start
```

## 🔗 Path Aliases

The project uses path aliases for cleaner imports:

```typescript
// Instead of
import { CourseCard } from '../../../components/CourseCard';

// Use
import { CourseCard } from '@components/CourseCard';
```

### Available Aliases

- `@api` → `src/api`
- `@assets` → `src/assets`
- `@components` → `src/components`
- `@constants` → `src/constants`
- `@hooks` → `src/hooks`
- `@navigation` → `src/navigation`
- `@screens` → `src/screens`
- `@services` → `src/services`
- `@store` → `src/store`
- `@utils` → `src/utils`

##  Theming

The app supports light and dark themes automatically based on system preferences.

### Usage

```typescript
import { useTheme } from '@hooks/useTheme';
import { Colors, Spacing, Typography } from '@constants/theme';

const MyComponent = () => {
  const { colors, isDark } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Hello</Text>
    </View>
  );
};
```

## 🧭 Navigation

Navigation is set up using React Navigation v6 with Stack Navigator.

### Adding a New Screen

1. Create screen component in `src/screens/`
2. Add route type in `src/navigation/types.ts`
3. Add screen to `AppNavigator.tsx`

Example:

```typescript
// src/navigation/types.ts
export type RootStackParamList = {
  Home: undefined;
  NewScreen: { param1: string }; // with params
};

// src/navigation/AppNavigator.tsx
<Stack.Screen
  name="NewScreen"
  component={NewScreen}
  options={{ title: 'New Screen' }}
/>
```

##  Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Metro bundler |
| `npm run android` | Run Android app |
| `npm run ios` | Run iOS app |
| `npm run web` | Start web dev server |
| `npm run build-web` | Build web for production |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |

## 🏭 Building for Production

### Android

```bash
cd android
./gradlew assembleRelease
```

### iOS

1. Open `ios/isb.xcworkspace` in Xcode
2. Select "Any iOS Device" or specific device
3. Product → Archive

### Web

```bash
npm run build-web
```

Output will be in `web-build/` directory.

## 📝 Code Quality

### ESLint

```bash
npm run lint
```

### Prettier

Format code automatically on save (configure in your IDE) or:

```bash
npx prettier --write "src/**/*.{ts,tsx}"
```

##  Testing

```bash
npm test
```

##  Contributing

1. Create a feature branch
2. Make your changes
3. Ensure code passes linting and tests
4. Submit a pull request

##  License

[Add your license here]

##  Authors

[Add authors here]

##  Acknowledgments

- React Native Team
- React Navigation Team
- React Native Web Contributors

---

**Built with ❤️ using React Native**
