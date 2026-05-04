import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from './shared/header-layout/header-layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayout, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //text
  title = {
    name: 'Phuong',
    old: 2004,
  };

  //properties
  isDisabled = false;
  handleClick() {
    console.log('Da bam nut');
    alert('Ban vua bam nut');
  }

  //attribute
  contentImage = 'Trye Wellcome';

  //event
  nameBtn = ('Click!');
  clickMessage= '';
  handleClickMe(): void {
    this.clickMessage = 'xin chao ban!';
}

updateField(): void {
  console.log('Da cap nhat truong');
}

//two way data binding
bindingMessage = '';
}