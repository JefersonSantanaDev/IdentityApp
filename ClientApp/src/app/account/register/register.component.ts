import { SharedService } from './../../shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../account.service';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/shared/models/account/user';
import { CredentialResponse } from 'google-one-tap';
import jwt_decode from 'jwt-decode';
import { DOCUMENT } from '@angular/common';
declare const FB: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('googleButton', { static: true }) googleButton: ElementRef =
    new ElementRef({});
  registerform: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];
  registerForm: any;

  constructor(
    private accountService: AccountService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.accountService.user$.pipe(take(1)).subscribe({
      next: (user: User | null) => {
        if (user) {
          this.router.navigateByUrl('/');
        }
      },
    });
  }

  ngOnInit(): void {
    this.initiazeGoogleButton();
    this.initializeForm();
  }

  ngAfterViewInit() {
    const script1 = this._renderer2.createElement('script');
    script1.src = 'https://accounts.google.com/gsi/client';
    script1.async = 'true';
    script1.defer = 'true';
    this._renderer2.appendChild(this._document.body, script1);
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^\\w+([-\\.\\w]+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  register() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.registerForm.valid) {
      this.accountService.register(this.registerForm.value).subscribe({
        next: (response: any) => {
          this.sharedService.showNotification(
            true,
            response.value.title,
            response.value.message
          );
          this.router.navigateByUrl('/account/login');
        },
        error: (error) => {
          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        },
      });
    }
  }

  registerWithFacebook() {
    FB.login(async (fbResult: any) => {
      if (fbResult.authResponse) {
        const accessToken = fbResult.authResponse.accessToken;
        const userId = fbResult.authResponse.userId;
        this.router.navigateByUrl(
          `/account/register/third-party/facebook?access_token=${accessToken}&userId=${userId}`
        );
      } else {
        this.sharedService.showNotification(
          false,
          'Failed',
          'Unable to register with your facebook'
        );
      }
    });
  }

  private initiazeGoogleButton() {
    (window as any).onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id:
          '562897944636-bd3fdb048g2ldf164sfcpfoar1rfu3b7.apps.googleusercontent.com',
        callback: this.googleCallBack.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      // @ts-ignore
      google.accounts.id.renderButton(this.googleButton.nativeElement, {
        size: 'medium',
        shape: 'rectangular',
        text: 'signup_with',
        logo_alignment: 'center',
      });
    };
  }
  private async googleCallBack(response: CredentialResponse) {
    const decodedToken: any = jwt_decode(response.credential);
    this.router.navigateByUrl(
      `/account/register/third-party/google?access_token=${response.credential}&userId=${decodedToken.sub}`
    );
  }
}
