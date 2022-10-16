import 'export.dart';

class RootApp extends AbsSprite {
  RootApp() {
  }

  late Topbar appbar;

  @override
  Future<void> addedToStage() async {
    await loadData();
    initStuff();
    onResize();
  }

  void initStuff(){
    appbar = Topbar(doc: this);
    appbar.x = 0;
    stage!.onResized.add(onResize);
  }

  void onResize() {
    appbar.resize();
    // trace('resize! 2', sw);
  }

  Future<void> loadData() async {
    data.ninaLogoData = await ResourceLoader.loadSvg('assets/svg/nina_logo.svg');
    // rootBundle
    // SvgUtils.svgDataFromString(rawSvg);
  }
}
