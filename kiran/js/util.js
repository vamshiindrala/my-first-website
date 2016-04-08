function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

if (typeof module !== 'undefined' && module.exports != null){
  exports.isFloat = isFloat;
}