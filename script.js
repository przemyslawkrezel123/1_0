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

  // Ex2 - Phone validation
  document.getElementById('ex2_text').addEventListener('input', function() {
    let phone = this.value;
    let phonePattern = /^\d{3}-?\d{3}-?\d{4}$/;
    let ex2_content = document.getElementById('ex2_content');
    
    if (phonePattern.test(phone)) {
      ex2_content.textContent = "Valid phone number!";
      ex2_content.style.color = "green";
    } else if (phone.length > 0) {
      ex2_content.textContent = "Invalid format (use: 123-456-7890)";
      ex2_content.style.color = "red";
    } else {
      ex2_content.textContent = "";
    }
  });

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
