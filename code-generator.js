
// Code Generatoes in WorkSpace // Elements & Content-Bar

// Generate Code in HTML & CSS 
function generateCode() {
    const elements = document.querySelectorAll('.element');
    let html = '';
    let css = '';

    const bodyBackground = document.getElementById('webpage-color')?.value || '';
    const bodyImage = document.getElementById('webpage-image')?.value || '';

    if (bodyBackground || bodyImage) {
        css += `body {
            background-color: ${bodyBackground || 'transparent'};
            background-image: ${bodyImage || `url('${bodyImage}')`};
            background-position: center;
            background-repeat: no-repeat;
        }
        `;
    }

    elements.forEach((el, index) => {
        const {
            color,
            left,
            top,
            width,
            height,
            transform,
            border,
            borderLeft,
            borderRight,
            borderBottom,
            borderRadius,
            boxShadow,
            backgroundColor,
            opacity,
            textDecoration,
            fontSize,
            fontWeight,
            fontFamily,
            cursor,
        } = el.style;

        const tag = el.dataset.tag || 'div';
        const hoverEffect = el.dataset.hover ? el.dataset.hover : '';

        if (el.dataset.type === 'text') {
            const hrefStart = el.dataset.href ? `<a href="${el.dataset.href}" target="_blank">` : '';
            const hrefEnd = el.dataset.href ? `</a>` : '';
            html += `${hrefStart}<${tag} class="text-${index}">${el.innerText}</${tag}>${hrefEnd}\n`;
            css += `.text-${index} {
                position: absolute;
                color: ${color || '#000'};
                left: ${left || '0px'};
                top: ${top || '0px'};
                width: ${width || 'auto'};
                height: ${height || 'auto'};
                opacity: ${opacity || 1};
                font-size: ${fontSize || '16px'};
                font-weight: ${fontWeight || 'none'};
                font-family: ${fontFamily || 'Arial, sans-serif'};
                text-decoration: ${textDecoration || 'none'};
                transform: ${transform || 'rotate(0deg)'};
            }\n`;
            if (hoverEffect) {
                css += `.text-${index}:hover { ${hoverEffect} }\n`;
            }
        } else if (el.dataset.type === 'image') {
            const hrefStart = el.dataset.href ? `<a href="${el.dataset.href}" target="_blank">` : '';
            const hrefEnd = el.dataset.href ? `</a>` : '';
            html += `${hrefStart}<img class="image-${index}" src="${el.dataset.src}" alt="Image">${hrefEnd}\n`;
            css += `.image-${index} {
                position: absolute;
                left: ${left || '0px'};
                top: ${top || '0px'};
                width: ${width || '100px'};
                height: ${height || '100px'};
                border: ${border || 'none'};
                border-radius: ${borderRadius || '0px'};
                box-shadow: ${boxShadow || 'none'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
            }\n`;
            if (hoverEffect) {
                css += `.image-${index}:hover { ${hoverEffect} }\n`;
            }
        } else if (el.dataset.type === 'input') {
            const inputType = el.dataset.inputType || 'text';
            const placeholder = el.dataset.placeholder || 'Enter text';
            html += `<input class="input-${index}" type="${inputType}" placeholder="${placeholder}">\n`;
            css += `.input-${index} {
                position: absolute;
                top: ${top || '0px'};
                left: ${left || '0px'};
                color: ${color || '#000'};
                width: ${width || '150px'};
                height: ${height || '30px'};
                border: ${border || 'none'};
                font-size: ${fontSize || '16px'};
                font-weight: ${fontWeight || 'none'};
                font-family: ${fontFamily || 'Arial, sans-serif'};
                border-bottom: ${borderBottom || '2px solid black'};
                border-radius: ${borderRadius || 'none'};
                box-shadow: ${boxShadow || 'none'};
                background-color: ${backgroundColor || '#fff'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
            }\n`;
            if (hoverEffect) {
                css += `.input-${index}:hover { ${hoverEffect} }\n`;
            }
        } else if (el.dataset.type === 'button') {
            const buttonText = el.innerText || 'Button';
            html += `<button class="button-${index}" type="button">${buttonText}</button>\n`;
            css += `.button-${index} {
                position: absolute;
                left: ${left || '0px'};
                top: ${top || '0px'};
                width: ${width || '100px'};
                height: ${height || '40px'};
                border: ${border || 'none'};
                font-size: ${fontSize || '16px'};
                font-weight: ${fontWeight || 'none'};
                font-family: ${fontFamily || 'Arial, sans-serif'};
                border-radius: ${borderRadius || '0px'};
                box-shadow: ${boxShadow || 'none'};
                background-color: ${backgroundColor || 'white'};
                color: ${color || 'black'};
                cursor:${cursor || 'pointer'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
            }\n`;
            if (hoverEffect) {
                css += `.button-${index}:hover { ${hoverEffect} }\n`;
            }
        } else {
            html += `<div class="shapes-${index}"></div>\n`;
            css += `.shapes-${index} {
                position: absolute;
                left: ${left || '0px'};
                top: ${top || '0px'};
                width: ${width || '50px'};
                height: ${height || '50px'};
                border: ${border || 'none'};
                border-left: ${borderLeft || 'none'};
                border-right: ${borderRight || 'none'};
                border-bottom: ${borderBottom || 'none'};
                border-radius: ${el.dataset.type === 'circle' ? '50%' : borderRadius || '0px'};
                box-shadow: ${boxShadow || 'none'};
                background-color: ${backgroundColor || 'transparent'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
            }\n`;
            if (hoverEffect) {
                css += `.shapes-${index}:hover { ${hoverEffect} }\n`;
            }
        }
    });

    // Output generated HTML and CSS
    const output = document.getElementById('output'); // Adjust ID as necessary
    if (output) {
        output.textContent = `<style>\n${css}</style>\n${html}`;
    } else {
        console.error('Output element not found!');
    }
}



// Genrate Code in react language
/*
function generateCode() {
const elements = document.querySelectorAll('.element');
let reactComponents = '';

elements.forEach((el, index) => {
    const { color, left, top, width, height, border, borderLeft, borderRight, borderBottom, borderRadius, boxShadow, backgroundColor, opacity, textDecoration } = el.style;
    const tag = el.dataset.tag || 'div';

    if (el.dataset.type === 'text') {
        const hrefStart = el.dataset.href ? `<a href=\"${el.dataset.href}\" target=\"_blank\">` : '';
        const hrefEnd = el.dataset.href ? `</a>` : '';
        const fontSize = el.style.fontSize;
        const fontFamily = el.style.fontFamily;

        reactComponents += `
        ${hrefStart}
        <${tag}
            className="element-${index}"
            style={{
                position: 'absolute',
                color: '${color}',
                left: '${left}',
                top: '${top}',
                width: '${width}',
                height: '${height}',
                opacity: '${opacity}',
                fontSize: '${fontSize}',
                fontFamily: '${fontFamily}',
                textDecoration: '${textDecoration}',
            }}
        >
            ${el.innerText}
        </${tag}>
        ${hrefEnd}`;
    } else if (el.dataset.type === 'image') {
        reactComponents += `
        <img
            className="element-${index}"
            src="${el.dataset.src}"
            alt="Image"
            style={{
                position: 'absolute',
                left: '${left}',
                top: '${top}',
                width: '${width}',
                height: '${height}',
                border: '${border}',
                borderRadius: '${borderRadius}',
                boxShadow: '${boxShadow}',
                opacity: '${opacity}',
            }}
        />`;
    } else if (el.dataset.type === 'input') {
        const placeholder = el.dataset.placeholder || 'Enter text';
        reactComponents += `
        <input
            className="element-${index}"
            type="text"
            placeholder="${placeholder}"
            style={{
                position: 'absolute',
                left: '${left}',
                top: '${top}',
                width: '${width}',
                height: '${height}',
                border: '${border || '1px solid #ccc'}',
                borderRadius: '${borderRadius || '4px'}',
                boxShadow: '${boxShadow || 'none'}',
                backgroundColor: '${backgroundColor || '#fff'}',
                color: '${color || '#000'}',
                opacity: '${opacity || 1}',
            }}
        />`;
    } else if (el.dataset.type === 'rectangle') {
        reactComponents += `
        <div
            className="element-${index}"
            style={{
                position: 'absolute',
                left: '${left}',
                top: '${top}',
                width: '${width}',
                height: '${height}',
                backgroundColor: '${backgroundColor || 'gray'}',
                border: '${border || 'none'}',
            }}
        />`;
    } else if (el.dataset.type === 'circle') {
        reactComponents += `
        <div
            className="element-${index}"
            style={{
                position: 'absolute',
                left: '${left}',
                top: '${top}',
                width: '${width}',
                height: '${height}',
                backgroundColor: '${backgroundColor || '#e74c3c'}',
                border: '${border || 'none'}',
                borderRadius: '50%',
            }}
        />`;
    } else if (el.dataset.type === 'triangle') {
        reactComponents += `
        <div
            className="element-${index}"
            style={{
                position: 'absolute',
                left: '${left}',
                top: '${top}',
                width: '0',
                height: '0',
                borderLeft: '${borderLeft || '50px solid transparent'}',
                borderRight: '${borderRight || '50px solid transparent'}',
                borderBottom: '${borderBottom || '100px solid green'}',
            }}
        />`;
    }
});

const outputCode = `import React from 'react';

const GeneratedComponents = () => (
<div className="workspace">
    ${reactComponents}
</div>
);

export default GeneratedComponents;`;

output.textContent = outputCode;
}
*/

// Elements and Controls-Bar
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
    textElement.style.textDecoration = 'none';
    textElement.style.transform = 'rotatae(0deg)';

    workspace.appendChild(textElement);
    makeDraggable(textElement);
    makeResizable(textElement);
    generateCode();
});

// Add Input Tag
document.getElementById('add-button').addEventListener('click', () => {
    const inputElement = document.createElement('input');
    inputElement.className = 'element';
    inputElement.dataset.type = 'input';
    inputElement.dataset.placeholder = 'Input Box';
    inputElement.type = 'text';
    inputElement.placeholder = 'Input Box';
    inputElement.style.position = 'absolute';
    inputElement.style.left = '150px';
    inputElement.style.top = '50px';
    inputElement.style.width = '150px';
    inputElement.style.height = '30px';
    inputElement.style.transform = 'rotatae(0deg)';

    workspace.appendChild(inputElement);
    makeDraggable(inputElement);
    makeResizable(inputElement);
    generateCode();
});
// Input Type="" Selector & PlaceHolder

// Add Button Tag
document.getElementById('add-button-tag').addEventListener('click', () => {
    const buttonElement = document.createElement('button');
    buttonElement.className = 'element';
    buttonElement.dataset.type = 'button';
    buttonElement.contentEditable = true;
    buttonElement.innerText = 'Button Text';
    buttonElement.style.left = '50px';
    buttonElement.style.top = '100px';
    buttonElement.style.width = '150px';
    buttonElement.style.height = '50px';
    buttonElement.style.textDecoration = 'none';
    buttonElement.style.transform = 'rotatae(0deg)';

    workspace.appendChild(buttonElement);
    makeDraggable(buttonElement);
    makeResizable(buttonElement);
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
    imageElement.style.left = '80px';
    imageElement.style.top = '80px';
    imageElement.style.width = '110px';
    imageElement.style.height = '110px';
    imageElement.style.backgroundImage = `url(${imageUrl})`;
    imageElement.style.backgroundSize = 'cover';
    imageElement.style.backgroundPosition = 'center';
    imageElement.style.transform = 'rotatae(0deg)';

    workspace.appendChild(imageElement);
    makeDraggable(imageElement);
    makeResizable(imageElement);
    generateCode();
});

// Add Line
document.getElementById('add-line').addEventListener('click', () => {
    const line = document.createElement('div');
    line.className = 'element';
    line.dataset.type = 'line';
    line.style.left = '50px';
    line.style.top = '40px';
    line.style.width = '100px';
    line.style.height = '2px';
    line.style.backgroundColor = 'black';
    line.style.border = 'none';
    line.style.position = 'absolute';
    line.style.transform = 'rotatae(0deg)';

    workspace.appendChild(line);
    makeDraggable(line);
    makeResizable(line);
    generateCode();
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
    rect.style.transform = 'rotatae(0deg)';

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


// Webpage BG Color
document.getElementById('webpage-color').addEventListener('input', (e) => {
    if (selectedElement) {
        selectedElement.style.backgroundColor = e.target.value;
        generateCode();
    }
});

// Webpage BG Image
document.addEventListener("DOMContentLoaded", function () {
    const bodyImage = document.getElementById("webpage-image");

    bodyImage.addEventListener("click", () => {
        const backgroundImage = prompt("Enter Image URL:");
        if (backgroundImage) {
            selectedElement.style.backgroundImage = `url('${backgroundImage}')`;
        }
    });
});


// Update Font Size
document.getElementById('font-size').addEventListener('input', (e) => {
    if (selectedElement) {
        selectedElement.style.fontSize = `${e.target.value}px`;
        generateCode();
    }
});

//Font Weight
document.getElementById('font-weight').addEventListener('change', (e) => {
    if (selectedElement) {
        selectedElement.style.fontWeight = e.target.value;
        generateCode();
    }
});

// Font Family
document.getElementById('font-family').addEventListener('change', (e) => {
    if (selectedElement) {
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
let selectionBox = null;

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

// Add Triangle
document.getElementById('add-triangle').addEventListener('click', () => {
    const tria = document.createElement('div');
    tria.className = 'element';
    tria.dataset.type = 'triangle';
    tria.style.left = '50px';
    tria.style.top = '50px';
    tria.style.position = 'absolute';
    tria.style.width = '0';
    tria.style.height = '0';
    tria.style.borderLeft = '50px solid transparent';
    tria.style.borderRight = '50px solid transparent';
    tria.style.borderBottom = '100px solid green'; // Triangle color
    tria.style.transform = 'rotatae(0deg)';

    workspace.appendChild(tria);
    makeDraggable(tria);
    // Make triangle resizable by adjusting its border sizes
    makeResizableCustom(tria);
    generateCode();
});
// Custom Resizable Function for Triangle
function makeResizableCustom(triangle) {
    const resizer = document.createElement('div');
    resizer.style.width = '10px';
    resizer.style.height = '10px';
    resizer.style.background = 'blue';
    resizer.style.position = 'absolute';
    resizer.style.right = '-5px';
    resizer.style.bottom = '-5px';
    resizer.style.cursor = 'se-resize';
    triangle.appendChild(resizer);

    resizer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const initialBorderBottom = parseInt(triangle.style.borderBottom.match(/\d+/)[0], 10);
        const initialBorderLeft = parseInt(triangle.style.borderLeft.match(/\d+/)[0], 10);
        function onMouseMove(e) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            // Update border sizes to resize the triangle
            triangle.style.borderLeft = `${initialBorderLeft + deltaX}px solid transparent`;
            triangle.style.borderRight = `${initialBorderLeft + deltaX}px solid transparent`;
            triangle.style.borderBottom = `${initialBorderBottom + deltaY}px solid green`;
            generateCode();
        }
        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}

// Copy Button Functionality
copyBtn.addEventListener('click', () => {
    const code = output.textContent;
    navigator.clipboard.writeText(code).then(() => {
    }).catch(err => {
    });
});