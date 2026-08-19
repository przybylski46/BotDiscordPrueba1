module.exports = {
  nombre: 'ready',
  unaVez: true,

  ejecutar(cliente) {
    console.log('Listo conectau como ${cliente.user.tag}');
  }
};
