import 'package:flutter/material.dart';

class MaterialSelectionPage extends StatefulWidget {
  const MaterialSelectionPage({super.key});

  @override
  State<MaterialSelectionPage> createState() => _MaterialSelectionPageState();
}

class _MaterialSelectionPageState extends State<MaterialSelectionPage> {
  String _selectedMaterial = "PANEL TYPE";
  String _selectedQuantity = "PANEL SİZE";
  String _selectedProximity = "PROXİMİTY";
  String _selectedBoxColor = "COLOUR";
  String _selectedTransparency = "SYMBOL COLOUR";
  String _selectedVibration = "VİBRATİON";
  String _selectedSystemType = "PROTOCOL";
  String _selectedColorType = "LİGHT COLOUR";
  List<List<IconData?>> moduleIcons = [];



  void _generateCode() {
    String materialCode = '';
    if (_selectedMaterial == 'Glass') {
      materialCode += 'GP';
    } else if (_selectedMaterial == 'Plexi') {
      materialCode += 'PP';
    } else {
      materialCode += 'XP';
    }

    String quantityCode = '';
    if (_selectedQuantity == 'Single') {
      quantityCode += 'S';
    } else if (_selectedQuantity == 'Double') {
      quantityCode += 'D';
    } else if (_selectedQuantity == 'Triple') {
      quantityCode += 'T';
    } else {
      quantityCode += 'X';
    }

    String proximityCode = '';
    if (_selectedProximity == 'Proximity') {
      proximityCode += 'P';
    } else if (_selectedProximity == 'None') {
      proximityCode += 'N';
    } else {
      proximityCode += 'X';
    }

    String boxColorCode = '';
    if (_selectedBoxColor == 'White') {
      boxColorCode += 'W';
    } else if (_selectedBoxColor == 'Black') {
      boxColorCode += 'B';
    } else if (_selectedBoxColor == 'Gray') {
      boxColorCode += 'G';
    } else {
      boxColorCode += 'X'; 
    }

    String transparencyCode = '';
    if (_selectedTransparency == 'Transparent') {
      transparencyCode += 'T';
    } else if (_selectedTransparency == 'Glass Colour') {
      transparencyCode += 'C';
    } else {
      transparencyCode += 'X';
    }

    String vibrationCode = '';
    if (_selectedVibration == 'Vibration') {
      vibrationCode += 'V';
    } else if (_selectedVibration == 'Buzeer') {
      vibrationCode += 'B';
    } else if (_selectedVibration == 'Both') {
      vibrationCode += 'VB';
    } else if (_selectedVibration == 'None') {
      vibrationCode += 'N';
    } else {
      vibrationCode += 'X';
    }

    String systemTypeCode = '';
    if (_selectedSystemType == 'Elekon') {
      systemTypeCode += 'E-';
    } else if (_selectedSystemType == 'Helvar') {
      systemTypeCode += 'H-';
    } else if (_selectedSystemType == 'DALI2') {
      systemTypeCode += 'D-';
    } else {
      systemTypeCode += 'X-';
    }

    String colorTypeCode = '';
    if (_selectedColorType == 'White') {
      colorTypeCode += 'W';
    } else if (_selectedColorType == 'Red') {
      colorTypeCode += 'R';
    } else if (_selectedColorType == 'RGB') {
      colorTypeCode += 'RGB';
    } else if (_selectedColorType == 'RGBW') {
      colorTypeCode += 'RGBW';
    } else {
      colorTypeCode += 'X';
    }

    String finalCode = '$materialCode$quantityCode$proximityCode$boxColorCode$transparencyCode$vibrationCode$systemTypeCode$colorTypeCode';

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text("Generated Code"),
          content: Text(finalCode),
          actions: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text("Close"),
            ),
          ],
        );
      },
    );
  }

void _onBoxTap(int index) {
  int? _sectionCount;
  List<IconData?> _selectedIcons = [];

  showDialog(
    context: context,
    builder: (BuildContext context) {
      TextEditingController _sectionController = TextEditingController();

      return StatefulBuilder(
        builder: (BuildContext context, StateSetter setState) {
          return AlertDialog(
            title: const Text('Configure Module Icons'),
            content: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(
                    controller: _sectionController,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(hintText: 'Enter number of sections'),
                    onChanged: (value) {
                      setState(() {
                        _sectionCount = int.tryParse(value);
                        _selectedIcons = List<IconData?>.filled(_sectionCount ?? 0, null);
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  if (_sectionCount != null)
                    ...List.generate(
                      _sectionCount!,
                      (sectionIndex) => Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('Section ${sectionIndex + 1}:'),
                          DropdownButton<IconData>(
                            value: _selectedIcons[sectionIndex],
                            items: const [
                              DropdownMenuItem(
                                value: Icons.home,
                                child: Icon(Icons.home),
                              ),
                              DropdownMenuItem(
                                value: Icons.star,
                                child: Icon(Icons.star),
                              ),
                              DropdownMenuItem(
                                value: Icons.settings,
                                child: Icon(Icons.settings),
                              ),
                              DropdownMenuItem(
                                value: Icons.lightbulb,
                                child: Icon(Icons.lightbulb),
                              ),
                            ],
                            onChanged: (IconData? newIcon) {
                              setState(() {
                                _selectedIcons[sectionIndex] = newIcon;
                              });
                            },
                          ),
                        ],
                      ),
                    ),
                ],
              ),
            ),
            actions: [
              TextButton(
                onPressed: () {
                  setState(() {
                    if (_sectionCount != null) {
                      while (moduleIcons.length <= index) {
                        moduleIcons.add([]);
                      }
                      moduleIcons[index] = List.from(_selectedIcons);
                    }
                  });
                  Navigator.of(context).pop();
                },
                child: const Text('Save'),
              ),
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: const Text('Cancel'),
              ),
            ],
          );
        },
      );
    },
  );
}


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Material Selection'),
        backgroundColor: const Color.fromARGB(96, 124, 136, 241),
      ),
      body: Row(
        children: [
          Container(
            width: 350,
            color: const Color.fromARGB(218, 255, 255, 255),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const DrawerHeader(
                  decoration: BoxDecoration(
                    color: Color(0xFFC8102E),
                  ),
                  child: Text(
                    '   MODULE CONFIGURATOR   ',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                ),
                _buildDropdown<String>(
                  value: _selectedMaterial,
                  items: ['PANEL TYPE', 'Glass', 'Plexi'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedMaterial = newValue!;
                    });
                  },
                ),
                _buildDropdown<String>(
                  value: _selectedQuantity,
                  items: ['PANEL SİZE', 'Single', 'Double', 'Triple'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedQuantity = newValue!;
                    });
                  },
                ),
                _buildDropdown<String>(
                  value: _selectedProximity,
                  items: ['PROXİMİTY', 'None', 'Proximity'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedProximity = newValue!;
                    });
                  },
                ),
                _buildDropdown<String>(
                  value: _selectedBoxColor,
                  items: ['COLOUR', 'Black', 'White', 'Gray'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedBoxColor = newValue!;
                    });
                  },
                ),
                _buildDropdown<String>(
                  value: _selectedTransparency,
                  items: ['SYMBOL COLOUR', 'Transparent', 'Glass Colour'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedTransparency = newValue!;
                    });
                  },
                ),
                _buildDropdown<String>(
                  value: _selectedVibration,
                  items: ['VİBRATİON', 'Vibration', 'Buzeer', 'Both', 'None'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedVibration = newValue!;
                    });
                  },
                ),
                _buildDropdown<String>(
                  value: _selectedSystemType,
                  items: ['PROTOCOL', 'Elekon', 'Helvar', 'DALI2'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedSystemType = newValue!;
                    });
                  },
                ),
                _buildDropdown<String>(
                  value: _selectedColorType,
                  items: ['LİGHT COLOUR', 'White', 'Red', 'RGB', 'RGBW'],
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedColorType = newValue!;
                    });
                  },
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: ElevatedButton(
                    onPressed: _generateCode,
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.grey.shade800, 
                    ),
                    child: const Text('Generate Code'),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: Container(
              color: Colors.grey.shade200,
              child: Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (int i = 0; i < _getqQuantity(); i++)
                      GestureDetector(
                        onTap: () => _onBoxTap(i), 
                        child: Container(
                          width: 450,
                          height: 450,
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            color: _getBoxColor(),
                            border: Border.all(color: Colors.black12, width: 2),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              if (moduleIcons.length > i && moduleIcons[i].isNotEmpty)
                                ...moduleIcons[i].map(
                                  (icon) => Icon(icon, size: 50, color: Colors.black),
                                )
                              else
                            const Text(
                              "No Icons Selected",
                              style: TextStyle(fontSize: 18, color: Colors.black),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDropdown<T>({
    required String value,
    required List<String> items,
    required ValueChanged<String?> onChanged,
  }) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Container(
        decoration: const BoxDecoration(
          color: Color(0xFFBBDEFB),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12.0),
          child: DropdownButton<String>(
            value: value,
            isExpanded: true,
            dropdownColor: const Color(0xFFBBDEFB),
            items: items.map((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(
                  value,
                  style: const TextStyle(
                    fontSize: 18,
                    color: Color(0xFF3A3838),
                  ),
                ),
              );
            }).toList(),
            onChanged: onChanged,
            style: const TextStyle(
              fontSize: 16,
              color: Color(0xFF3A3838),
            ),
            underline: const SizedBox.shrink(),
          ),
        ),
      ),
    );
  }

  int _getqQuantity() {
  return _selectedQuantity == 'Single'
      ? 1
      : _selectedQuantity == 'Double'
          ? 2
          : _selectedQuantity == 'Triple'
              ? 3
              : 1;
}


  Color _getBoxColor() {
    switch (_selectedBoxColor) {
      case 'Black':
        return Colors.black;
      case 'Gray':
        return Colors.grey;
      default:
        return Colors.white;
    }
  }
}
