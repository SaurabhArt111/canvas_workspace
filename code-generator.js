
// Code Generated in WorkSpace // Elements & Content-Bar

// Generate Code in HTML & CSS 
function generateCode() {
    const elements = document.querySelectorAll('.element');
    let html = '';
    let css = '';

    const bodyBackground = document.getElementById('webpage-color')?.value || '';
    const bodyBackground1 = document.getElementById('webpage-color1')?.value || '';

    if (bodyBackground || bodyImage) {
        css += `body {
            background: linear-gradient(to bottom, ${bodyBackground}, ${bodyBackground1});
            width: calc(100% - 100px);
            height: auto;
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
            borderBottom,
            borderRadius,
            backgroundSize,
            backgroundRepeat,
            backgroundPosition,
            boxShadow,
            backgroundColor,
            opacity,
            textDecoration,
            fontSize,
            fontWeight,
            fontFamily,
            cursor,
            clipPath,
            transition,
        } = el.style;

        const tag = el.dataset.tag || 'div';
        const hoverEffect = el.dataset.hover ? el.dataset.hover : '';

        if (el.dataset.type === 'text') {
            const hrefStart = el.dataset.href ? `<a href="${el.dataset.href}" target="_blank">` : '';
            const hrefEnd = el.dataset.href ? `</a>` : '';
            html += `${hrefStart}<${tag} class="text-${index}">${el.innerText}</${tag}>${hrefEnd}\n`;
            css += `.text-${index} {
                position: absolute;
                color: ${color || 'red'};
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
                transition: ${transition || 'color 0.3s ease'};
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
                background-size: ${backgroundSize || 'contain'};
                background-repeat: ${backgroundRepeat || 'no-repeat'};
                background-position: ${backgroundPosition || 'center'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
            }\n`;
            if (hoverEffect) {
                css += `.image-${index}:hover { ${hoverEffect} }\n`;
            }
        } 
        else if (el.dataset.type === 'video') {
            html += `<video class="video-${index}" src="${el.dataset.src}" controls></video>\n`;
            css += `.video-${index} {
                position: absolute;
                left: ${left || '0px'};
                top: ${top || '0px'};
                width: ${width || '200px'};
                height: ${height || '150px'};
                border: ${border || 'none'};
                border-radius: ${borderRadius || '0px'};
                box-shadow: ${boxShadow || 'none'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
            }\n`;
        }
        else if (el.dataset.type === 'audio') {
            html += `<audio class="audio-${index}" src="${el.dataset.src}" controls autoplay loop></audio>\n`;
            css += `.audio-${index} {
                position: absolute;
                left: ${left || '0px'};
                top: ${top || '0px'};
                width: ${width || '200px'};
                height: ${height || '50px'};
                opacity: ${opacity || 1};
            }\n`;
        }
         else if (el.dataset.type === 'input') {
            const inputType = el.dataset.inputType || 'text';
            const placeholder = el.dataset.placeholder || 'Enter text';
            html += `<input class="input-${index}" type="${inputType}" placeholder="${placeholder}" required>\n`;
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
                border-radius: ${borderRadius || '3px'};
                background-color: ${backgroundColor || 'rgba(0,0,0,0.3)'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
                transition: ${transition || 'background-color 0.3s ease'};
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
                cursor: ${cursor || 'pointer'};
                opacity: ${opacity || 1};
                transform: ${transform || 'rotate(0deg)'};
                transition: ${transition || 'background-color 0.3s ease'};
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
                width: ${width || '150px'};
                height: ${height || '150px'};
                border: ${border || 'none'};
                clip-path: ${el.dataset.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'}; 
                border-radius: ${el.dataset.type === 'circle' ? '50%' : '0px'};
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
    const output = document.getElementById('output'); 
    if (output) {
        output.value = `<style>\n${css}</style>\n${html}`;
    } else {
        console.error('Output element not found!');
    }
}


// Elements and Controls-Bar //

// Workspace BG Color set by user
document.getElementById('webpage-color').addEventListener('input', (e) => {
    if (selectedElement) {
        selectedElement.style.backgroundColor = e.bodyBackground.value;
        selectedElement.style.backgroundColor1 = e.backgroundColor1.value;
        generateCode();
    }
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
    textElement.style.minWidth = '100px';  
    textElement.style.width = '100px';
    textElement.style.height = '30px';
    textElement.style.color = 'rgb(134, 0, 164)';
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
    inputElement.style.color = 'rgb(134, 0, 164)';
    inputElement.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
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
    buttonElement.style.color = 'rgb(0, 0, 0)';
    buttonElement.style.textDecoration = 'none';
    buttonElement.style.backgroundColor = '#1dad00';
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
    imageElement.style.width = '150px';
    imageElement.style.height = '150px';
    imageElement.style.backgroundImage = `url(${imageUrl})`;
    imageElement.style.backgroundSize = 'contain';
    imageElement.style.backgroundRepeat = 'no-repeat';
    imageElement.style.backgroundPosition = 'center';
    imageElement.style.transform = 'rotate(0deg)';

    workspace.appendChild(imageElement);
    makeDraggable(imageElement);
    makeResizable(imageElement);
    generateCode();
});

// Add Video Element
document.getElementById('add-video').addEventListener('click', () => {
    const videoUrl = prompt('Enter Video URL (MP4, WebM, etc.):');
    if (!videoUrl) return;

    const videoElement = document.createElement('div');
    videoElement.className = 'element';
    videoElement.dataset.type = 'video';
    videoElement.dataset.src = videoUrl;
    videoElement.style.left = '80px';
    videoElement.style.top = '80px';
    videoElement.style.width = '200px';
    videoElement.style.height = '150px';
    const videoTag = document.createElement('video');
    videoTag.src = videoUrl;
    videoTag.controls = true;
    videoTag.style.width = '100%';
    videoTag.style.height = '100%';

    videoElement.appendChild(videoTag);
    workspace.appendChild(videoElement);
    makeDraggable(videoElement);
    makeResizable(videoElement);
    generateCode();
});

// Add Audio Element
document.getElementById('add-audio').addEventListener('click', () => {
    const audioUrl = prompt('Enter Audio URL (MP3, OGG, etc.):');
    if (!audioUrl) return;

    const audioElement = document.createElement('div');
    audioElement.className = 'element';
    audioElement.dataset.type = 'audio';
    audioElement.dataset.src = audioUrl;
    audioElement.style.left = '80px';
    audioElement.style.top = '80px';
    audioElement.style.width = '200px';
    audioElement.style.height = '50px';
    const audioTag = document.createElement('audio');
    audioTag.src = audioUrl;
    audioTag.controls = true;
    audioTag.style.width = '100%';

    audioElement.appendChild(audioTag);
    workspace.appendChild(audioElement);
    makeDraggable(audioElement);
    generateCode();
});


// Add Line
document.getElementById('add-line').addEventListener('click', () => {
    const line = document.createElement('div');
    line.className = 'element';
    line.dataset.type = 'line';
    line.style.left = '100px';
    line.style.top = '130px';
    line.style.width = '150px';
    line.style.height = '5px';
    line.style.backgroundColor = 'rgb(134, 0, 164)'; // Default purple color
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
    rect.style.left = '150px';
    rect.style.top = '50px';
    rect.style.width = '100px';
    rect.style.height = '100px';
    rect.style.backgroundColor = 'gray'; // Default gray color
    rect.style.border = 'none';  
    rect.style.position = 'absolute';
    rect.style.transform = 'rotatae(0deg)';

    workspace.appendChild(rect);
    makeDraggable(rect);
    makeResizable(rect);
    generateCode();
});

// Add Triangle
document.getElementById('add-triangle').addEventListener('click', () => {
    const tria = document.createElement('div');
    tria.className = 'element';
    tria.dataset.type = 'triangle';
    tria.style.left = '150px';
    tria.style.top = '50px';
    tria.style.width = '100px';
    tria.style.height = '100px';
    tria.style.backgroundColor = 'green'; // Default green color
    tria.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'; // Triangle shape
    tria.style.position = 'absolute';
    tria.style.transform = 'rotatae(0deg)';

    workspace.appendChild(tria);
    makeDraggable(tria);
    makeResizable(tria);
    generateCode();
});

// Add Circle
document.getElementById('add-circle').addEventListener('click', () => {
    const circle = document.createElement('div');
    circle.className = 'element';
    circle.dataset.type = 'circle';
    circle.style.left = '150px';
    circle.style.top = '50px';
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.backgroundColor = '#e74c3c'; // Default red color
    circle.style.border = 'none'; 
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%'; // Circle shape

    workspace.appendChild(circle);
    makeDraggable(circle);
    makeResizable(circle);
    generateCode();
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
            generateCode(); 
        }
    } else {
        alert('No element selected.');
    }
});

// Color picker functionality
const colorPicker = document.getElementById('colorPicker');
const colorValue = document.getElementById('colorValue');

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorValue.textContent = `Color: ${selectedColor}`;

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
            workspace.insertBefore(nextElement, selectedElement);
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
            workspace.insertBefore(selectedElement, prevElement); 
        }
        generateCode();
    } else {
        alert('No element selected. Click on an element to select it.');
    }
});

// Copy Button Functionality
copyBtn.addEventListener('click', () => {
    const code = output.value;
    navigator.clipboard.writeText(code).then(() => {
    }).catch(err => {
    });
});

// Update button for output text-area
document.getElementById('update-code').addEventListener('click', () => {
    const outputText = document.getElementById('output').value;
    // Extract CSS and HTML separately
    const styleMatch = outputText.match(/<style>([\s\S]*?)<\/style>/);
    const extractedCSS = styleMatch ? styleMatch[1] : '';
    const extractedHTML = outputText.replace(/<style>[\s\S]*?<\/style>/, '').trim();

    // Update workspace with new HTML
    const workspace = document.getElementById('workspace');
    workspace.innerHTML = extractedHTML;

    // Apply new styles dynamically
    let styleTag = document.getElementById('dynamic-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = extractedCSS;
    

    console.log('Workspace updated successfully!');
});
