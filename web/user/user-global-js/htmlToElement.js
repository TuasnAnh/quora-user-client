/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


export function htmlToElements(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}