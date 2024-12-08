# Tiko ToDoList Task

![Simulator Screenshot - iPhone 12 - 18 - 2024-12-08 at 14 29 29](https://github.com/user-attachments/assets/6f2a613c-fc2b-4e62-8725-6407b1667ad3)
![Simulator Screenshot - iPhone 12 - 18 - 2024-12-08 at 14 29 42](https://github.com/user-attachments/assets/913a970c-dc91-461d-beb5-8d37a97a9991)
![Simulator Screenshot - iPhone 12 - 18 - 2024-12-08 at 14 30 07](https://github.com/user-attachments/assets/fde93a90-98d0-49b8-92c4-a18e1b19eb9e)
![Simulator Screenshot - iPhone 12 - 18 - 2024-12-08 at 15 10 18](https://github.com/user-attachments/assets/507e55f3-23fb-4a2d-a913-0030125af31e)
![Simulator Screenshot - iPhone 12 - 18 - 2024-12-08 at 15 51 54](https://github.com/user-attachments/assets/e35a7954-4439-4cd8-9768-06fef8e1a66a)



## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Introduction

ToDoList is a React Native application that allows users to manage their to-do list with features like adding, editing, and deleting tasks.

## Prerequisites

- **Node.js** version 18 or higher.
- **npm** (comes with Node.js) or **Yarn** package manager.
- **Java Development Kit (JDK)** for Android development.
- **Xcode** for iOS development (macOS only).
- **CocoaPods** for managing iOS dependencies (macOS only).

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd tikoToDoListChallenge
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   # or if you use Yarn
   yarn install
   ```

3. **Install iOS dependencies:**
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the Project

1. **Start the Metro bundler:**

   ```bash
   npm start
   # or if you use Yarn
   yarn start
   ```

2. **Run the application:**
   - For Android:
     ```bash
     npm run android
     # or if you use Yarn
     yarn android
     ```
   - For iOS:
     ```bash
     npm run ios
     # or if you use Yarn
     yarn ios
     ```
3. **Create an .env file with API_BASE_URL in the root folder**

## Scripts

- `npm start` / `yarn start`: Start the Metro bundler.
- `npm run android` / `yarn android`: Run the application on an Android device or emulator.
- `npm run ios` / `yarn ios`: Run the application on an iOS device or simulator.
- `npm run test` / `yarn test`: Run the test suite.

## Features

- Registration with BE side validation
- LogIn/LogOut functionality
- Add new tasks to the to-do list.
- Edit existing tasks.
- Delete tasks from the to-do list.
- Responsive design for both Android and iOS.

## Technologies Used

- **React Native**: Framework for building native apps using React.
- **MobX**: State management library.
- **Axios**: Promise-based HTTP client for making API requests.
- **@gorhom/bottom-sheet**: Bottom sheet component for React Native.
- **react-native-reanimated**: Library for animations in React Native.
- **react-hook-form**: Library for managing form state.
