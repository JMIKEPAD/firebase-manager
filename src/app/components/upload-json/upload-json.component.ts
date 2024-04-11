
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as fs from 'fs';

@Component({
  selector: 'app-upload-json',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './upload-json.component.html',
  styleUrl: './upload-json.component.scss'
})
export class UploadJsonComponent {

  constructor(){}

  public fileBrowseHandler(file?: any){
    console.log(file);
    this.onChange(file.target.files)
  }

  fileContent: string = '';

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let result= '';
    let textArea = document.getElementById('jsonView');
    fileReader.onloadend = function(x) {
      console.log('reader',fileReader.result);
      result = fileReader.result as any;
      const object = JSON.parse(result);
      const string = JSON.stringify(object,null,4)
      textArea!.innerText = string;
    }

      console.log('result',result);

    //   console.log(file,textArea);

    fileReader.readAsText(file);
    // this.writeInTextArea(result)

  }

  public writeInTextArea(file: any){

  }



}
