function manaunicode() {
    var onefull= '';
    var full = '';
    var empty = '';
    var f = ' ';
    var m = '%sapi_default_scurrentmana%';
    var mMax = '%sapi_default_scurrentmaxmana%';
    if(m.length > 2) {
        onefull = f+onefull
        full = f+full
        empty = f+empty
    }
    if(m == mMax){
        return full;
    } else if(m < mMax){
        return onefull;
    } else if(m == 0) {
        return empty;
    } else {
        return onefull;
    }
}
manaunicode();