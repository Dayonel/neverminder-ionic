# Neverminder APP

Neverminder is an app that sends notifications for your plans.

## Installation

Install [Node](https://nodejs.org/en/download)

Install `ionic cli`
```
npm install -g @ionic/cli
```

Install capacitor android
```
npm install @capacitor/android
```

Install capacitor ios
```
npm install @capacitor/ios
```

## Firebase
Create a project in [Firebase](https://firebase.com/)

Create Android & iOS apps
	
Download files `google-services.json` and `GoogleService-Info.plist`.

## Setup
Add file `google-services.json` to `android/app/` folder.\
Add file `GoogleService-Info.plist` to `xcode/App/App` ensuring to add it to all targets.

## Build
```
ionic build
```

```
npx cap sync
```

```
npx cap copy
```

## Run

Android

```
npx cap open android
```

*Android localhost*

```
npx cap run android --livereload --external
```

iOS

```
npx cap open ios
```

*iOS localhost*

```
npx cap run ios --livereload --external
```

Finally run in `Android Studio` / `Xcode`

## Debug

Open `Android Studio`

Debug `app`

In `Vscode` go to `Run and Debug` shortcut `Ctrl + Shift + D`

Select `Attach to Android WebView` and choose your phone.

[Youtube](https://www.youtube.com/watch?v=akh6V6Yw1lw&t=1003s) video.

## Native Debug

For native, go to `Android studio` 

Navigate `capacitor-push-notifications` > `java` > `com.capacitorjs.plugins.pushnotifications` > `MessagingService` 

Add a breakpoint on `public void register(PluginCall call)` line `109`

In `Threads & Variables` panel below, inspect `task` variable value `zze` is the token.

## Adb

Make sure that `Android SDK Platform-Tools` is installed
> Tools > SDK Manager > Android SDK > SDK Tools (Tab)

Copy `adb.exe` path
> C:\Users\dayon\AppData\Local\Android\Sdk\platform-tools

Open `Environment Variables`, edit `Path`, add `adb.exe` path.

Finally restart cmd console & test it `adb`

## java.io.IOException: SERVICE_NOT_AVAILABLE

Enable wifi in your phone.
Go to `Settings` > `Date & time` enable `Set time automatically`

## Generate icon

```
npx @capacitor/assets generate --iconBackgroundColor "#201b1b" --iconBackgroundColorDark "#201b1b" --splashBackgroundColorDark "#201b1b" --logoSplashScale 0.4
```

Then adjust in `xcode/App/App/Assets/Splash` Light and Dark choices\
Then adjust in `xcode/App/App/Assets/LaunchScreen` Background -> System Background

## Add page

To add a page run

```
ionic g page pages/reminders
```

```
ionic g page pages/reminderDetails
```

## Add a component

To add a component run

```
ionic g component components/upcomingReminders
```

## Add service

To add a service run

```
ionic g service services/platform
```

## Add Tailwind CSS
Install Angular CLI (elevated permissions)
```
npm install -g @angular/cli
```

Install tailwind
```
ng add ngx-tailwind
```