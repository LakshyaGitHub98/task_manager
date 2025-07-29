import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:task_manager/provider/item_provider.dart';
import 'package:task_manager/screens/auth_screen.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => ItemProvider(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Task Manager',
      theme: ThemeData(primarySwatch: Colors.teal),
      home: AuthScreen(),
    );
  }
}