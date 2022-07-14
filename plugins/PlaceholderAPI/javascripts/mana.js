function mana() {
    var m = '%sapi_default_scurrentmana%';
    var mMax = '%sapi_default_scurrentmaxmana%';
    var n = m/mMax*100;
    return n;
}
mana();