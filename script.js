/*
// Alert at Refresh
window.onbeforeunload = function () {
  return "If you refresh the page, your work will be removed.";
};
// */

let clipboard = '';

// Pop-Up Message
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Toast disappears after 3 seconds
}

// Add Delete Option
const deleteOption = document.createElement('li');
deleteOption.className = 'context-menu-item';
deleteOption.dataset.action = 'delete';
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

// FullScreen the Page
function fullscreenPage() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}
