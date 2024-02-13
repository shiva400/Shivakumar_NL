import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Shivakumar NL'],
    ['DOB', '28/10/1998'],
    ['Work Exp', '2.2 Years'],
    ['Education', 'B.E (2020)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 2.2 years of experience in software industry.',
    // 'Worked as Head of Product Management in Google for various technologies (Google Search Engine, Google Drive, Chrome Browser).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Software Engineer of  MPHASIS',
  ];

  constructor() {}

  ngOnInit(): void {}
}
