---
title: "Creating Flavors for Flutter App (VS Code & Android Studio)"
excerpt: "Learn how to setup separate targets for Dev, Staging and Production Environments in Flutter and add these configurations to IDEs to toggle between these targets with ease."
author: "Dinesh Kachhot"
publishedAt: "2025-04-04"
tags: ["Flutter", "Development", "Environment", "VS Code", "Android Studio", "Flavors", "Mobile Development"]
readTime: 8
imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*v909nakHVez_RXbX5RIyaA.jpeg"
externalUrl: "https://medium.com/flutter-community/add-multiple-targets-in-flutter-apps-vs-code-android-studio-efe7e588e0cd?source=user_profile_page---------2-------------8f3a77ee85b3----------------------"
---

# Creating Flavors for Flutter App (VS Code & Android Studio)

This article will teach you how to setup separate targets for Dev, Staging and Production Environments in Flutter and add these configurations to IDEs (VS Code and Android Studio) to toggle between these targets with **EASE**.

## Overview

Why do we need multiple targets? How to make it?

As a developer, we have to deal with multiple environments like those required to separate testing and production configurations. We need to have separate configurations like base url, configuration keys, app names, app icons, databases, etc. Most products follow two environments, "development" and "production". In some cases, staging and QA are used between development and production to ensure the expected outcome.

So common used environments are Development, {Staging, QA}, Production.

When starting with Flutter, one of the questions I asked myself was "how can I manage environment variable in Flutter like I am using in iOS".

As luck would have it, I found this stackoverflow answer by Seth Ladd, a Product Manager at Google, formerly of the Flutter team, now working on Fuchsia. I also found this blog which is only for Android Studio/IntelliJ.

Since VS Code is my editor of choice, I decided to write a similar article for VS.

My favorite Flutter IDE is VS Code and the following are my *personal* preferences:
- I am full-time iOS Developer 😎😉, so I don't mind to fresh start with VS Code
- VS Code is **fast** and **lightweight** (smooth operator), less memory usage and battery life
- I love the blue Theme of VS Code, later I customized my Xcode theme to Blue, same like VS Code
- It let me focus, more responsive and not sluggish

## Android Studio Flutter Ready Setup

There might be times while using VS Code where you need to change something Android specific. In VS Code, you can right click the Android folder and choose "Open in Android Studio".

Once opened, you might be faced with the following error:

**Dart SDK Not Found? Don't panic!**

The solution for this is pretty easy, you need to add the Flutter SDK path.

Click on Android Studio on top left → Select Preferences… → Unfold Languages & Frameworks → Select Flutter → Select Flutter SDK Path → Click on Apply Button.

## Prerequisites

Create a new app and do following minor changes.

`main.dart` is almost same as default template:

```dart
import 'package:flutter/material.dart';
import 'my_app.dart';

void main() {
  runApp(MyApp());
}
```

`my_app.dart`:

```dart
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```

## TODO

Currently app support single environment, there is no way to set a different configurations for different environments (Except commenting/un-commenting code🤨). We will set three different environments Development, Staging and Production.

We will configure following things to separate each build from other:
1. Set app bar title with text App name — <Environment>
2. Set first label with description of the target
3. Set second label text with base url used for selected target
4. Set separate `ThemeData` for each target

## Create App Configuration

Let's create `app_config.dart` which will contains all environment related configurations.

`AppConfig` extends with `InheritedWidget`, so the single reference can be used throughout the app.

```dart
import 'package:flutter/material.dart';

class AppConfig extends InheritedWidget {
  final String appName;
  final String buildFlavor;
  final String baseUrl;
  final ThemeData themeData;

  AppConfig({
    Key key,
    @required this.appName,
    @required this.buildFlavor,
    @required this.baseUrl,
    @required this.themeData,
    @required Widget child,
  }) : super(key: key, child: child);

  static AppConfig of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<AppConfig>();
  }

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) => false;
}
```

## Create Main File for Each Environment

In flutter `main.dart` is entry point of app, so we can set app configuration in `main.dart` file. We want to create three different environments so will have to create three variant of main file, `main_dev.dart`, `main_stage.dart`, `main_prod.dart`.

In each main file, we'll set configurations in `AppConfig` class with the appropriate configuration data before `runApp` called. From then `AppConfig` can be used in entire app with access of shared instance.

### main_dev.dart

```dart
import 'package:flutter/material.dart';
import 'app_config.dart';
import 'my_app.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AppConfig(
      appName: 'Flutter Demo',
      buildFlavor: 'Development',
      baseUrl: 'https://dev-api.example.com',
      themeData: ThemeData(
        primarySwatch: Colors.green,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: AppConfig.of(context).themeData,
        home: MyHomePage(title: 'Flutter Demo Home Page'),
      ),
    );
  }
}
```

### main_stage.dart

```dart
import 'package:flutter/material.dart';
import 'app_config.dart';
import 'my_app.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AppConfig(
      appName: 'Flutter Demo',
      buildFlavor: 'Staging',
      baseUrl: 'https://stage-api.example.com',
      themeData: ThemeData(
        primarySwatch: Colors.orange,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: AppConfig.of(context).themeData,
        home: MyHomePage(title: 'Flutter Demo Home Page'),
      ),
    );
  }
}
```

### main_prod.dart

```dart
import 'package:flutter/material.dart';
import 'app_config.dart';
import 'my_app.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AppConfig(
      appName: 'Flutter Demo',
      buildFlavor: 'Production',
      baseUrl: 'https://api.example.com',
      themeData: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: AppConfig.of(context).themeData,
        home: MyHomePage(title: 'Flutter Demo Home Page'),
      ),
    );
  }
}
```

Likewise we have to set different configuration for different main file according to environment.

We just set configuration of shared `AppConfig` instance in main class. Instead of direct call `runApp` we derive function body and set configuration. Set title of `MyApp` and `MyHomePage` widget and set theme data as per `AppConfig`.

As we are using shared instance access of `AppConfig` properties will be same throughout the app as the reference is shared.

## Run/Build Using Terminal

We can run the different variants by running `flutter run` with the `--target` or `-t` argument for short.

Run `flutter help run` in terminal to know about run parameters.

So, in our case:
- to run the development build, we call `flutter run -t lib/main_dev.dart`
- to run the staging build, we call `flutter run -t lib/main_stage.dart`
- to run the production build, we call `flutter run -t lib/main_prod.dart`

To create a release build on iOS, we can run `flutter build ios -t lib/main_<environment>.dart` and we will get the correct IPA for our environment. To do a release build on Android, just replace `ios` with `apk`.

So far so good. But how handy it is to run command in terminal every-time? It's very easy if we have an option to switch between environments in our respective IDEs.

## Using VS Code

Follow these steps below to setup targets in VS Code

1. Press ⌘⇧D if you are not in debug tab yet.
2. Click on configuration beside play button.
3. Select add configuration… from dropdown
4. It will open a drop down in `launch.json` file
5. Search Flutter and select `{}Flutter: Launch`

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Flutter Demo - Dev",
            "request": "launch",
            "type": "dart",
            "program": "lib/main_dev.dart"
        },
        {
            "name": "Flutter Demo - Stage",
            "request": "launch",
            "type": "dart",
            "program": "lib/main_stage.dart"
        },
        {
            "name": "Flutter Demo - Prod",
            "request": "launch",
            "type": "dart",
            "program": "lib/main_prod.dart"
        }
    ]
}
```

Now toggle the targets from drop-down beside play button and test your configurations for Development, Staging and Production.

Run it using fn + F5 or F5, hot reload will not push the change because we did change in `launch.json` and `main.dart` file.

## Using Android Studio

1. Open app folder in Android Studio (not just the android folder)
2. Click on main.dart button left side of play button, will open a dropdown
3. Click on Edit Configurations…
4. Rename main.dart target to your app-name
5. Click on + on top left corner to add new configuration
6. Select Flutter from dropdown
7. Edit name to <app-name>-dev
8. Check share checkbox
9. Select Dart Entry point to `main_dev.dart` from lib folder
10. Repeat steps 5–9 to add stage configuration

Now you can toggle between targets in Android Studio too. Toggle between targets and play with it.

## Android Configuration

Let's setup flavors in Android as well to separate platform specific configurations.

- Open `build.gradle` in `android>app` folder.
- Write following code as per your environments below `buildTypes`

```gradle
flavorDimensions "default"
productFlavors {
  dev {
      dimension "default"
      applicationIdSuffix ".dev"
  }
  stag {
     dimension "default"
  }
  prod {
      dimension "default"
  }
}
```

- Run your flavor using following command
`flutter run -t lib/main_dev.dart --flavor dev`

## iOS Configuration

Add different schemes to iOS project, open iOS workspace in Xcode and follow the steps:

- Product > Schemes > Manage Schemes…
- Select Runner Scheme click on setting icon and duplicate option
- Name scheme name dev and select shared and close the window
- Repeat above steps for all the flavors of flutter

Set project configurations as follows:

- Select root project Runner and Select Runner in Project section (Select info tab if it is not selected already)
- We have to duplicate Debug and Release configuration for each Flavors
- Select debug and click on + icon below, select Duplicate "Debug" Configuration, rename it to Debug-dev
- Repeat duplicate and rename for all Debug flavors
- Repeat duplicate and rename for all Release flavors

It's time to assign proper configurations to our schemas:

- Go to Product > Schemes > Manage Schemes…
- Select dev and click on Edit
- Select run scheme and select Debug-dev option in Build Configuration
- Select Archive scheme and select Release-dev option in Build configuration

Repeat above steps for all the pending flavors in the app.

Run your flavor using following command
`flutter run -t lib/main_dev.dart --flavor dev`

## Conclusion

Setting up multiple targets in Flutter applications is essential for managing different environments efficiently. By following this guide, you can easily switch between Development, Staging, and Production environments in both VS Code and Android Studio, making your development workflow more streamlined and professional.

Remember that proper environment management is crucial for maintaining code quality and ensuring that your app behaves correctly across different deployment stages.

The key benefits of this approach include:
- **Environment Isolation**: Each environment has its own configuration
- **Easy Switching**: Toggle between environments with a single click
- **Platform Support**: Works seamlessly on both iOS and Android
- **IDE Integration**: Native support in both VS Code and Android Studio
- **Build Automation**: Easy integration with CI/CD pipelines

---

*This blog post is also available on [Medium](https://medium.com/flutter-community/add-multiple-targets-in-flutter-apps-vs-code-android-studio-efe7e588e0cd?source=user_profile_page---------2-------------8f3a77ee85b3----------------------).*


