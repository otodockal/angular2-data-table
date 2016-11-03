/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../src/components/body/body-row.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/common/src/directives/ng_style';
import * as import19 from './body-cell.component.ngfactory';
import * as import20 from '../../../../../src/components/body/body-cell.component';
export class Wrapper_DataTableBodyRowComponent {
  context:import0.DataTableBodyRowComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.DataTableBodyRowComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
  }
  check_columns(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.columns = currValue;
      this._expr_0 = currValue;
    }
  }
  check_row(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.row = currValue;
      this._expr_1 = currValue;
    }
  }
  check_bodyWidth(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this.changed = true;
      this.context.bodyWidth = currValue;
      this._expr_2 = currValue;
    }
  }
  check_offsetX(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this.changed = true;
      this.context.offsetX = currValue;
      this._expr_3 = currValue;
    }
  }
  check_rowHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this.changed = true;
      this.context.rowHeight = currValue;
      this._expr_4 = currValue;
    }
  }
  check_isSelected(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this.changed = true;
      this.context.isSelected = currValue;
      this._expr_5 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_6:any = this.context.rowHeight;
    if (import2.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_6) == (null as any))? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_6).toString() + 'px')));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.isSelected;
    if (import2.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      view.renderer.setElementClass(el,'active',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.isEvenRow;
    if (import2.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      view.renderer.setElementClass(el,'datatable-row-even',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.isOddRow;
    if (import2.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementClass(el,'datatable-row-odd',currVal_9);
      this._expr_9 = currVal_9;
    }
  }
}
var renderType_DataTableBodyRowComponent_Host:import5.RenderComponentType = (null as any);
class _View_DataTableBodyRowComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _DataTableBodyRowComponent_0_4:Wrapper_DataTableBodyRowComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyRowComponent_Host0,renderType_DataTableBodyRowComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'datatable-body-row',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataTableBodyRowComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataTableBodyRowComponent_0_4 = new Wrapper_DataTableBodyRowComponent(new import9.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._DataTableBodyRowComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._DataTableBodyRowComponent_0_4.context,this.projectableNodes,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'keydown',this.eventHandler(this._handle_keydown_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],[disposable_0],([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableBodyRowComponent) && (0 === requestNodeIndex))) { return this._DataTableBodyRowComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DataTableBodyRowComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this._DataTableBodyRowComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_keydown_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyRowComponent_0_4.context.onKeyDown($event)) !== false);
    return (true && pd_0_0);
  }
}
function viewFactory_DataTableBodyRowComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  if ((renderType_DataTableBodyRowComponent_Host === (null as any))) { (renderType_DataTableBodyRowComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_DataTableBodyRowComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataTableBodyRowComponentNgFactory:import11.ComponentFactory<import0.DataTableBodyRowComponent> = new import11.ComponentFactory<import0.DataTableBodyRowComponent>('datatable-body-row',viewFactory_DataTableBodyRowComponent_Host0,import0.DataTableBodyRowComponent);
const styles_DataTableBodyRowComponent:any[] = ([] as any[]);
var renderType_DataTableBodyRowComponent:import5.RenderComponentType = (null as any);
class _View_DataTableBodyRowComponent0 extends import3.AppView<import0.DataTableBodyRowComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import6.AppElement;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import12.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyRowComponent0,renderType_DataTableBodyRowComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import6.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_1 = new import6.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import13.TemplateRef_(this._appEl_1,viewFactory_DataTableBodyRowComponent1);
    this._NgFor_1_6 = new import12.Wrapper_NgFor(this._appEl_1.vcRef,this._TemplateRef_1_5,this.parentInjector.get(import14.IterableDiffers),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init(([] as any[]),[
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import15.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.columnsByPin;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = ((this.context.$colGroup == (null as any))? (null as any): this.context.$colGroup.type);
    this._NgFor_1_6.check_ngForTrackBy(currVal_1_0_1,throwOnChange,false);
    this._NgFor_1_6.detectChangesInInputProps(this,this._anchor_1,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_DataTableBodyRowComponent0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<import0.DataTableBodyRowComponent> {
  if ((renderType_DataTableBodyRowComponent === (null as any))) { (renderType_DataTableBodyRowComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_DataTableBodyRowComponent,{})); }
  return new _View_DataTableBodyRowComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyRowComponent1 extends import3.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import16.Wrapper_NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import6.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import12.Wrapper_NgFor;
  _text_3:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyRowComponent1,renderType_DataTableBodyRowComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._NgStyle_0_3 = new import16.Wrapper_NgStyle(this.parentInjector.get(import17.KeyValueDiffers),new import9.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import6.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2,viewFactory_DataTableBodyRowComponent2);
    this._NgFor_2_6 = new import12.Wrapper_NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import14.IterableDiffers),this.parent.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import15.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import18.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgStyle_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parent.context.stylesByGroup(this.context.$implicit.type);
    this._NgStyle_0_3.check_ngStyle(currVal_0_0_0,throwOnChange,false);
    this._NgStyle_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.context.$implicit.columns;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = ((this.parent.context.column == (null as any))? (null as any): this.parent.context.column.$$id);
    this._NgFor_2_6.check_ngForTrackBy(currVal_2_0_1,throwOnChange,false);
    this._NgFor_2_6.detectChangesInInputProps(this,this._anchor_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_8:any = import2.interpolate(1,'datatable-row-',this.context.$implicit.type,' datatable-row-group');
    if (import2.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.parent.context.columnGroupWidths[this.context.$implicit.type];
    if (import2.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementStyle(this._el_0,'width',((this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9) == (null as any))? (null as any): (this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9).toString() + 'px')));
      this._expr_9 = currVal_9;
    }
    this._NgStyle_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DataTableBodyRowComponent1(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  return new _View_DataTableBodyRowComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyRowComponent2 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _DataTableBodyCellComponent_0_4:import19.Wrapper_DataTableBodyCellComponent;
  _text_1:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyRowComponent2,renderType_DataTableBodyRowComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'datatable-body-cell',new import2.InlineArray2(2,'tabindex','-1'),(null as any));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import19.viewFactory_DataTableBodyCellComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataTableBodyCellComponent_0_4 = new import19.Wrapper_DataTableBodyCellComponent(new import9.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._DataTableBodyCellComponent_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    compView_0.create(this._DataTableBodyCellComponent_0_4.context,([] as any[]),(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'activate',this.eventHandler(this._handle_activate_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_3.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_0,'dblclick',this.eventHandler(this._handle_dblclick_0_4.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_0,'keydown',this.eventHandler(this._handle_keydown_0_5.bind(this)));
    const subscription_0:any = this._DataTableBodyCellComponent_0_4.context.activate.subscribe(this.eventHandler(this._handle_activate_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.DataTableBodyCellComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DataTableBodyCellComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parent.parent.context.row;
    this._DataTableBodyCellComponent_0_4.check_row(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.$implicit;
    this._DataTableBodyCellComponent_0_4.check_column(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parent.parent.context.rowHeight;
    this._DataTableBodyCellComponent_0_4.check_rowHeight(currVal_0_0_2,throwOnChange,false);
    if (this._DataTableBodyCellComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this._DataTableBodyCellComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_activate_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.parent.parent.context.onActivate($event,this.context.index)) !== false);
    return (true && pd_0_0);
  }
  private _handle_focus_0_1($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onFocus($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_blur_0_2($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onBlur($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_click_0_3($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onClick($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_dblclick_0_4($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onDblClick($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_keydown_0_5($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onKeyDown($event)) !== false);
    return (true && pd_0_0);
  }
}
function viewFactory_DataTableBodyRowComponent2(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  return new _View_DataTableBodyRowComponent2(viewUtils,parentInjector,declarationEl);
}