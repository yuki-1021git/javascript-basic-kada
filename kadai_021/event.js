const Btn = document.getElementById('btn');
const Text =document.getElementById('text');

b
Btn.addEventListener('click',() => {
  setTimeout(() => {
    Text.textContent='ボタンをクリックしました';
},2000);
});