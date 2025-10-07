(function () {
  
  document.getElementById('ex3_one').addEventListener('dragover', function(e) {
    e.preventDefault();
    return false;
  });
  
  document.getElementById('ex3_two').addEventListener('dragover', function(e) {
    e.preventDefault();
    return false;
  });
  
  document.getElementById('ex3_two').addEventListener('drop', function(e) {
    e.preventDefault();
    this.appendChild(element);
    return false;
  });
  
  document.getElementById('ex3_one').addEventListener('drop', function(e) {
    e.preventDefault();
    this.appendChild(element);
    return false;
  });

})();
