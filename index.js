const toggle_btn = document.querySelector('#checkbox')
toggle_btn.addEventListener('change', () => {
  if(toggle_btn.checked){
  document.body.classlist.add('dark-mode')
}else{
  document.body.classlist.add('dark-mode')
}})
