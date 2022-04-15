function ajax(url, data) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      if(xhr.status === 200){
        alert(xhr.responseText);
      }
    }
  }
  xhr.open('get', url, true);
  xhr.send();
}