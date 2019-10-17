const accum = s => {

  let str = '';
  let concat = '';

  for(let i = 0; i < s.length; i++){
    str = '';
    for(let j = 1; j <= i; j++){
      str = str + s[i].toLowerCase();
    }
    if(i+1 !== s.length) str = str + '-';
    concat = concat + s[i].toUpperCase() + str;
    }
    return concat;
  }