
// Context-Menu of elements // Context Menu for WorkSpace // Menu-Box // Dropdown's

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

  // Buttons
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
      if (borderRadius) selectedElement.style.borderRadius = `${borderRadius}px`;
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

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();

  // Hide all context menus
  document.querySelectorAll('.context-menu').forEach(menu => menu.classList.remove('visible'));

  const element = event.target.closest('.element');
  const insideSelection = selectedElements.includes(event.target);
  let contextMenu = null;

  if (insideSelection) {
    contextMenu = document.getElementById('selector');
  } else if (element) {
    selectedElement = element;
    contextMenu = document.getElementById('context-menu');
  } else if (event.target.id === 'workspace') {
    contextMenu = document.getElementById('workspace-context-menu');
  }

  if (contextMenu) {
    positionContextMenu(contextMenu, event.pageX, event.pageY);
  }
});

// Function to position the context menu within the workspace bounds
function positionContextMenu(menu, x, y) {
  const workspace = document.getElementById('workspace');
  const workspaceRect = workspace.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();

  let posX = x;
  let posY = y;

  // Ensure the menu doesn't overflow on the right
  if (posX + menuRect.width > workspaceRect.right) {
    posX = workspaceRect.right - menuRect.width - 5; // Margin-right: 5px
  }

  // Ensure the menu doesn't overflow on the left
  if (posX < workspaceRect.left) {
    posX = workspaceRect.left + 5; // Margin-left: 5px
  }

  // Ensure the menu doesn't overflow at the bottom
  if (posY + menuRect.height > workspaceRect.bottom) {
    posY = workspaceRect.bottom - menuRect.height - 5; // Margin-bottom: 5px
  }

  // Ensure the menu doesn't overflow at the top
  if (posY < workspaceRect.top) {
    posY = workspaceRect.top + 5; // Margin-top: 5px
  }

  menu.style.left = `${posX}px`;
  menu.style.top = `${posY}px`;
  menu.classList.add('visible');
}

// Hide context menus when clicking anywhere 
document.addEventListener('click', function (event) {
  if (!event.target.closest('.context-menu')) {
    document.querySelectorAll('.context-menu').forEach(menu => menu.classList.remove('visible'));
  }
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

  if (inputFormatDiv.style.display === 'none' || inputFormatDiv.style.display === '') {
    inputFormatDiv.style.display = 'block';
  } else {
    inputFormatDiv.style.display = 'none';
  }
  document.addEventListener('click', function (event) {
    if (!inputFormatDiv.contains(event.target) && !document.getElementById('toggle-button').contains(event.target)) {
      inputFormatDiv.style.display = 'none';
    }
  });
});


// Dropdown for Body Background
document.getElementById('webpage-bg').addEventListener('click', function () {
  const inputFormatDiv = document.getElementById('webpage-bg-d');

  if (inputFormatDiv.style.display === 'none' || inputFormatDiv.style.display === '') {
    inputFormatDiv.style.display = 'block';
  } else {
    inputFormatDiv.style.display = 'none';
  }
  document.addEventListener('click', function (event) {
    if (!inputFormatDiv.contains(event.target) && !document.getElementById('webpage-bg').contains(event.target)) {
      inputFormatDiv.style.display = 'none';
    }
  });
});


// Dropdown for Shapes
document.getElementById('shapes').addEventListener('click', function () {
  const inputFormatDiv = document.getElementById('shapes-d');

  if (inputFormatDiv.style.display === 'none' || inputFormatDiv.style.display === '') {
    inputFormatDiv.style.display = 'block';
  } else {
    inputFormatDiv.style.display = 'none';
  }
  document.addEventListener('click', function (event) {
    if (!inputFormatDiv.contains(event.target) && !document.getElementById('shapes').contains(event.target)) {
      inputFormatDiv.style.display = 'none';
    }
  });
});


// Menu-Box Left ( ☰ )
function toggleMenu() {
  const menu = document.getElementById('menuContent');
  menu.style.left = menu.style.left === '-210px' ? '0px' : '0px';
}
document.addEventListener('click', function (event) {
  const menu = document.getElementById('menuContent');
  const button = document.querySelector('.menu-button');

  if (!button.contains(event.target) && !menu.contains(event.target)) {
    menu.style.left = '-210px';
  }
});


// Dropdown for Other-Menu (...)
const otherSpan = document.getElementById('other');
const otherMenu = document.getElementById('other-menu');

other.addEventListener('click', () => {
  otherMenu.style.display = otherMenu.style.display === 'none' ? 'block' : 'none';
});
// Hide menus when clicking anywhere out side
document.addEventListener('click', (event) => {
  if (!other.contains(event.target) && !otherMenu.contains(event.target)) {
    otherMenu.style.display = 'none';
  }
});
