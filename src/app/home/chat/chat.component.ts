import { Component, OnInit, AfterContentChecked } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      const $chatbox = $('.chatbox'),
        $chatboxTitle = $('.chatbox__title'),
        $chatboxTitleClose = $('.chatbox__title__close');

      $chatboxTitle.on('click', function() {
        $chatbox.toggleClass('chatbox--tray');
      });
      $chatboxTitleClose.on('click', function(e) {
        e.stopPropagation();
        $chatbox.addClass('chatbox--closed');
      });
      $chatbox.on('transitionend', function() {
        if ($chatbox.hasClass('chatbox--closed')) {
          $chatbox.remove();
        }
      });
    });
  }
}
