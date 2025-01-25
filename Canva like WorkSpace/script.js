/*
// Alert at Refresh
window.onbeforeunload = function () {
  return "If you refresh the page, your work will be removed.";
};
// */

// Pop-Up Message
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Toast disappears after 3 seconds
}
// Select Element
const copyBtn = document.querySelector('#copy-btn')       
const workspace = document.getElementById('workspace');
const output = document.getElementById('output');
const contextMenu = document.getElementById('context-menu');

let selectedElement = null;

// Generate Code
function generateCode() {
  const elements = document.querySelectorAll('.element');
  let html = '';
  let css = '';

  elements.forEach((el, index) => {
    const { color, left, top, width, height, border, borderRadius, boxShadow, backgroundColor, opacity } = el.style;
    const tag = el.dataset.tag || 'div';

    if (el.dataset.type === 'text') {
      const fontSize = el.style.fontSize;
      const fontFamily = el.style.fontFamily;
      html += `<${tag} class="element-${index}">${el.innerText}</${tag}>\n`;
      css += `.element-${index} {
        position: absolute;
        color: ${color};
        left: ${left};
        top: ${top};
        width: ${width};
        height: ${height};
        opacity: ${opacity};
        font-size: ${fontSize};
        font-family: ${fontFamily};
      }\n`;
    } else if (el.dataset.type === 'image') {
      const hrefStart = el.dataset.href ? `<a href="${el.dataset.href}" target="_blank">` : '';
      const hrefEnd = el.dataset.href ? `</a>` : '';
      html += `${hrefStart}<img class="element-${index}" src="${el.dataset.src}" alt="Image">${hrefEnd}\n`;
      css += `.element-${index} {
        position: absolute;
        left: ${left};
        top: ${top};
        width: ${width};
        height: ${height};
        border: ${border};
        border-radius: ${borderRadius};
        box-shadow: ${boxShadow};
        opacity: ${opacity};
      }\n`;
    } else if (el.dataset.type === 'input') {
      const placeholder = el.dataset.placeholder || 'Enter text';
      html += `<input class="element-${index}" type="text" placeholder="${placeholder}">\n`;
      css += `.element-${index} {
        position: absolute;
        left: ${left};
        top: ${top};
        width: ${width};
        height: ${height};
        border: ${border || '1px solid #ccc'};
        border-radius: ${borderRadius || '4px'};
        box-shadow: ${boxShadow || 'none'};
        background-color: ${backgroundColor || '#fff'};
        color: ${color || '#000'};
        opacity: ${opacity || 1};
      }\n`;
    } else {
      html += `<div class="element-${index}"></div>\n`;
      css += `.element-${index} {
        position: absolute;
        color: ${color};
        left: ${left};
        top: ${top};
        width: ${width};
        height: ${height};
        border: ${border};
        border-radius: ${el.dataset.type === 'circle' ? '50%' : borderRadius};
        box-shadow: ${boxShadow};
        background-color: ${backgroundColor};
        opacity: ${opacity};
      }\n`;
    }
  });

  output.textContent = `<style>\n${css}</style>\n${html}`;
}

//  draggable 
function makeDraggable(el) {
  let offsetX = 0, offsetY = 0;

  el.addEventListener('mousedown', (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    function moveHandler(event) {
      el.style.left = `${event.pageX - workspace.offsetLeft - offsetX}px`;
      el.style.top = `${event.pageY - workspace.offsetTop - offsetY}px`;
      generateCode();
    }

    function upHandler() {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
    }

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);
  });
}

// resizable 
function makeResizable(el) {
  const resizer = document.createElement('div');
  resizer.className = 'resizer';
  el.appendChild(resizer);

  resizer.addEventListener('mousedown', (e) => {
    e.stopPropagation();

    function resizeHandler(event) {
      const newWidth = event.pageX - el.offsetLeft - workspace.offsetLeft;
      const newHeight = event.pageY - el.offsetTop - workspace.offsetTop;
      el.style.width = `${newWidth}px`;
      el.style.height = `${newHeight}px`;
      generateCode();
    }

    function stopResizeHandler() {
      document.removeEventListener('mousemove', resizeHandler);
      document.removeEventListener('mouseup', stopResizeHandler);
    }

    document.addEventListener('mousemove', resizeHandler);
    document.addEventListener('mouseup', stopResizeHandler);
  });
}

// Context Menu 
workspace.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const element = e.target.closest('.element');
  if (!element) return;

  selectedElement = element;
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;
  contextMenu.style.display = 'block';
});

document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

contextMenu.addEventListener('click', (e) => {
  if (!selectedElement) return;
  const action = e.target.dataset.action;

  switch (action) {
    case 'resize-width':
      const newWidth = prompt('Enter new width (px):', '100');
      if (newWidth) selectedElement.style.width = `${newWidth}px`;
      break;
    case 'resize-height':
      const newHeight = prompt('Enter new height (px):', '100');
      if (newHeight) selectedElement.style.height = `${newHeight}px`;
      break;
    case 'resize-both':
      const width = prompt('Enter new width (px):', '100');
      const height = prompt('Enter new height (px):', '100');
      if (width) selectedElement.style.width = `${width}px`;
      if (height) selectedElement.style.height = `${height}px`;
      break;
    case 'add-border':
      const border = prompt('Enter border (e.g., "1px solid black"):');
      if (border) selectedElement.style.border = border;
      break;
    case 'add-border-radius':
      const borderRadius = prompt('Enter border-radius (e.g., "10px"):');
      if (borderRadius) selectedElement.style.borderRadius = borderRadius;
      break;
    case 'add-shadow':
      const boxShadow = prompt('Enter box-shadow (e.g., "5px 5px 10px gray"):');
      if (boxShadow) selectedElement.style.boxShadow = boxShadow;
      break;
    case 'add-hyperlink':
      const href = prompt('Enter hyperlink URL:');
      if (href) {
        selectedElement.dataset.href = href;
      }
      break;
  }
  generateCode();
});

// Add Text Element
document.getElementById('add-text').addEventListener('click', () => {
  const textElement = document.createElement('div');
  textElement.className = 'element';
  textElement.dataset.type = 'text';
  textElement.contentEditable = true;
  textElement.innerText = 'Editable Text';
  textElement.style.left = '50px';
  textElement.style.top = '50px';
  textElement.style.width = '150px';
  textElement.style.height = '50px';

  workspace.appendChild(textElement);
  makeDraggable(textElement);
  makeResizable(textElement);
  generateCode();
});

// Add Image Element
document.getElementById('add-image').addEventListener('click', () => {
  const imageUrl = prompt('Enter Image URL:');
  if (!imageUrl) return;

  const imageElement = document.createElement('div');
  imageElement.className = 'element';
  imageElement.dataset.type = 'image';
  imageElement.dataset.src = imageUrl;
  imageElement.style.left = '50px';
  imageElement.style.top = '50px';
  imageElement.style.width = '110px';
  imageElement.style.height = '110px';
  imageElement.style.backgroundImage = `url(${imageUrl})`;
  imageElement.style.backgroundSize = 'cover';
  imageElement.style.backgroundPosition = 'center';

  workspace.appendChild(imageElement);
  makeDraggable(imageElement);
  makeResizable(imageElement);
  generateCode();
});

// Add Input Box Element
document.getElementById('add-button').addEventListener('click', () => {
  const inputElement = document.createElement('input');
  inputElement.className = 'element';
  inputElement.dataset.type = 'input';
  inputElement.dataset.placeholder = 'Input Box';
  inputElement.type = 'text';
  inputElement.placeholder = 'Input Box';
  inputElement.style.left = '50px';
  inputElement.style.top = '50px';
  inputElement.style.width = '150px';
  inputElement.style.height = '40px';

  workspace.appendChild(inputElement);
  makeDraggable(inputElement);
  makeResizable(inputElement);
  generateCode();
});


// Select Or UnSelect
workspace.addEventListener('click', (e) => {
  if (e.target.classList.contains('element')) {
    if (selectedElement) {
      selectedElement.style.border = '';
    }
    selectedElement = e.target;
    selectedElement.style.border = '2px dashed black';
  } else {
    if (selectedElement) {
      selectedElement.style.border = '';
      selectedElement = null;
    }
  }
});


// Change Text Color
document.getElementById('change-color').addEventListener('click', () => {
  if (selectedElement) {
    const color = prompt('Enter text color (e.g., red, #000):', selectedElement.style.color || '#000');
    if (color) {
      selectedElement.style.color = color;
      generateCode();
    }
  } else {
    alert('Select Font');
  }
});

// Change Background Color
document.getElementById('change-bg').addEventListener('click', () => {
  if (selectedElement) {
    const bgColor = prompt(
      'Enter background color (e.g., blue, #f0f0f0):',
      selectedElement.style.backgroundColor || '#fff'
    );
    if (bgColor) {
      selectedElement.style.backgroundColor = bgColor;
      generateCode(); // Ensure this function exists and updates your code output.
    }
  } else {
    alert('No element selected. Click on an element to select it.');
  }
});

  // Color picker functionality
  const colorPicker = document.getElementById('colorPicker');
  const colorValue = document.getElementById('colorValue');

  colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorValue.textContent = `Color: ${selectedColor}`;
    // Update background color if an element is selected
    if (selectedElement) {
      selectedElement.style.backgroundColor = selectedColor;
      generateCode(); // Update code output dynamically
    }
  });
// Bring Forward
document.getElementById('bring-forward').addEventListener('click', () => {
  if (selectedElement) {
    const nextElement = selectedElement.nextElementSibling;
    if (nextElement) {
      workspace.insertBefore(nextElement, selectedElement); // Move the selected element after the next sibling
    }
    generateCode();
  } else {
    alert('No element selected. Click on an element to select it.');
  }
});

// Bring Backward
document.getElementById('bring-backward').addEventListener('click', () => {
  if (selectedElement) {
    const prevElement = selectedElement.previousElementSibling;
    if (prevElement) {
      workspace.insertBefore(selectedElement, prevElement); // Move the selected element before the previous sibling
    }
    generateCode();
  } else {
    alert('No element selected. Click on an element to select it.');
  }
});


// Add Rectangle
document.getElementById('add-rectangle').addEventListener('click', () => {
  const rect = document.createElement('div');
  rect.className = 'element';
  rect.dataset.type = 'rectangle';
  rect.style.left = '50px';
  rect.style.top = '50px';
  rect.style.width = '100px';
  rect.style.height = '100px';
  rect.style.backgroundColor = 'gray'; // Default gray color
  rect.style.border = 'none'; // Default border
  rect.style.position = 'absolute';

  workspace.appendChild(rect);
  makeDraggable(rect);
  makeResizable(rect);
  generateCode();
});

// Add Circle
document.getElementById('add-circle').addEventListener('click', () => {
  const circle = document.createElement('div');
  circle.className = 'element';
  circle.dataset.type = 'circle';
  circle.style.left = '50px';
  circle.style.top = '50px';
  circle.style.width = '100px';
  circle.style.height = '100px';
  circle.style.backgroundColor = '#e74c3c'; // Default red color
  circle.style.border = 'none'; // Default border
  circle.style.position = 'absolute';
  circle.style.borderRadius = '50%'; // Circle shape

  workspace.appendChild(circle);
  makeDraggable(circle);
  makeResizable(circle);
  generateCode();
});

// Update Font Size and Family
document.getElementById('font-size').addEventListener('input', (e) => {
  if (selectedElement && selectedElement.dataset.type === 'text') {
    selectedElement.style.fontSize = `${e.target.value}px`;
    generateCode();
  }
});
document.getElementById('font-family').addEventListener('change', (e) => {
  if (selectedElement && selectedElement.dataset.type === 'text') {
    selectedElement.style.fontFamily = e.target.value;
    generateCode();
  }
});

// Update Opacity
document.getElementById('opacity').addEventListener('input', (e) => {
  if (selectedElement) {
    selectedElement.style.opacity = e.target.value;
    generateCode();
  }
});
// Add Delete Option
const deleteOption = document.createElement('li');
deleteOption.className = 'context-menu-item';
deleteOption.dataset.action = 'delete';
deleteOption.innerText = 'Delete Element';
contextMenu.appendChild(deleteOption);
// Handle Delete Action
contextMenu.addEventListener('click', (e) => {
  if (!selectedElement) return;
  const action = e.target.dataset.action;

  switch (action) {
    case 'delete':
      selectedElement.remove();
      generateCode();
      break;
    // Other context menu actions remain unchanged
  }
});

// Copy Button Functionality
copyBtn.addEventListener('click', () => {
  const code = output.textContent;
  navigator.clipboard.writeText(code).then(() => {
  }).catch(err => {
  });
});

// Theme (Light/Dark)
const lightSide = document.getElementById("light-side");
const darkSide = document.getElementById("dark-side");

function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
}
lightSide.addEventListener("click", () => applyTheme("light"));
darkSide.addEventListener("click", () => applyTheme("dark"));

applyTheme("light");

// Output Resizer
