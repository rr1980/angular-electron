///// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
//import { assert } from 'chai';
//import { BenutzerDetailComponent } from './benutzer-detail.component';
//import { TestBed, async, ComponentFixture } from '@angular/core/testing';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { IBenutzerViewModel, BenutzerViewModel } from '../benutzer.model';
//import { DebugElement } from '@angular/core';
////import { AjaxService } from '../../../../services/ajayService';
////import { HttpModule } from '@angular/http';
////import { RouterTestingModule } from '@angular/router/testing';

//function getBaseUrl() {
//    //return document.getElementsByTagName('base')[0].href;
//    return "---";
//}
//describe('Counter component', () => {
//    let component: BenutzerDetailComponent;
//    let fixture: ComponentFixture<BenutzerDetailComponent>;
//    let el: HTMLElement;
//    let de: DebugElement;
//    beforeEach(() => {
//        TestBed.configureTestingModule({
//            imports: [
//                FormsModule,
//                ReactiveFormsModule,
//                //HttpModule,
//                //RouterTestingModule
//            ],
//            declarations: [BenutzerDetailComponent],
//            providers: [
//                //AjaxService,
//                //{ provide: 'BASE_URL', useFactory: getBaseUrl }
//            ]
//        });
//        fixture = TestBed.createComponent(BenutzerDetailComponent);

//        component = fixture.componentInstance;
//        component.ngOnInit();
//        de = fixture.debugElement;
//        el = fixture.debugElement.nativeElement; // de.nativeElement;
//        //console.debug(fixture.elementRef.nativeElement);
//        //console.debug(de.componentInstance);
//        //document.body.insertAdjacentHTML(
//        //    'afterbegin',
//        //    fixture.elementRef.nativeElement);
//        fixture.detectChanges();
//    });

//    it('form invalid when empty', () => {
//        expect(component.form.valid).toBeFalsy();
//    });

//    it('username field validity', () => {
//        let username = component.form.controls['username'];
//        expect(username).not.toBeNull();
//        expect(username.valid).toBeFalsy();

//        let errors = username.errors;
//        expect(errors['required']).toBeTruthy();


//        let bvm = new BenutzerViewModel();
//        bvm.name = "Rene";
//        component.user = bvm;
//        fixture.detectChanges();

//        errors = username.errors;
//        expect(errors).toBeNull();

//        var input_userName_value = el.querySelectorAll('input').item(0).value;
//        expect(input_userName_value).toBe('Rene');
//    });

//    it('passwordsGroup field validity', () => {
//        let passwords = component.form.get('passwords');
//        expect(passwords).not.toBeNull();
//        expect(passwords.valid).toBeFalsy();

//        let errors = passwords.errors;
//        expect(errors).toBeTruthy();
//    });

//    it('password field validity', () => {
//        let password = component.form.get('passwords').get('password');
//        expect(password).not.toBeNull();
//        expect(password.valid).toBeFalsy();

//        let errors = password.errors;
//        expect(errors['required']).toBeTruthy();
//    });


//    it('confirmationPassword field validity', () => {
//        let confirmationPassword = component.form.get('passwords').get('confirmationPassword');
//        expect(confirmationPassword).not.toBeNull();
//        expect(confirmationPassword.valid).toBeFalsy();

//        let errors = confirmationPassword.errors;
//        expect(errors['required']).toBeTruthy();
//    });

//    //it('email field validity', () => {
//    //    let errors = {};
//    //    let email = component.form.controls['email'];
//    //    errors = email.errors || {};
//    //    expect(errors['required']).toBeTruthy();
//    //});

//    //it('should display a title', async(() => {
//    //    const titleText = fixture.nativeElement.querySelector('div').textContent;
//    //    expect(titleText).toEqual('Counter');
//    //}));

//    //it('should start with count 0, then increments by 1 when clicked', async(() => {
//    //    const countElement = fixture.nativeElement.querySelector('div');
//    //    expect(countElement.textContent).toEqual('0');

//    //    const incrementButton = fixture.nativeElement.querySelector('button');
//    //    incrementButton.click();
//    //    fixture.detectChanges();
//    //    expect(countElement.textContent).toEqual('1');
//    //}));
//});
