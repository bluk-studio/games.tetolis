function mananumber() {
    var m = '%sapi_default_scurrentmana%';
    var r = '';
    for(var k = 0; k < m.length; k++) {
        switch (m[k]) {
          case '0':
            r += '₀';
            break;
          case '1':
            r += '₁';
            break;
          case '2':
            r += '₂';
            break;
          case '3':
            r += '₃';
            break;
          case '4':
            r += '₄';
            break;
          case '5':
            r += '₅';
            break;
          case '6':
            r += '₆';
            break;
          case '7':
            r += '₇';
            break;
          case '8':
            r += '₈';
            break;
          case '9':
            r += '₉';
            break;
        }
    }
    if(r.length == 1) {
        r+= ' ';
    }
    return r;
}
mananumber();