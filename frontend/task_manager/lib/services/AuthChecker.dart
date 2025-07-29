import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> signUp(String name, String email, String password) async {
  final response = await http.post(
    Uri.parse('http://10.0.2.2:3000/api/signup'),
    headers: { "Content-Type": "application/json" },
    body: jsonEncode({
      "name": name,
      "email": email,
      "password": password,
    }),
  );

  print(response.body);
}


Future<bool> loginUser(String username, String password) async {
  final url = Uri.parse('https://task-manager-server-lvzs.onrender.com/api/login');

  try {
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'username': username,
        'password': password,
      }),
    );

    print('Status code: ${response.statusCode}');
    print('Response body: ${response.body}');

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      print('✅ Login successful: $data');
      return true;
    } else {
      print('❌ Login failed: ${response.body}');
      return false;
    }
  } catch (e) {
    print('⚠️ Error during login: $e');
    return false;
  }
}