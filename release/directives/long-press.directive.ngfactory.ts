/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../src/directives/long-press.directive';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
export class Wrapper_LongPressDirective {
  context:import0.LongPressDirective;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor() {
    this.changed = false;
    this.context = new import0.LongPressDirective();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  check_duration(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.duration = currValue;
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = this.context.press;
    if (import2.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementClass(el,'press',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.isLongPress;
    if (import2.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      view.renderer.setElementClass(el,'longpress',currVal_2);
      this._expr_2 = currVal_2;
    }
  }
}