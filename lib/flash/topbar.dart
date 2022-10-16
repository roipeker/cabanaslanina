import 'package:flutter/material.dart';
import 'package:graphx/graphx.dart';

import 'export.dart';
import 'root.dart';

class Topbar extends AbsSprite {
  Topbar({super.doc}) : super(h: 60, w: 100);

  late GSvgShape logo;
  late GSprite menu;

  @override
  void addedToStage() {
    logo = GSvgShape(data.ninaLogoData!);
    logo.height = 50;
    logo.scaleX = logo.scaleY;
    addChild(logo);

    var txt = GText(text: 'La Niña');
    addChild(txt);
    txt.x = 50;
    txt.y = 10;
    txt.validate();

    menuIcon = GIcon(Icons.menu, Colors.black87, 32);
    addChild(menuIcon);
    menuIcon.y = 10;

    menu = GSprite();
    addChild(menu);
    menu.x = txt.x + txt.textWidth + 20;
    menu.y = 10;
    // menu.alpha = 0.8;

    var oldPos = 0.0;
    menuData.forEach((e) {
      var itm = createItem(e);
      itm.onMouseDown.add((event) {
        var i = event.target as MenuLink;
        if (selectedItem >= 0) {
          items[selectedItem].selected = false;
        }
        selectedItem = items.indexOf(i);
        i.selected = true;
      });
      itm.x = oldPos;
      oldPos = itm.x + itm.w + 20;
    });

    bar = GShape();
    addChild(bar);
    bar.graphics.beginFill(Colors.purple).drawRect(0, 0, 10, 4).endFill();

    // createItem('La Niña');
    // createItem('Servicio');
    // createItem('Tarifas');
    // createItem('Contacto');

    super.addedToStage();
  }

  @override
  void update(double delta) {
    var oldX = 0.0;
    items.forEach((e) {
      e.x = oldX;
      oldX = e.x + e.width + 10;
    });

    // bar.tween(
    //   duration: .4,
    //   x: menu.x + i.x,
    // );
    if (selectedItem >= 0) {
      var sel = items[selectedItem];
      var ty = (menu.y + sel.y + sel.height) - 4;
      bar.x += ((menu.x + sel.x) - bar.x) / 4;
      bar.width += (sel.width - bar.width) / 10;
      bar.scaleY = sel.getChildAt(0).scaleY / 2;
      bar.y += (ty - bar.y) / 4;
    }
    super.update(delta);
  }

  var selectedItem = 0;
  late GShape bar;

  var menuData = [
    'Home',
    'La Niña',
    'Servicio',
    'Tarifas',
    'Contacto',
  ];

  var items = <MenuLink>[];
  late GIcon menuIcon;

  @override
  void draw() {
    // graphics
    //     .clear()
    //     .beginFill(Colors.redAccent)
    //     .drawRect(10, 0, w - 20, h)
    //     .endFill();
  }

  @override
  void resize() {
    w = sw;
    menuIcon.x = w - menuIcon.width - 16;
  }

  MenuLink createItem(String label) {
    var item = MenuLink(doc: menu);
    // item.y = 10;
    // item.x = 100;
    item.text = label;
    items.add(item);
    return item;
  }
}

class MenuLink extends AbsSprite {
  late GText _label = GText(text: 'Hi');
  int index = -1;
  bool _selected = false;

  set selected(bool flag) {
    _selected = flag;
    _label.color = flag ? Colors.purple : Colors.black87;
    _label.tween(
      duration: 0.5,
      y: _selected ? -5 : 0,
      scale: _selected ? 2 : 1,
      ease: GEase.easeOut,
    );
    // _label.textColor = flag ? Colors.white : Colors.black87;
  }

  bool get selected => _selected;

  set text(value) {
    _label.text = value;
    _label.validate();
    w = _label.textWidth;
  }

  MenuLink({super.doc}) : super(w: 0, h: 20);

  @override
  void addedToStage() {
    mouseChildren = false;
    useCursor = true;
    onMouseOver.add((event) {
      tween(duration: .1, alpha: 0.7);
      // alpha = .5;
      onMouseOut.addOnce((event) {
        tween(duration: .8, alpha: 1);
        // alpha = 1;
      });
    });
    addChild(_label);
    super.addedToStage();
  }
}
