(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\n<app-todos></app-todos>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-todo/add-todo.component */ "./src/app/components/add-todo/add-todo.component.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/popup/popup.component */ "./src/app/components/popup/popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_6__["TodosComponent"],
                _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
                _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_8__["AddTodoComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    padding: 10px;\n}\n\n#todo {\n}"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <form #data=\"ngForm\" (ngSubmit)=\"submit(data)\">\n    <input type=\"text\" name=\"task\" id=\"todo\" [(ngModel)]=\"todo_model.task\" #task=\"ngModel\" placeholder=\"New Task\">\n    <button class=\"btn red accent-6\">\n      <span class=\"fa fa-plus\"> </span>\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTodoComponent = /** @class */ (function () {
    function AddTodoComponent(dataService) {
        this.dataService = dataService;
        this.todoAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.priority = [
            'None',
            'Low',
            'Medsium',
            'High'
        ];
        this.todo_model = {
            id: 0,
            task: '',
            date: new Date(),
            done: false,
            priority: this.priority[0],
            notes: '',
            background: ''
        };
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    AddTodoComponent.prototype.submit = function (_a) {
        var _this = this;
        var valid = _a.valid, value = _a.value;
        if (valid) {
            if (value.task !== '') {
                this.dataService.addTodo(value)
                    .then(function () {
                    _this.todo_model.task = '';
                })
                    .catch(function (err) {
                    alert(err);
                });
            }
        }
        this.todoAdded.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddTodoComponent.prototype, "todoAdded", void 0);
    AddTodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-todo',
            template: __webpack_require__(/*! ./add-todo.component.html */ "./src/app/components/add-todo/add-todo.component.html"),
            styles: [__webpack_require__(/*! ./add-todo.component.css */ "./src/app/components/add-todo/add-todo.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n    display: inline;\n}\n\n    "

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed red\">\n  &nbsp; &nbsp;\n  <span class=\"\"> todoApp</span>\n\n\n  <!-- <app-popup [message]=\"message\">\n\n  </app-popup> -->\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/popup/popup.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\n    margin: auto;\n    width: 60%;\n    z-index: 9999;\n}"

/***/ }),

/***/ "./src/app/components/popup/popup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/popup/popup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup card\">\n  <br>\n  <div class=\"container\">\n    <h6 class=\"center\"> {{ message }} </h6>\n  </div>\n  <div class=\"container center\"> \n    <button class=\"btn red\" >ok</button>\n    &nbsp;\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/popup/popup.component.ts ***!
  \*****************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", String)
    ], PopupComponent.prototype, "message", void 0);
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/components/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/todo/todo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    padding: 10px; \n}\n\n.fa-bars {\n    cursor: pointer;\n}\n\n.btn {\n   \n    right: 10px;\n    font-size: 0.7em;\n    bottom: 10px;\n}\n\n.inp {\n    border: none;\n    outline: none;\n}\n\n.fa {\n    color: #313131;\n}\n\n.fa-trash {\n    float: right;\n    cursor: pointer;\n    font-size: 1.4em;\n}\n\n.area {\n    width: 100%;\n    \n}\n\n.misc {\n    width: 100%;\n}\n\ninput[type=\"color\"] {\n    float: right;\n    margin-right: 10px; \n    opacity: 0.6;\n    box-sizing: border-box;\n}\n\n.done {\n    cursor: pointer;\n}\n\n.popup {\n    margin: auto;\n    width: 60%;\n    z-index: 9999;\n}\n\n.buttons {\n    width: 100%;\n    display: flex;\n}\n"

/***/ }),

/***/ "./src/app/components/todo/todo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [style.background]=\"todo.background\">\n  <div class=\"fa fa-bars\" (click)=\"more = !more\"></div>\n  &nbsp; &nbsp; &nbsp;\n  <div class=\"fa done\" [class.fa-check-square-o]=\"todo.done\" [class.fa-square-o]=\"!todo.done\" (click)=\"todo.done = !todo.done\">\n  </div>\n  &nbsp;\n  <span>\n    {{ todo.task }}\n  </span>\n  <div *ngIf=\"!more\" class=\"fa fa-trash\" (click)=\"check = true;\"></div>\n  <input type=\"color\" class=\"color\" (change)=\"changed($event)\" class=\"inp\"> &nbsp;\n\n  <div *ngIf=\"more\" class=\"info row\">\n\n    <div class=\"area\">\n      <label> Notes</label>\n      <textarea [(ngModel)]=\"todo.notes\" rows=\"5\">\n\n      </textarea>\n    </div>\n      <div class=\"misc row\" >\n        <div class=\"col l6\">\n          <label> Due date </label>\n          <input type=\"date\" class=\"datepicker\" [(ngModel)]=\"todo.date\">\n        </div>\n        <div class=\"col l6\">\n          <label> Priority </label>\n          <select class=\"browser-default\" [(ngModel)]=\"todo.priority\">\n            <option> None </option>\n            <option> Low </option>\n            <option> Medium </option>\n            <option> High </option>\n          </select>\n      </div>\n    </div>\n\n  <div class=\"buttons\">\n    <button class=\"btn btn-danger green accent-6\" (click)=\"more = !more; update(todo)\"> save </button>\n    &nbsp; &nbsp;\n    <button class=\"btn btn-danger red accent-6\" (click)=\"check = true;more=flase\"> delete </button>\n\n  </div>\n  </div>\n\n</div>\n<div *ngIf=\"check\">\n  <div class=\"popup card\">\n    <br>\n    <div class=\"container\">\n      <h6> Are you sure you want to delete this item?</h6>\n    </div>\n    <div class=\"container center\">\n      <button class=\"btn red\" (click)=\"delete(todo)\">yes</button>\n      &nbsp;\n      <button class=\"btn green\" (click)=\"check=false\">no</button>\n    </div>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = /** @class */ (function () {
    function TodoComponent(dataService) {
        this.dataService = dataService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.date = new Date(2010, 10, 10);
        this.todo.date = this.date;
    };
    TodoComponent.prototype.changed = function (event) {
        this.todo.background = event.target.value;
        this.update();
    };
    TodoComponent.prototype.update = function () {
        this.dataService.update();
    };
    TodoComponent.prototype.delete = function (todo) {
        this.dataService.deleteTodo(todo);
        todo.notes = navigator.vibrate([300, 300, 300]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('todo'),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "todo", void 0);
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/components/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/components/todos/todos.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/todos/todos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todos {\n    width: 60%;\n}\n\n@media (max-width : 600px) {\n    .todos {\n        width: 100%;\n    }\n}"

/***/ }),

/***/ "./src/app/components/todos/todos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/todos/todos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container todos\" >\n  <div *ngIf=\"todos; else notodos\" >\n      <app-todo *ngFor=\"let todo of todos\" [todo]=\"todo\"></app-todo>\n  </div>\n  <ng-template #notodos>\n      <h3 class=\"green-text\">My good sir you have no tasks here yet!</h3>\n  </ng-template>\n  \n  <app-add-todo></app-add-todo>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/todos/todos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/todos/todos.component.ts ***!
  \*****************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = /** @class */ (function () {
    function TodosComponent(dataService) {
        this.dataService = dataService;
        this.todos = [];
        this.todos = dataService.getTodos();
    }
    TodosComponent.prototype.ngOnInit = function () {
    };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/components/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/components/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.priority = [
            'None',
            'Low',
            'Medium',
            'High'
        ];
        this.todos = [];
    }
    DataService.prototype.getTodos = function () {
        // Local storage implementation
        localStorage.getItem('todos') === null
            ? this.todos = []
            : this.todos = JSON.parse(localStorage.getItem('todos'));
        return this.todos;
    };
    DataService.prototype.addTodo = function (todo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.todos.includes(todo)) {
                _this.todos.push(todo);
                localStorage.setItem('todos', JSON.stringify(_this.todos));
                resolve();
            }
            else {
                reject('todo exists');
            }
        });
    };
    DataService.prototype.deleteTodo = function (todo) {
        for (var i = 0; i < this.todos.length; i++) {
            if (todo === this.todos[i]) {
                this.todos.splice(i, 1);
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        }
    };
    DataService.prototype.update = function () {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jonah/projects/Todo App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map