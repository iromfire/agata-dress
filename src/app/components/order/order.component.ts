import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { noWhitespaceValidator } from '../../shared/validators/no-whitespace-validator';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {
    form: FormGroup;
    fieldMessages = {
        name: 'имя',
        phone: 'телефон',
        description: 'описание заказа'
    };

    get tooltipMessage(): string {
        const invalidFields = this.getInvalidFields();
        const formattedFields = invalidFields.map(
            (field) => this.fieldMessages[field]
        );
        return `заполните: ${formattedFields.join(', ')}`;
    }

    constructor(
        private _fb: FormBuilder,
        private _http: HttpClient,
        private _router: Router
    ) {}

    ngOnInit() {
        this.form = this._fb.group({
            name: [
                null,
                Validators.compose([
                    Validators.required,
                    noWhitespaceValidator()
                ])
            ],
            phone: [null, Validators.required],
            description: [
                null,
                Validators.compose([
                    Validators.required,
                    noWhitespaceValidator()
                ])
            ]
        });
    }

    submitOrder() {
        this.sendTelegram()
            .pipe(
                tap(() => {
                    this._router.navigate(['order', 'success']);
                })
            )
            .subscribe();
    }

    getInvalidFields(): string[] {
        return Object.keys(this.form.controls).filter(
            (field) => this.form.get(field).invalid
        );
    }

    sendTelegram() {
        const botToken = '6931914478:AAEn0uhJpiGkM1FvNBtSROGpNu3A5jnfjQY';
        const chatId = '-1002086892379';
        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const name = this.form.get('name').value;
        const phone = `+7${this.form.get('phone').value}`;
        const description = this.form.get('description').value;

        console.log(name, phone, description);

        const message = `НОВЫЙ ЗАКАЗ! \nИмя: ${name}\nНомер телефона: ${phone}\nОписание заказа: ${description}`;

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const body = {
            chat_id: chatId,
            text: message
        };

        return this._http.post(apiUrl, body, { headers });
    }
}
