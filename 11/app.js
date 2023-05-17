import { openModal } from './modal';

const $btn = document.getElementById('btn');

$btn.addEventListener('click', () => {
  openModal({
    text: '모달',
  });
});