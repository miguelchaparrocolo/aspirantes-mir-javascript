function indiceMayor(array) {
    let mayor = array[0];
    let indiceMayor = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
        indiceMayor = i;
      }
    }
  
    return indiceMayor;
}