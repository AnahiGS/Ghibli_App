describe('Pruebas de demoComponent', () =>{

  test('Esta prueba no debe de fallar', ()=>{
  
  //inicialización
  
  const message1 ='hola mundo';
  //estimulo
  const message2 = message1.trim(); //trim es para quitar los espacios en blanco al inicio y al final
  
  // observar el comportamiento esperado
  expect(message1).toBe(message2);
  
  })

})
