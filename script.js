(function () {
  
  // Ex1 - Button Click
  document.getElementById('ex1_button').addEventListener('click', function() {
    let ex1_content = "";
    for(let i = 0; i < 10; i++) {
      ex1_content += i + ", ";
    }
    // Remove the last comma and space
    ex1_content = ex1_content.slice(0, -2);
    // Display the result
    document.getElementById('ex1_content').textContent = ex1_content;
  });

  // Ex2 - Phone validation is handled in HTML

  // Ex3 - Drag & Drop
  let element = document.getElementById('ex3_element');
  
  element.addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  });
  
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
