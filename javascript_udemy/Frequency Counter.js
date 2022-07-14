const log = console.log;

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const st1 = {};
    const st2 = {};
    for (let str of str1) {
      st1[str] = (st1[str] || 0) + 1;
    }
    for (let str of str2) {
      st2[str] = (st2[str] || 0) + 1;
    }
    for (let key in st1) {
      if (!(key in st2)) {
        return false;
      }
      if (st1[key] !== st2[key]) {
        return false;
      }
    }
    return true;
  }

  log(validAnagram("aaz", "zza"));
