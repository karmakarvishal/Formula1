import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img: string;
  imgDescription: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  imagesBasic = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', description: 'Image 1'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', description: 'Image 2'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', description: 'Image 3'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', description: 'Image 4'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', description: 'Image 5'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', description: 'Image 6'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', description: 'Image 7'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', description: 'Image 8'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', description: 'Image 9'
    }
  ];

  tiles: Tile[] = [
    { imgDescription: 'Image1', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image2', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image3', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image4', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image5', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image6', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image7', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image8', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image9', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image10', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image11', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image12', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image13', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image14', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image15', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
    { imgDescription: 'Image16', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg' },
  ];


  ngOnInit(): void {
  }

}
