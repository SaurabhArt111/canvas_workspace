
// Resizer & Resizer-handles // Select & Unselect // Dragable // Rotate Element

// Select Element
const copyBtn = document.querySelector('#copy-btn')
const workspace = document.getElementById('workspace');
const output = document.getElementById('output');
const contextMenu = document.getElementById('context-menu');
let selectedElement = null;

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

// Select or Unselect
workspace.addEventListener('click', (e) => {
    // Check if an element was clicked
    if (e.target.classList.contains('element')) {
        if (selectionBox) {
            workspace.removeChild(selectionBox); // Remove previous selection box
        }
        const element = e.target;
        selectedElement = element;
        // Create selection box
        selectionBox = document.createElement('div');
        selectionBox.className = 'selection-box';
        selectionBox.style.position = 'absolute';
        selectionBox.style.border = '2px solid #8000af';
        selectionBox.style.pointerEvents = 'none'; // Ensure it doesn't interfere with user interaction
        selectionBox.style.zIndex = '100000';
        workspace.appendChild(selectionBox);
        // Adjust selection box to wrap the selected element
        updateSelectionBoxPosition();

        // Add resize handles
        addResizeHandles(selectionBox);
    } else {
        // Remove selection box when clicking outside elements
        if (selectionBox) {
            workspace.removeChild(selectionBox);
            selectionBox = null;
            selectedElement = null;
        }
    }
});
// Update Selection Box Position
function updateSelectionBoxPosition() {
    if (!selectedElement || !selectionBox) return;
    const rect = selectedElement.getBoundingClientRect();
    const workspaceRect = workspace.getBoundingClientRect();
    // Position the selection box
    selectionBox.style.left = `${rect.left - workspaceRect.left}px`;
    selectionBox.style.top = `${rect.top - workspaceRect.top}px`;
    selectionBox.style.width = `${rect.width}px`;
    selectionBox.style.height = `${rect.height}px`;
}

// Resizer + Resizer Handle
function makeResizable(el) {
    const positions = [
        'top-left', 'top-right', 'bottom-left', 'bottom-right',
        'top', 'bottom', 'left', 'right'
    ];
    positions.forEach((pos) => {
        const handle = document.createElement('div');
        handle.className = `resizer ${pos}`;
        handle.dataset.position = pos;
        handle.style.position = 'absolute';
        handle.style.width = '8px';
        handle.style.height = '8px';
        handle.style.background = '';
        handle.style.borderRadius = '50%';

        // Get cursor style for a given position
        function getCursorForPosition(pos) {
            switch (pos) {
                case 'top-left':
                case 'bottom-right':
                    return 'nwse-resize';
                case 'top-right':
                case 'bottom-left':
                    return 'nesw-resize';
                case 'top':
                case 'bottom':
                    return 'ns-resize';
                case 'left':
                case 'right':
                    return 'ew-resize';
                default:
                    return 'default';
            }
        }
        // Position of handles
        switch (pos) {
            case 'top-left':
                handle.style.left = `-4px`;
                handle.style.top = `-4px`;
                handle.style.cursor = 'nwse-resize';
                break;
            case 'top-right':
                handle.style.right = `-4px`;
                handle.style.top = `-4px`;
                handle.style.cursor = 'nesw-resize';
                break;
            case 'bottom-left':
                handle.style.left = `-4px`;
                handle.style.bottom = `-4px`;
                handle.style.cursor = 'nesw-resize';
                break;
            case 'bottom-right':
                handle.style.right = `-4px`;
                handle.style.bottom = `-4px`;
                handle.style.cursor = 'nwse-resize';
                break;
            case 'top':
                handle.style.top = `-4px`;
                handle.style.left = `50%`;
                handle.style.transform = 'translateX(-50%)';
                handle.style.cursor = 'ns-resize';
                break;
            case 'bottom':
                handle.style.bottom = `-4px`;
                handle.style.left = `50%`;
                handle.style.transform = 'translateX(-50%)';
                handle.style.cursor = 'ns-resize';
                break;
            case 'left':
                handle.style.left = `-4px`;
                handle.style.top = `50%`;
                handle.style.transform = 'translateY(-50%)';
                handle.style.cursor = 'ew-resize';
                break;
            case 'right':
                handle.style.right = `-4px`;
                handle.style.top = `50%`;
                handle.style.transform = 'translateY(-50%)';
                handle.style.cursor = 'ew-resize';
                break;
        }
        el.appendChild(handle);

        // Enable's Resizing with Handles
        handle.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            const position = handle.dataset.position;
            const startX = e.pageX;
            const startY = e.pageY;
            const startWidth = parseInt(window.getComputedStyle(el).width, 10);
            const startHeight = parseInt(window.getComputedStyle(el).height, 10);
            const startLeft = parseInt(window.getComputedStyle(el).left, 10);
            const startTop = parseInt(window.getComputedStyle(el).top, 10);

            function resizeHandler(event) {
                const dx = event.pageX - startX;
                const dy = event.pageY - startY;
                switch (position) {
                    case 'top-left':
                        el.style.width = `${startWidth - dx}px`;
                        el.style.height = `${startHeight - dy}px`;
                        el.style.left = `${startLeft + dx}px`;
                        el.style.top = `${startTop + dy}px`;
                        break;
                    case 'top-right':
                        el.style.width = `${startWidth + dx}px`;
                        el.style.height = `${startHeight - dy}px`;
                        el.style.top = `${startTop + dy}px`;
                        break;
                    case 'bottom-left':
                        el.style.width = `${startWidth - dx}px`;
                        el.style.height = `${startHeight + dy}px`;
                        el.style.left = `${startLeft + dx}px`;
                        break;
                    case 'bottom-right':
                        el.style.width = `${startWidth + dx}px`;
                        el.style.height = `${startHeight + dy}px`;
                        break;
                    case 'top':
                        el.style.height = `${startHeight - dy}px`;
                        el.style.top = `${startTop + dy}px`;
                        break;
                    case 'bottom':
                        el.style.height = `${startHeight + dy}px`;
                        break;
                    case 'left':
                        el.style.width = `${startWidth - dx}px`;
                        el.style.left = `${startLeft + dx}px`;
                        break;
                    case 'right':
                        el.style.width = `${startWidth + dx}px`;
                        break;
                }
                generateCode();
            }
            function stopResizeHandler() {
                document.removeEventListener('mousemove', resizeHandler);
                document.removeEventListener('mouseup', stopResizeHandler);
            }
            document.addEventListener('mousemove', resizeHandler);
            document.addEventListener('mouseup', stopResizeHandler);
        });
    });
}


// Function to make an element draggable
function makeElementDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - parseInt(element.style.left || 0);
        offsetY = e.clientY - parseInt(element.style.top || 0);
        element.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        element.style.cursor = 'grab';
    });

    element.style.cursor = 'grab'; // Set initial cursor to "grab"
}
// Make existing elements draggable
document.querySelectorAll('.element').forEach((el) => {
    makeElementDraggable(el);
});


// Update Selection Box Position
function updateSelectionBoxPosition() {
    if (!selectedElement || !selectionBox) return;
    const rect = selectedElement.getBoundingClientRect();
    const workspaceRect = workspace.getBoundingClientRect();
    selectionBox.style.left = `${rect.left - workspaceRect.left}px`;
    selectionBox.style.top = `${rect.top - workspaceRect.top}px`;
    selectionBox.style.width = `${rect.width}px`;
    selectionBox.style.height = `${rect.height}px`;

    if (!selectionBox.querySelector('.rotation-handle')) {
        addRotationHandle(selectionBox);
    }
}

// Get Current Rotation Angle
function getCurrentRotation(element) {
    const style = window.getComputedStyle(element);
    const matrix = style.transform;
    if (matrix === 'none') return 0;
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angle < 0 ? angle + 360 : angle;
}

 /* Selct or unselect & Selector-Box */

// Select or Unselect
workspace.addEventListener('click', (e) => {
    // Check if an element was clicked
    if (e.target.classList.contains('element')) {
        if (selectionBox) {
            workspace.removeChild(selectionBox); // Remove previous selection box
        }
        const element = e.target;
        selectedElement = element;
        // Create selection box
        selectionBox = document.createElement('div');
        selectionBox.className = 'selection-box';
        selectionBox.style.position = 'absolute';
        selectionBox.style.border = '2px solid #8000af';
        selectionBox.style.pointerEvents = 'none'; // Ensure it doesn't interfere with user interaction
        selectionBox.style.zIndex = '100000';
        workspace.appendChild(selectionBox);
        // Adjust selection box to wrap the selected element
        updateSelectionBoxPosition();

        // Add resize handles
        addResizeHandles(selectionBox);
    } else {
        // Remove selection box when clicking outside elements
        if (selectionBox) {
            workspace.removeChild(selectionBox);
            selectionBox = null;
            selectedElement = null;
        }
    }
});
// dragable selector

// Update Selection Box Position
function updateSelectionBoxPosition() {
    if (!selectedElement || !selectionBox) return;
    const rect = selectedElement.getBoundingClientRect();
    const workspaceRect = workspace.getBoundingClientRect();
    selectionBox.style.left = `${rect.left - workspaceRect.left}px`;
    selectionBox.style.top = `${rect.top - workspaceRect.top}px`;
    selectionBox.style.width = `${rect.width}px`;
    selectionBox.style.height = `${rect.height}px`;
}

// Selection Box
let selectionRect = null;
let startX = 0, startY = 0;
let selectedElements = [];
let isDragging = false;

workspace.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;

    startX = e.clientX;
    startY = e.clientY;

    selectionRect = document.createElement('div');
    selectionRect.className = 'selection-rect';
    selectionRect.style.position = 'absolute';
    selectionRect.style.border = '2px dashed rgb(159, 16, 211)';
    selectionRect.style.background = 'rgba(137, 16, 181, 0.36)';
    selectionRect.style.pointerEvents = 'none';
    workspace.appendChild(selectionRect);

    function onMouseMove(event) {
        let x = Math.min(event.clientX, startX);
        let y = Math.min(event.clientY, startY);
        let width = Math.abs(event.clientX - startX);
        let height = Math.abs(event.clientY - startY);

        selectionRect.style.left = `${x - workspace.offsetLeft}px`;
        selectionRect.style.top = `${y - workspace.offsetTop}px`;
        selectionRect.style.width = `${width}px`;
        selectionRect.style.height = `${height}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        selectElements();
        workspace.removeChild(selectionRect);
        selectionRect = null;

        if (selectedElements.length > 0) {
            enableGroupMovement();
        }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function selectElements() {
    const rect = selectionRect.getBoundingClientRect();
    selectedElements = [];

    document.querySelectorAll('.element').forEach(el => {
        const elRect = el.getBoundingClientRect();
        if (
            elRect.left >= rect.left &&
            elRect.right <= rect.right &&
            elRect.top >= rect.top &&
            elRect.bottom <= rect.bottom
        ) {
            selectedElements.push(el);
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });
}

function enableGroupMovement() {
    let initialX, initialY;
    let elementOffsets = [];

    function onDragStart(e) {
        if (!selectedElements.includes(e.target)) return;

        isDragging = true;
        initialX = e.clientX;
        initialY = e.clientY;

        elementOffsets = selectedElements.map(el => ({
            el,
            startLeft: parseFloat(el.style.left || 0),
            startTop: parseFloat(el.style.top || 0),
        }));

        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
    }

    function onDragMove(e) {
        if (!isDragging) return;

        const dx = e.clientX - initialX;
        const dy = e.clientY - initialY;

        elementOffsets.forEach(({ el, startLeft, startTop }) => {
            el.style.position = 'absolute';
            el.style.left = `${startLeft + dx}px`;
            el.style.top = `${startTop + dy}px`;
        });
    }

    function onDragEnd() {
        isDragging = false;
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
    }

    workspace.addEventListener('mousedown', onDragStart);
}
