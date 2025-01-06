import 'package:http/http.dart' as http;
import 'dart:convert';
import 'constans.dart';

class ApiService {
  Future<List<Map<String, dynamic>>> fetchUsers() async {
    final response = await http.get(Uri.parse('$baseUrl/admin/users'));

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body) as List;
      return data
          .map((user) => {
                'username': user['name'],
                'email': user['email'],
                'key': user['key'],
              })
          .toList();
    } else {
      throw Exception('Failed to load users');
    }
  }

  Future<void> createUser(
      String username, String email, String password, String key) async {
    final response = await http.post(
      Uri.parse('$baseUrl/admin/create-user'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'username': username,
        'email': email,
        'password': password,
        'key': key,
      }),
    );

    if (response.statusCode != 200) {
      throw Exception('Failed to create user: ${response.body}');
    }
  }

  Future<void> registerUser(
      String name, String email, String password, String key) async {
    final response = await http.post(
      Uri.parse('$baseUrl/register'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'name': name,
        'email': email,
        'password': password,
        'key': key,
      }),
    );

    if (response.statusCode != 200) {
      throw Exception('Failed to register user: ${response.body}');
    }
  }

  Future<Map<String, dynamic>> createKey() async {
    final response = await http.post(
      Uri.parse('$baseUrl/admin/create-key'),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to create key: ${response.body}');
    }
  }
}
