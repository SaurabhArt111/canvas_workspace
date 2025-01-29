
// Context-Menu of elements // Context Menu for WorkSpace // Menu-Box

// Context-Menu for Elements of WorkSpace
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
      const border = prompt('Enter border (e.g., "1px solid black")');
      if (border) selectedElement.style.border = border;
      break;
    case 'add-border-radius':
      const borderRadius = prompt('Enter border-radius (e.g., "10px")');
      if (borderRadius) selectedElement.style.borderRadius = borderRadius;
      break;
    case 'add-shadow':
      const boxShadow = prompt('Enter box-shadow (e.g., "5px 5px 10px gray")');
      if (boxShadow) selectedElement.style.boxShadow = boxShadow;
      break;
    case 'add-hyperlink':
      const href = prompt('Enter hyperlink URL:');
      if (href) {
        selectedElement.dataset.href = href;
      }
      break;
    case 'add-hover':
      const hoverStyles = prompt('Enter hover styles (e.g., "background-color: gray; color: white")');
      if (hoverStyles) {
        selectedElement.dataset.hover = hoverStyles;
      }
      break;
    case 'delete':
      selectedElement.remove();
      break;
  }
  generateCode();
});

// Context menu logic
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
    case 'cut':
      clipboard = selectedElement.outerHTML;
      selectedElement.remove();
      break;
    case 'copy':
      clipboard = selectedElement.outerHTML;
      break;
    case 'paste':
      if (clipboard) {
        workspace.insertAdjacentHTML('beforeend', clipboard);
        const lastElement = workspace.lastElementChild;
        // Adjust position slightly to avoid overlap
        lastElement.style.left = `${parseInt(lastElement.style.left || 0) + 10}px`;
        lastElement.style.top = `${parseInt(lastElement.style.top || 0) + 10}px`;
        // Reinitialize draggable and resizable functionalities
        makeElementDraggable(lastElement);
        makeResizable(lastElement);
      }
      break;
    case 'duplicate':
      const duplicate = selectedElement.cloneNode(true);
      workspace.appendChild(duplicate);

      // Adjust position slightly to avoid overlap
      duplicate.style.left = `${parseInt(duplicate.style.left || 0) + 10}px`;
      duplicate.style.top = `${parseInt(duplicate.style.top || 0) + 10}px`;

      // Reinitialize draggable and resizable functionalities
      makeElementDraggable(duplicate);
      makeResizable(duplicate);
      break;
    case 'flip-horizontal':
      const scaleX = selectedElement.style.transform.includes('scaleX(-1)') ? 'scaleX(1)' : 'scaleX(-1)';
      selectedElement.style.transform = scaleX;
      break;
    case 'flip-vertical':
      const scaleY = selectedElement.style.transform.includes('scaleY(-1)') ? 'scaleY(1)' : 'scaleY(-1)';
      selectedElement.style.transform = scaleY;
      break;
    case 'delete':
      selectedElement.remove();
      break;
  }
  generateCode();
});

// Menu-Box
function toggleMenu() {
  const menu = document.getElementById('menuContent');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
// Close the menu if clicked outside
document.addEventListener('click', function (event) {
  const menu = document.getElementById('menuContent');
  const button = document.querySelector('.menu-button');

  if (!button.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = 'none';
  }
});


// Context-Menu for WorkSpace
document.getElementById('workspace').addEventListener('contextmenu', function (event) {
  event.preventDefault();
  const contextMenu = document.getElementById('workspace-context-menu');
  contextMenu.style.left = `${event.pageX}px`;
  contextMenu.style.top = `${event.pageY}px`;
  contextMenu.classList.add('visible');
});
document.addEventListener('click', function () {
  const contextMenu = document.getElementById('workspace-context-menu');
  contextMenu.classList.remove('visible');
});


// Dropdown for Font-Format Menu
const fontFormatButton = document.getElementById('font-format');
const fontFormatMenu = document.getElementById('font-format-menu');

fontFormatButton.addEventListener('click', () => {
  fontFormatMenu.style.display = fontFormatMenu.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', (event) => {
  if (!fontFormatButton.contains(event.target) && !fontFormatMenu.contains(event.target)) {
    fontFormatMenu.style.display = 'none';
  }
});


// Dropdown for Input Type
document.getElementById('toggle-button').addEventListener('click', function () {
  const inputFormatDiv = document.getElementById('input-format');
  
  // Toggle visibility of the input format menu
  if (inputFormatDiv.style.display === 'none' || inputFormatDiv.style.display === '') {
    inputFormatDiv.style.display = 'block';
  } else {
    inputFormatDiv.style.display = 'none';
  }

  // Close the dropdown if clicking anywhere outside
  document.addEventListener('click', function(event) {
    if (!inputFormatDiv.contains(event.target) && !document.getElementById('toggle-button').contains(event.target)) {
      inputFormatDiv.style.display = 'none';
    }
  });
});


// Dropdown for Webpage-BG
document.getElementById('webpage-bg').addEventListener('click', function () {
    const inputFormatDiv = document.getElementById('webpage-bg-d');
    
    if (inputFormatDiv.style.display === 'none' || inputFormatDiv.style.display === '') {
      inputFormatDiv.style.display = 'block';
    } else {
      inputFormatDiv.style.display = 'none';
    }
      document.addEventListener('click', function(event) {
      if (!inputFormatDiv.contains(event.target) && !document.getElementById('webpage-bg').contains(event.target)) {
        inputFormatDiv.style.display = 'none';
      }
    });
  });
  