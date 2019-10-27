import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToEspacesPipe implements PipeTransform{
    transform(value: string, chracter: string, prefix: string) {
        return prefix + 'sad';
    }
}