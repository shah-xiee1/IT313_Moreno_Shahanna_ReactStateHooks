# IT 313 – React State and Hooks

## Lab Timer & Practice Tracker

This project is a small React Native application created for Laboratory 5 in IT 313 – Mobile Programming. It helps students track the number of laboratory practice problems they have solved and the amount of time they have been working.

## Problem

The application needs to provide two main functions:

- Track the number of practice problems solved.
- Track how long the student has been working.

The practice counter can be increased using the Solve +1 button and returned to zero using the Reset button. The stopwatch can be started and stopped independently.

When the solved count reaches five, the application displays a "Great job!" message.

## Approach

The application uses React Native with Expo and applies several React concepts required by the laboratory activity.

### useState

`useState` is used in `LabScreen` to manage the solved count and the running state of the stopwatch.

The solved count starts at zero:

```tsx
const [solved, setSolved] = useState(0);
```

The stopwatch running state starts as false:

```tsx
const [isRunning, setIsRunning] = useState(false);
```

The Solve +1 action uses the functional update form:

```tsx
setSolved((s) => s + 1);
```

This updates the solved count based on its previous value.

### useEffect

`useEffect` is used inside the `useStopwatch` custom hook.

When the stopwatch is running, an interval is created that increases the seconds every 1000 milliseconds.

The effect depends on `isRunning`, so the interval is created or cleaned up when the running state changes.

### Cleanup Function

The stopwatch uses `clearInterval` inside the cleanup function:

```tsx
return () => {
  clearInterval(interval);
};
```

This prevents the interval from continuing to run when the stopwatch is stopped or when the component using the hook is unmounted.

### Custom Hook

The project contains a custom hook named:

```text
useStopwatch(isRunning)
```

The hook manages the stopwatch seconds and returns the current elapsed time to `LabScreen`.

### Conditional Rendering

Conditional rendering is used in two places.

First, the application displays:

```text
Great job!
```

when the solved count reaches five.

Second, the stopwatch displays either:

```text
Running...
```

or:

```text
Paused
```

depending on the value of `isRunning`.

### Event Handling

The application uses event handlers for:

- Solve +1
- Reset
- Start
- Stop

The handlers are passed as function references to the button `onPress` properties.

### Lifting State Up

`LabScreen` acts as the shared parent of `PracticeTracker` and `Stopwatch`.

The solved state and stopwatch running state are managed by `LabScreen`. The required information and callbacks are then passed to the child components through props.

This allows the two components to stay synchronized through their shared parent.

## Project Structure

```text
src
├── app
│   ├── _layout.tsx
│   └── index.tsx
│
└── components
    ├── PracticeTracker.tsx
    ├── Stopwatch.tsx
    └── useStopwatch.ts

README.md
package.json
```

### Main Files

**LabScreen (`index.tsx`)**

Owns the solved and stopwatch running states and connects the other components.

**PracticeTracker.tsx**

Displays the practice progress, Solve +1 and Reset controls, and the Great job message when the solved count reaches five.

**Stopwatch.tsx**

Displays the elapsed time and the current Running or Paused status.

**useStopwatch.ts**

Contains the custom stopwatch hook using `useState`, `useEffect`, `setInterval`, and the cleanup function.

## How to Run the App

### 1. Open the project

Open the project folder in VS Code.

### 2. Open the terminal

Make sure the terminal is inside the project folder.

### 3. Start Expo

Run:

```bash
npx expo start
```

### 4. Open the app in Expo Go

Scan the QR code displayed by Expo using the Expo Go application on your mobile device.

Make sure the computer and mobile device can connect to the same network.

## Expected Behavior

When the application starts:

- The solved count is 0.
- The stopwatch displays 00:00.
- The stopwatch status displays Paused.
- Solve +1, Reset, Start, and Stop controls are available.

When Solve +1 is pressed, the solved count increases by one.

When the solved count reaches five, "Great job!" appears.

When Reset is pressed, the solved count returns to zero without resetting the stopwatch.

When Start is pressed, the stopwatch begins counting every second and displays Running....

When Stop is pressed, the stopwatch stops at its current time and displays Paused.

## Technologies Used

- React Native
- Expo
- TypeScript
- React Hooks
- useState
- useEffect
- Custom Hooks

## Author

Name: [Your Name]

Section: [Your Section]

IT 313 – Mobile Programming
