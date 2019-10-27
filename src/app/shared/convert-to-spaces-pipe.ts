import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToEspacesPipe implements PipeTransform{
    transform(value: string, character: string, prefix: string) {
        return prefix + value.replace(character, ' ');
    }
}