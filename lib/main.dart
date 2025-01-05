import 'package:flutter/material.dart';
import 'screen/MaterialSelectionPage1.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Touch Panel',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFFC8102E)),
        useMaterial3: true,
      ),
      home: const MaterialSelectionPage(),
    );
  }
}
