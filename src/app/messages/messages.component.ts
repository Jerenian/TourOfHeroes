import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[CommonModule, FormsModule],
  standalone : true,
    selector: 'app-messages', 
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
    constructor(public messageService: MessageService) {}
}