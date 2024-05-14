import { Pipe, PipeTransform } from '@angular/core';
import { UserI } from '../interfaces/user.interface';

@Pipe({
  name: 'customSearch',
  standalone: true
})
export class CustomSearchPipe implements PipeTransform {

  transform(user: UserI[], args?: any): any {
    if(!user)return null;
    if(!args)return user;
    args = args.toLowerCase();
    return user.filter((data: UserI)=>{
        return data.id.toString().includes(args);
    });
}

}
