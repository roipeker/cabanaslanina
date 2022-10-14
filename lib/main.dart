import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cabañas La Niña',
      theme: ThemeData(
        primarySwatch: Colors.pink,
        appBarTheme: AppBarTheme(
          // backgroundColor: Colors.transparent,
          // elevation: 0,
          // foregroundColor: Colors.black87,
        ),
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Cabañas La Niña"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SvgPicture.asset(
              'assets/svg/nina_logo.svg',
              semanticsLabel: 'Cabañas La Niña Logo',
            ),
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  'Un nuevo sitio esta en construcción',
                ),
              ],
            ),

          ],
        ),
      ),
      floatingActionButton: Transform.scale(
        scale: .8,
        alignment: Alignment.centerRight,
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            FloatingActionButton.extended(
              // isExtended: false,
              label: Text('E-mail'),
              icon: const Icon(Icons.email),
              onPressed: sendEmail,
              tooltip: 'Enviar un email',
            ),
            SizedBox(
              width: 8,
            ),
            FloatingActionButton.extended(
              // isExtended: false,
              label: Text('WhatsApp'),
              icon: const Icon(Icons.whatsapp),
              onPressed: sendEmail,
              tooltip: 'Chat via WhatsApp',
              // child: const Icon(Icons.email),
            ),
          ],
        ),
      ),
    );
  }

  void sendEmail() {
    Uri.parse('mailto:info@cabanaslanina.com');
  }
}
