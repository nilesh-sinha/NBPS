import { Component } from '@angular/core';
import {Router} from '@angular/router';

declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'nbps';
  menuList = [
    {
      'key':'about',
      'value':'Who We Are'
    },
    {
      'key':'history',
      'value':'Why We Work'
    },
    {
      'key':'syllabus',
      'value':'What We Teach'
    },
    {
      'key':'alumni-speak',
      'value':'Alumni Say'
    },
    {
      'key':'contact',
      'value':'Contact Us'
    }
  ];
  constructor(private _router: Router) {

  }


  isActive(key: String) {
    let url = '/' + key;
    if(url == this._router.url){
      return 'active';
    }
    return 'inactive';
  }

  goHome() {
    this._router.navigateByUrl('/home');
  }

  // ngOnInit(){
  //   $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  //     // Make sure this.hash has a value before overriding default behavior
  //     if (this.hash !== "") {
  //       // Prevent default anchor click behavior
  //       event.preventDefault();
  //       // Store hash
  //       var hash = this.hash;
  //       // Using jQuery's animate() method to add smooth page scroll
  //       // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  //       $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 900, function(){
  //         // Add hash (#) to URL when done scrolling (default click behavior)
  //         window.location.hash = hash;
  //       });
  //     } // End if
  //   });

  //   $(window).scroll(function() {
  //     $(".slideanim").each(function(){
  //       var pos = $(this).offset().top;

  //       var winTop = $(window).scrollTop();
  //         if (pos < winTop + 600) {
  //           $(this).addClass("slide");
  //         }
  //     });
  //   });
  // }

  // ngDoCheck() {
  //   console.log(this._router.url.);
  // }
}
