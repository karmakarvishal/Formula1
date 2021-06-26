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
    { imgDescription: 'Image1', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/gallery/image2.img.1024.medium.jpg/1615472582711.jpg' },
    { imgDescription: 'Image2', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/gallery/image3.img.1024.medium.jpg/1615542187198.jpg' },
    { imgDescription: 'Image3', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/gallery/image11.img.1024.medium.jpg/1615542041703.jpg' },
    { imgDescription: 'Image4', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/gallery/image1.img.1024.medium.jpg/1615542616551.jpg' },
    { imgDescription: 'Image5', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/gallery/image4.img.1024.medium.jpg/1615548771873.jpg' },
    { imgDescription: 'Image6', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/gallery/image3.img.1024.medium.jpg/1615481825982.jpg' },
    { imgDescription: 'Image7', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/gallery/image1.img.1024.medium.jpg/1615541232656.jpg' },
    { imgDescription: 'Image8', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/gallery/image51.img.1024.medium.jpg/1582905824701.jpg' },
    { imgDescription: 'Image9', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/gallery/image5.img.1024.medium..png/1615480846514.png' },
    { imgDescription: 'Image10', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/gallery/image1.img.1024.medium.jpg/1594574372910.jpg' },
    { imgDescription: 'Image11', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/gallery/image51.img.1024.medium.jpg/1593959216311.jpg' },
    { imgDescription: 'Image12', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/gallery/image5.img.1024.medium.jpg/1594567069782.jpg' },
    { imgDescription: 'Image13', text: 'One', cols: 3, rows: 2, color: 'lightblue', img: 'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/gallery/image3.img.1024.medium.jpg/1594577126522.jpg' },
    { imgDescription: 'Image14', text: 'Two', cols: 3, rows: 2, color: 'lightgreen', img: 'https://www.formula1.com/content/fom-website/en/teams/Aston-Martin/_jcr_content/gallery/image61.img.1024.medium.jpg/1614942356336.jpg' },
    { imgDescription: 'Image15', text: 'Three', cols: 3, rows: 2, color: 'lightpink', img: 'https://www.formula1.com/content/fom-website/en/teams/Aston-Martin/_jcr_content/gallery/image1.img.1024.medium.jpg/1614784697198.jpg' },
    { imgDescription: 'Image16', text: 'Four', cols: 3, rows: 2, color: '#DDBDF1', img: 'https://www.formula1.com/content/fom-website/en/teams/Aston-Martin/_jcr_content/gallery/image5.img.1024.medium.jpg/1614784697611.jpg' },
  ];


  ngOnInit(): void {
  }

}
