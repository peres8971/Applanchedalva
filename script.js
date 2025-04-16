const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.getAttribute('data-item');
    cart.push(item);
    alert(`${item} adicionado ao carrinho!`);
  });
});

document.getElementById('finalizar-compra').addEventListener('click', (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  const mensagem = encodeURIComponent(`Olá! Gostaria de fazer o pedido:\n\n${cart.map((item, i) => `${i + 1}. ${item}`).join('\n')}`);
  const telefone = '5591999999999'; // Substitua pelo seu número com DDI e DDD
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
});
