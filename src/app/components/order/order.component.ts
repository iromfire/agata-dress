import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { noWhitespaceValidator } from '../../shared/validators/no-whitespace-validator';
import {
  BehaviorSubject,
  catchError,
  pipe,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit, OnDestroy {
  private _botToken = '6931914478:AAEn0uhJpiGkM1FvNBtSROGpNu3A5jnfjQY';
  private _chatId = '-1002086892379';

  private _isButtonDisabled = new BehaviorSubject<boolean>(false);
  private destroy$ = new Subject<void>();

  form: FormGroup;
  fieldMessages = {
    name: 'имя',
    phone: 'телефон',
    description: 'описание заказа',
  };
  fromStylistCard: boolean;

  isButtonDisabled = this._isButtonDisabled.asObservable();

  get tooltipMessage(): string {
    const invalidFields = this.getInvalidFields();
    const formattedFields = invalidFields.map(
      (field) => this.fieldMessages[field],
    );
    return `заполните: ${formattedFields.join(', ')}`;
  }

  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      name: [
        null,
        Validators.compose([Validators.required, noWhitespaceValidator()]),
      ],
      phone: [null, Validators.required],
      description: [
        null,
        Validators.compose([Validators.required, noWhitespaceValidator()]),
      ],
      proportions: [],
      photo: [],
    });
    this._route.data
      .pipe(
        tap((data) => {
          this.fromStylistCard = data['fromStylistCard'];
        }),
      )
      .subscribe();
    this.isButtonDisabled.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getInvalidFields(): string[] {
    return Object.keys(this.form.controls).filter(
      (field) => this.form.get(field).invalid,
    );
  }

  submitOrder() {
    this._isButtonDisabled.next(true);
    const orderObservable = this.fromStylistCard
      ? this.sendTelegramMessageWithPhoto()
      : this.sendTelegramMessage();

    orderObservable
      .pipe(
        tap(() => {
          this._isButtonDisabled.next(false);
          this._router.navigate(['order', 'success']);
        }),
        catchError((error) => {
          this._isButtonDisabled.next(false);
          return error;
        }),
      )
      .subscribe();
  }

  sendTelegramMessage() {
    const apiUrl = `https://api.telegram.org/bot${this._botToken}/sendMessage`;

    const message = this.createTelegramMessage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      chat_id: this._chatId,
      text: message,
    };

    return this._http.post(apiUrl, body, { headers });
  }

  sendTelegramMessageWithPhoto() {
    const apiUrl = `https://api.telegram.org/bot${this._botToken}/sendPhoto`;

    const message = this.createTelegramMessage();

    const formData = new FormData();
    formData.append('chat_id', this._chatId);
    formData.append('caption', message);
    formData.append('photo', this.form.get('photo').value);

    return this._http.post(apiUrl, formData);
  }

  createTelegramMessage(): string {
    const name = this.form.get('name').value;
    const phone = `+7${this.form.get('phone').value}`;
    const description = this.form.get('description').value;
    const proportions = this.form.get('proportions').value;

    if (this.fromStylistCard) {
      return `ЗАЯВКА ОНЛАЙН СТИЛИСТ! \nИмя: ${name}\nНомер телефона: ${phone}\nОписание заказа: ${description} \nПараметры: ${proportions}`;
    } else {
      return `НОВЫЙ ЗАКАЗ! \nИмя: ${name}\nНомер телефона: ${phone}\nОписание заказа: ${description}`;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({
        photo: file,
      });
    }
  }
}
