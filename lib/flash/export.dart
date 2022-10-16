import 'package:graphx/graphx.dart';
export 'package:graphx/graphx.dart';
export 'root.dart';
export 'topbar.dart';

abstract class AbsSprite extends GSprite {
  Stage get st => stage!;

  double get sw => stage?.stageWidth ?? 0;

  double get sh => stage?.stageHeight ?? 0;

  double $w = 0, $h = 0;

  double get w => $w;

  double get h => $h;

  set w(double value) {
    if ($w == value) {
      return;
    }
    $w = value;
    invalidaDraw();
  }

  set h(double value) {
    if ($h == value) {
      return;
    }
    $h = value;
    invalidaDraw();
  }

  AbsSprite({
    double w = 0,
    double h = 0,
    GDisplayObjectContainer? doc,
  }) {
    this.w = w;
    this.h = h;
    doc?.addChild(this);
  }

  @override
  void addedToStage() {
    onRemovedFromStage.addOnce(handleRemoved);
    super.addedToStage();
  }

  var $pendingDraw = true;

  /// invalidate draw.
  void invalidaDraw() {
    $pendingDraw = true;
    // draw();
  }

  @override
  void update(double delta) {
    if ($pendingDraw) {
      $pendingDraw = false;
      draw();
    }
    super.update(delta);
  }

  void draw() {
    /// nothing?
  }

  void handleRemoved() {
    print('removed!');
  }

  void resize() {
    /// called form parent.
  }
}


final data = Data();

class Data {
  SvgData? ninaLogoData;
}

