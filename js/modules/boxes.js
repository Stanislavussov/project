import {getResource} from '../services/services';

function boxes() {
        
    // Classes for boxes

   class Box {
    constructor(src, alt, title, descr, price, parentSelector, ...classes){
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.descr = descr;
         this.price = price;
         this.parent = document.querySelector(parentSelector);
         this.classes = classes;
         this.transfer = 27;
         this.changeToUAH();
         } 

         changeToUAH() {
             this.price *= this.transfer;
         }

         render(){
             const element = document.createElement('div');

             if (this.classes.length === 0){
                 this.element = 'menu__item';
                 element.classList.add('menu__item');
             } else {
                 this.classes.forEach(className => element.classList.add(className));
             } 

             element.innerHTML = `
             
                 <img src=${this.src} alt=${this.alt}>
                 <h3 class="menu__item-subtitle">${this.title}</h3>
                 <div class="menu__item-descr">${this.descr}</div>
                 <div class="menu__item-divider"></div>
                 <div class="menu__item-price">
                     <div class="menu__item-cost">Цена</div>
                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
             `;
             this.parent.append(element);
         }
     }

     // 1) При помощи запроса на сервер json server мы получаем массив, который содержит меню (с объектами)
     // 2) Так как это массив, его можно перебрать с помощью forEach
     // 3) После перебора, тот объект который находится внутри, мы его деструктуризируем по отдельным частям.

     // 4) Эти же части передаем во внутрь конструктора нашего класса, который создает новую карточку на странице (новый Box) и сразу его render()
 // getResource('http://localhost:3000/menu')
 //     .then(data => {
 //         /* Деструктуризация объекта, когда мы из объекта вытаскиваем разные свойства в качестве отдельной переменной. Выносим это в фигурные скобки. img = вытаскиваем свойство img из db.json и не забыть все обернуть в круглые скобки */
 //         data.forEach(({img, altimg, title, descr, price}) => {
 //             new Box(img, altimg, title, descr, price, '.menu .container').render();
 //         });
 //     });



 getResource('http://localhost:3000/menu')
     .then(data => {
         data.forEach(({img, alt, title, descr, price}) => {
             new Box(img, alt, title, descr, price, '.menu .container').render();
         });
     });

}

export default boxes;