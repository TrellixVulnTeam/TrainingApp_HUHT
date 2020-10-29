(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alik\Documents\GitHub\TrainingApp\src\main.ts */"zUnb");


/***/ }),

/***/ "2G9v":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: Training */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Training", function() { return Training; });
// Classes:
class Training {
    constructor(id) {
        this.name = "New training";
        this.id = id;
        this.rounds = 1;
        this.exercisesWithReps = [{
                exercise: {
                    name: 'Push ups',
                    id: 1,
                    level: 2
                },
                reps: 1
            }];
        this.sets = [[1, {
                    exercise: {
                        name: 'Push ups',
                        id: 1,
                        level: 2
                    },
                    reps: 1
                },]];
        this.created_by = false;
    }
    getExercises(num) {
        let array = [];
        let index = 0;
        if (num > 0 && num <= this.exercisesWithReps.length) {
            array[0] = this.exercisesWithReps[0].exercise;
            let found = false;
            for (let i = 0; i < num; i++) {
                for (let j = 0; j < index; j++) {
                    if (array[j] == this.exercisesWithReps[i].exercise) {
                        found = true;
                    }
                }
                if (!found) {
                    array[index] = this.exercisesWithReps[i].exercise;
                }
                index++;
            }
        }
        else {
            array[0] = this.exercisesWithReps[0].exercise;
            let found = false;
            for (let i = 0; i < this.exercisesWithReps.length; i++) {
                for (let j = 0; j < index; j++) {
                    if (array[j] == this.exercisesWithReps[i].exercise) {
                        found = true;
                    }
                }
                if (!found) {
                    array[index] = this.exercisesWithReps[i].exercise;
                }
                index++;
            }
        }
        return array;
    }
    getDuration() {
        let dr = 0;
        dr += 2 * this.getExercises(0).length + 1 * this.getExercises(0).length;
        if (dr >= 60) {
            return Math.trunc(dr / 60) + " hours, " + /*Math.round(((dr/60) - Math.floor((dr/60))).toFixed(1)*60) +*/ "min";
        }
        return dr + " min";
    }
    getLevel() {
        let avg = 0;
        let ex = this.getExercises(0);
        for (let i = 0; i < ex.length; i++) {
            avg += ex[i].level;
        }
        return avg / ex.length;
    }
    getLevelString() {
        let stars = "";
        for (let i = 0; i < this.getLevel(); i++) {
            stars += "⭐";
        }
        return stars;
    }
}


/***/ }),

/***/ "4gb7":
/*!**********************************************!*\
  !*** ./src/app/services/exercise.service.ts ***!
  \**********************************************/
/*! exports provided: ExerciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseService", function() { return ExerciseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExerciseService {
    constructor() {
        this.exerciseId = this.getExercises();
    }
    getExercises() {
        const exercises = [
            {
                name: 'Push ups',
                id: 1,
                level: 2
            },
            {
                name: 'Pull ups',
                id: 2,
                level: 4
            },
            {
                name: 'squats',
                id: 3,
                level: 2
            }
        ];
        return exercises;
    }
}
ExerciseService.ɵfac = function ExerciseService_Factory(t) { return new (t || ExerciseService)(); };
ExerciseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExerciseService, factory: ExerciseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4tTs":
/*!****************************************************************!*\
  !*** ./src/app/training-details/training-details.component.ts ***!
  \****************************************************************/
/*! exports provided: TrainingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingDetailsComponent", function() { return TrainingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/trainings.service */ "s8zF");
/* harmony import */ var _services_exercise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exercise.service */ "4gb7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TrainingDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TrainingDetailsComponent_div_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.UptadeName(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.training.name);
} }
function TrainingDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.training.name);
} }
function TrainingDetailsComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.exercise_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r8.name);
} }
function TrainingDetailsComponent_h2_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "One round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrainingDetailsComponent_h2_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.training.rounds, " rounds");
} }
const _c0 = function () { return ["train"]; };
class TrainingDetailsComponent {
    //   [
    //     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],    -
    //     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],
    //     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],
    //  ]
    constructor(trService, exService) {
        this.trService = trService;
        this.exService = exService;
        this.trainings = this.trService.getTrainings();
        this.training = this.trService.getTraining();
        this.exercises = this.exService.getExercises();
        this.ex = this.training.getExercises(0);
        for (let i = 0; i < this.training.sets.length; i++) {
            for (let j = 0; j < this.training.sets[i][0]; j++) {
                console.log(this.training.sets[i][0]);
                console.log(this.training.sets[i][1].reps);
            }
        }
    }
    UptadeName(newName) {
        if (this.validate(newName)) {
            this.training.name = newName;
        }
    }
    validate(msg) {
        if (msg != "") {
            let found = false;
            for (let i = 0; i < this.trainings.length; i++) {
                if (this.training.name != this.trainings[i].name) {
                    found = true;
                }
            }
            if (!found) {
                return true;
            }
            return false;
        }
        return false;
    }
    ngOnInit() { }
}
TrainingDetailsComponent.ɵfac = function TrainingDetailsComponent_Factory(t) { return new (t || TrainingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"])); };
TrainingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingDetailsComponent, selectors: [["app-training-details"]], decls: 20, vars: 9, consts: [["routerLink", "/", 1, "return"], ["class", "changeName true", 4, "ngIf"], ["class", "changeName false", 4, "ngIf"], [1, "seperate"], [1, "training_states"], [1, "trainings_exercises"], [3, "class", 4, "ngFor", "ngForOf"], [1, "start_training", 3, "routerLink"], [1, "info"], [4, "ngIf"], [1, "training_exercises"], [1, "changeName", "true"], [1, "nameInput", 3, "placeholder", "change"], ["name", ""], [1, "changeName", "false"], [1, "nameInput"]], template: function TrainingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrainingDetailsComponent_div_2_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrainingDetailsComponent_div_3_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Exercises: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TrainingDetailsComponent_li_13_Template, 2, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrainingDetailsComponent_h2_17_Template, 2, 0, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TrainingDetailsComponent_h2_18_Template, 2, 1, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.training.created_by);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.training.created_by);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration: ", ctx.training.getDuration(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level: ", ctx.training.getLevelString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.training.rounds == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.training.rounds != 1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  .seperate[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  .training_states[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    border-right: 2px solid  #000;\r\n  }\r\n  .nameInput[_ngcontent-%COMP%]{\r\n    border: none;\r\n    flex-grow: 1;\r\n    vertical-align: bottom;\r\n    font-size: 1.5em;\r\n    outline: none;\r\n  }\r\n  .nameInput[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    border-bottom: 1px solid rgb(97, 97, 97);\r\n  }\r\n  .start_training[_ngcontent-%COMP%]{\r\n    background: #4ce0a5;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 50%;\r\n    padding-left: 3px;\r\n    padding-right: 3px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  .training[_ngcontent-%COMP%]{\r\n    min-width: 50%;\r\n  }\r\n  .info[_ngcontent-%COMP%]{\r\n    min-width: 50%;\r\n    margin-left: 0.2em;\r\n  }\r\n  @media only screen and (max-width: 600px) {\r\n    .seperate[_ngcontent-%COMP%]{\r\n      flex-flow: column wrap;\r\n    }\r\n    .training_states[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      border-right: 2px solid rgba(0,0,0,0);\r\n    }\r\n    .training[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n    }\r\n  \r\n    .info[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFpbmluZy1kZXRhaWxzL3RyYWluaW5nLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsVUFBVTtJQUNWLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0QjtFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLFdBQVc7TUFDWCxxQ0FBcUM7SUFDdkM7SUFDQTtNQUNFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6ImFwcC90cmFpbmluZy1kZXRhaWxzL3RyYWluaW5nLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNlcGVyYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnRyYWluaW5nX3N0YXRlc3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAgIzAwMDtcclxuICB9XHJcbiAgLm5hbWVJbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLm5hbWVJbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XHJcbiAgfVxyXG4gIC5zdGFydF90cmFpbmluZ3tcclxuICAgIGJhY2tncm91bmQ6ICM0Y2UwYTU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRyYWluaW5ne1xyXG4gICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZve1xyXG4gICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yZW07XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zZXBlcmF0ZXtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIH1cclxuICAgIC50cmFpbmluZ19zdGF0ZXN7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDApO1xyXG4gICAgfVxyXG4gICAgLnRyYWluaW5ne1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5pbmZve1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-training-details',
                templateUrl: './training-details.component.html',
                styleUrls: ['./training-details.component.css']
            }]
    }], function () { return [{ type: _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"] }, { type: _services_exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"] }]; }, null); })();


/***/ }),

/***/ "6Bii":
/*!******************************************!*\
  !*** ./src/app/train/train.component.ts ***!
  \******************************************/
/*! exports provided: TrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainComponent", function() { return TrainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/trainings.service */ "s8zF");
/* harmony import */ var _services_exercise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exercise.service */ "4gb7");




class TrainComponent {
    constructor(trService, exService) {
        this.trService = trService;
        this.exService = exService;
        //training = this.trService.getTraining();
        this.exercises = this.exService.getExercises();
        this.ifRound = 0;
        this.shownEx = 0;
        this.timeLeft = 5;
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
        }, 1000);
    }
    skipTimer() {
        this.timeLeft = 0;
    }
    addTime(time) {
        this.timeLeft = time + 5;
        clearInterval(this.interval);
        this.startTimer();
    }
    exerciseDone() {
        this.shownEx++;
        this.timeLeft = 5;
        clearInterval(this.interval);
        this.startTimer();
    }
    // trainingDone(){
    //   if(this.shownEx == this.training.exercise.length){
    //     return false
    //   }
    //   console.log(this.ifRound+ " == " +this.training.round)
    //   return true
    // }
    pauseTimer() {
        clearInterval(this.interval);
    }
    ngOnInit() {
        this.startTimer();
    }
}
TrainComponent.ɵfac = function TrainComponent_Factory(t) { return new (t || TrainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"])); };
TrainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainComponent, selectors: [["app-train"]], decls: 0, vars: 0, template: function TrainComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdHJhaW4vdHJhaW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-train',
                templateUrl: './train.component.html',
                styleUrls: ['./train.component.css']
            }]
    }], function () { return [{ type: _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"] }, { type: _services_exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HF4J":
/*!**************************************************!*\
  !*** ./src/app/trainings/trainings.component.ts ***!
  \**************************************************/
/*! exports provided: TrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsComponent", function() { return TrainingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/trainings.service */ "s8zF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function TrainingsComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.exercise_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ex_r4.name, ", ");
} }
function TrainingsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1.5 hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "**");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TrainingsComponent_div_3_li_9_Template, 2, 4, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const training_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "Trainings/", training_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](training_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ex[i_r2]);
} }
class TrainingsComponent {
    constructor(trService) {
        this.trService = trService;
        this.trainings = this.trService.getTrainings();
        this.ex = [];
    }
    ngOnInit() {
        for (let i = 0; i < this.trainings.length; i++) {
            this.ex[i] = this.trainings[i].getExercises(3);
        }
    }
}
TrainingsComponent.ɵfac = function TrainingsComponent_Factory(t) { return new (t || TrainingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"])); };
TrainingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingsComponent, selectors: [["app-trainings"]], decls: 6, vars: 2, consts: [[1, "trainings"], ["class", "training", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "create_training", 3, "routerLink"], [1, "training", 3, "routerLink"], [1, "basic_info"], [1, "training_name"], [1, "training_durations"], [1, "training_level"], [1, "trainings_exercises"], [3, "class", 4, "ngFor", "ngForOf"]], template: function TrainingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trainings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrainingsComponent_div_3_Template, 10, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create new training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trainings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Trainings/", ctx.trainings.slice(-1)[0].id + 1, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n.trainings[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  grid-gap: 1em;\r\n}\r\n.training[_ngcontent-%COMP%]{\r\n  border: 2px solid  #DCDCDC;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n.training[_ngcontent-%COMP%]:hover{\r\n  background: #D4D4D4;\r\n  border: #D4D4D4;\r\n}\r\n.trainings_exercises[_ngcontent-%COMP%]{\r\n  border-top: 2px solid  #DCDCDC;\r\n}\r\n.create_training[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-align: center;\r\n}\r\n.create_training[_ngcontent-%COMP%]{\r\n  color: #000;\r\n}\r\n.create_training[_ngcontent-%COMP%]:hover{\r\n  color: #000;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFpbmluZ3MvdHJhaW5pbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELGFBQWE7QUFDZjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAvdHJhaW5pbmdzL3RyYWluaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxudWx7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbmxpe1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRyYWluaW5nc3tcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTgwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAxZW07XHJcbn1cclxuXHJcbi50cmFpbmluZ3tcclxuICBib3JkZXI6IDJweCBzb2xpZCAgI0RDRENEQztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50cmFpbmluZzpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjRDRENEQ0O1xyXG4gIGJvcmRlcjogI0Q0RDRENDtcclxufVxyXG5cclxuLnRyYWluaW5nc19leGVyY2lzZXN7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICAjRENEQ0RDO1xyXG59XHJcblxyXG4uY3JlYXRlX3RyYWluaW5ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNyZWF0ZV90cmFpbmluZ3tcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4uY3JlYXRlX3RyYWluaW5nOmhvdmVye1xyXG4gIGNvbG9yOiAjMDAwOyAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trainings',
                templateUrl: './trainings.component.html',
                styleUrls: ['./trainings.component.css']
            }]
    }], function () { return [{ type: _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"] }]; }, null); })();


/***/ }),

/***/ "Khja":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/trainings.service */ "s8zF");
/* harmony import */ var _services_exercise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exercise.service */ "4gb7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateComponent_h2_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "One round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_h2_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.training.round, " rounds");
} }
function CreateComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("exercises ", ctx_r2.training.ex[i_r4].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.training.reps[i_r4], " ", ctx_r2.training.ex[i_r4].name, "");
} }
const _c0 = function () { return ["train"]; };
class CreateComponent {
    constructor(trService, exService) {
        this.trService = trService;
        this.exService = exService;
        this.training = this.trService.getTraining();
        this.exercises = this.exService.getExercises();
    }
    ngOnInit() {
        this.trService.addTraining();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 18, vars: 6, consts: [["routerLink", "/", 1, "return"], [1, "training_states"], [3, "routerLink"], [1, "modify"], ["placeholder", "name"], [1, "training"], [4, "ngIf"], [1, "training_exercises"], [3, "class", 4, "ngFor", "ngForOf"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create a training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateComponent_h2_14_Template, 2, 0, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateComponent_h2_15_Template, 2, 1, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateComponent_li_17_Template, 3, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx.training.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.training.round == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.training.round != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.training.ex);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _services_trainings_service__WEBPACK_IMPORTED_MODULE_1__["TrainingsService"] }, { type: _services_exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'TrainingApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    max-width: 2000px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainings/trainings.component */ "HF4J");
/* harmony import */ var _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-details/training-details.component */ "4tTs");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "Khja");
/* harmony import */ var _train_train_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./train/train.component */ "6Bii");
/* harmony import */ var _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exercises/exercises.component */ "jq19");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_4__["TrainingsComponent"],
        _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_5__["TrainingDetailsComponent"],
        _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
        _train_train_component__WEBPACK_IMPORTED_MODULE_7__["TrainComponent"],
        _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_8__["ExercisesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_4__["TrainingsComponent"],
                    _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_5__["TrainingDetailsComponent"],
                    _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                    _train_train_component__WEBPACK_IMPORTED_MODULE_7__["TrainComponent"],
                    _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_8__["ExercisesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jq19":
/*!**************************************************!*\
  !*** ./src/app/exercises/exercises.component.ts ***!
  \**************************************************/
/*! exports provided: ExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesComponent", function() { return ExercisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_exercise_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/exercise.service */ "4gb7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ExercisesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exercise_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exercise_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exercise_r1.level);
} }
class ExercisesComponent {
    constructor(exService) {
        this.exService = exService;
        this.exercises = this.exService.getExercises();
    }
    ngOnInit() {
    }
}
ExercisesComponent.ɵfac = function ExercisesComponent_Factory(t) { return new (t || ExercisesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exercise_service__WEBPACK_IMPORTED_MODULE_1__["ExerciseService"])); };
ExercisesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExercisesComponent, selectors: [["app-exercises"]], decls: 2, vars: 1, consts: [[1, "exercises"], ["class", "exercise", 4, "ngFor", "ngForOf"], [1, "exercise"], [1, "exercise_name"], [1, "exercise_level"]], template: function ExercisesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExercisesComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exercises);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9leGVyY2lzZXMvZXhlcmNpc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwL2V4ZXJjaXNlcy9leGVyY2lzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbmxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExercisesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exercises',
                templateUrl: './exercises.component.html',
                styleUrls: ['./exercises.component.css']
            }]
    }], function () { return [{ type: _services_exercise_service__WEBPACK_IMPORTED_MODULE_1__["ExerciseService"] }]; }, null); })();


/***/ }),

/***/ "s8zF":
/*!***********************************************!*\
  !*** ./src/app/services/trainings.service.ts ***!
  \***********************************************/
/*! exports provided: TrainingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsService", function() { return TrainingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "2G9v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_exercise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/exercise.service */ "4gb7");





class TrainingsService {
    constructor(route, exService) {
        this.route = route;
        this.exService = exService;
        this.Trainings = [];
        this.index = 0;
    }
    getTrainings() {
        this.Trainings[0] = new _models__WEBPACK_IMPORTED_MODULE_1__["Training"](0);
        this.Trainings[1] = new _models__WEBPACK_IMPORTED_MODULE_1__["Training"](1);
        this.Trainings[2] = new _models__WEBPACK_IMPORTED_MODULE_1__["Training"](2);
        this.Trainings[3] = new _models__WEBPACK_IMPORTED_MODULE_1__["Training"](3);
        this.index = 3;
        return this.Trainings;
    }
    getTraining() {
        const tr = this.getTrainings();
        if (typeof tr[(this.route.url.split('/').slice(-1)[0])] === 'number') {
            return tr[(this.route.url.split('/')[1])];
        }
        return tr[(this.route.url.split('/')[2])];
    }
    addTraining() {
        this.index++;
        this.Trainings[this.index] = new _models__WEBPACK_IMPORTED_MODULE_1__["Training"](this.index);
    }
}
TrainingsService.ɵfac = function TrainingsService_Factory(t) { return new (t || TrainingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_exercise_service__WEBPACK_IMPORTED_MODULE_3__["ExerciseService"])); };
TrainingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrainingsService, factory: TrainingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_exercise_service__WEBPACK_IMPORTED_MODULE_3__["ExerciseService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercises/exercises.component */ "jq19");
/* harmony import */ var _train_train_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./train/train.component */ "6Bii");
/* harmony import */ var _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./training-details/training-details.component */ "4tTs");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "Khja");
/* harmony import */ var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainings/trainings.component */ "HF4J");









const routes = [
    { path: '', component: _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_6__["TrainingsComponent"] },
    { path: 'Trainings/:id', component: _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_4__["TrainingDetailsComponent"] },
    { path: 'Trainings/:id/train', component: _train_train_component__WEBPACK_IMPORTED_MODULE_3__["TrainComponent"] },
    { path: 'Create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"] },
    { path: 'Exercises', component: _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_2__["ExercisesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map