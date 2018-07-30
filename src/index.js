/**
 * @file LmListPage
 * @author wangxitong(wangxitong@baidu.com)
 */
// import _ from 'lodash';
import {cube} from './math.js';
import printMe from './print.js';
import './style.css';
import Icon from './openBaidu.png';
function component() {
    let element = document.createElement('div');
    // let element = document.createElement('pre');
    let btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    btn.innerHTML = 'click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);


    // element.innerHTML = [
    //     'Hello webpack',
    //     '5 cubed is equal to' + cube(5);
    // ].join('\n\n');

    return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated print module!');
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}