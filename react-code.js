
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