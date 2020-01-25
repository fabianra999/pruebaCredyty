import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/images/no-image-icon.png';
    }

    if (images) {
      return images['src'];
    } else {
      return 'assets/images/no-image-icon.png';
    }
  }

}
