import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  imports:[CommonModule, FormsModule, BrowserModule],
  standalone : true,
    selector: 'app-messages', 
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],

})
export class MessagesComponent {
    constructor(public messageService: MessageService) {}
}