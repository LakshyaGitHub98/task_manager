import 'package:flutter/material.dart';

class ItemProvider with ChangeNotifier {
  final List<Map<String, dynamic>> _items = [];

  List<Map<String, dynamic>> get items => _items;

  void addItem(Map<String, dynamic> newItem) {
    _items.add(newItem);
    notifyListeners();
  }

  Map<String, dynamic>? getItemById(String id) {
    return _items.firstWhere((item) => item['id'] == id, orElse: () => {});
  }

  void updateItem(String id, Map<String, dynamic> updatedData) {
    final index = _items.indexWhere((item) => item['id'] == id);
    if (index != -1) {
      _items[index] = {..._items[index], ...updatedData};
      notifyListeners();
    }
  }

  void deleteItem(String id) {
    _items.removeWhere((item) => item['id'] == id);
    notifyListeners();
  }
}