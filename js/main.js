function showHide(element_id) {
               //Если элемент с id-шником element_id существует
               if (document.getElementById(element_id)) {
                   //Записываем ссылку на элемент в переменную obj
                   var obj = document.getElementById(element_id);
                   //Если css-свойство display не block, то:
                   if (obj.style.display != "flex") {
                       obj.style.display = "flex"; //Показываем элемент
                   }
                   else obj.style.display = "none"; //Скрываем элемент
               }

               if (document.getElementById('btn')) {
                   //Записываем ссылку на элемент в переменную obj
                   var obj = document.getElementById('btn');
                   //Если css-свойство display не block, то:
                   if (obj.style.display != "flex") {
                       obj.style.display = "none"; //Показываем элемент
                   }
               }
               //Если элемент с id-шником element_id не найден, то выводим сообщение
               else alert("Элемент с id: " + element_id + " не найден!");
           }

function web() {
              //Если элемент с id-шником element_id существует
              if (document.getElementById('ui_ux')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('ui_ux');
                  //Если css-свойство display не block, то:
                  if (obj.style.display != "none") {
                      obj.style.display = "none"; //Показываем элемент
                  }
                  else obj.style.display = "flex"; //Скрываем элемент
              }

              if (document.getElementById('mockups')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('mockups');
                  //Если css-свойство display не block, то:
                  if (obj.style.display != "none") {
                      obj.style.display = "none"; //Показываем элемент
                  }
                  else obj.style.display = "flex"; //Скрываем элемент
              }

              if (document.getElementById('web')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('web');
                  //Если css-свойство display не block, то:
                  if (obj.style.background != "rgb(0, 137, 123)" && obj.style.color != "rgb(255, 255, 255)") {
                      obj.style.background = "rgb(0, 137, 123)"; //Показываем элемент
                      obj.style.color = "rgb(255, 255, 255)"; //Показываем элемент
                  } else {
                    obj.style.background = "rgb(255, 255, 255)";
                    obj.style.color = "rgb(0, 0, 0)"; //Показываем элемент
                  }
              }
}

function ui_ux() {
              //Если элемент с id-шником element_id существует
              if (document.getElementById('show_web_design')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('show_web_design');
                  //Если css-свойство display не block, то:
                  if (obj.style.display != "none") {
                      obj.style.display = "none"; //Показываем элемент
                  }
                  else obj.style.display = "flex"; //Скрываем элемент
              }
              if (document.getElementById('mockups')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('mockups');
                  //Если css-свойство display не block, то:
                  if (obj.style.display != "none") {
                      obj.style.display = "none"; //Показываем элемент
                  }
                  else obj.style.display = "flex"; //Скрываем элемент
              }

              if (document.getElementById('ui_ux_design')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('ui_ux_design');
                  //Если css-свойство display не block, то:
                  if (obj.style.background != "rgb(0, 137, 123)" && obj.style.color != "rgb(255, 255, 255)") {
                      obj.style.background = "rgb(0, 137, 123)"; //Показываем элемент
                      obj.style.color = "rgb(255, 255, 255)"; //Показываем элемент
                  } else {
                    obj.style.background = "rgb(255, 255, 255)";
                    obj.style.color = "rgb(0, 0, 0)"; //Показываем элемент
                  }
              }

            }


function mockups() {
              //Если элемент с id-шником element_id существует
              if (document.getElementById('show_web_design')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('show_web_design');
                  //Если css-свойство display не block, то:
                  if (obj.style.display != "none") {
                      obj.style.display = "none"; //Показываем элемент
                  }
                  else obj.style.display = "flex"; //Скрываем элемент
              }
              if (document.getElementById('ui_ux')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('ui_ux');
                  //Если css-свойство display не block, то:
                  if (obj.style.display != "none") {
                      obj.style.display = "none"; //Показываем элемент
                  }
                  else obj.style.display = "flex"; //Скрываем элемент
              }

              if (document.getElementById('mockup')) {
                  //Записываем ссылку на элемент в переменную obj
                  var obj = document.getElementById('mockup');
                  //Если css-свойство display не block, то:
                  if (obj.style.background != "rgb(0, 137, 123)" && obj.style.color != "rgb(255, 255, 255)") {
                      obj.style.background = "rgb(0, 137, 123)"; //Показываем элемент
                      obj.style.color = "rgb(255, 255, 255)"; //Показываем элемент
                  } else {
                    obj.style.background = "rgb(255, 255, 255)";
                    obj.style.color = "rgb(0, 0, 0)"; //Показываем элемент
                  }
              }

            }
