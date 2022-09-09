function ShowSubWindow() {
    // サブウインドウの設定
    var subw = 300;   // サブウインドウの横幅
    var subh = 50;   // サブウインドウの高さ
    var subp = "popup.html";   // 表示するページ(URL)
    var subn = "alert";   // サブウインドウの名称
    // 表示座標の計算
    var subx = ( screen.availWidth  - subw ) / 2;   // X座標
    var suby = ( screen.availHeight - subh ) / 2;   // Y座標
    // サブウインドウのオプション文字列を作る
    var SubWinOpt = "width=" + subw + ",height=" + subh + ",top=" + suby + ",left=" + subx;
    // サブウインドウを表示
    window.open(subp, subn, SubWinOpt);
 }