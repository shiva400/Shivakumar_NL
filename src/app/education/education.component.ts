import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Visvesvaraya Technological University",
      course: 'B.E in Electronics and Communication Engineering',
      duration: '2016-2020',
      // score: '80%',
    },
    // {
    //   institute: 'Stanford University',
    //   course: 'M.S in Material Science',
    //   duration: '1993-1995',
    //   score: 'ECE',
    // },
    // {
    //   institute: 'IIT (Madras)',
    //   course: 'BTech in Metallurgical Engineering',
    //   duration: '1989-1993',
    //   score: '85%',
    // },
    // {
    //   institute: 'Vana Vani School',
    //   course: 'HSC',
    //   duration: '1988-1989',
    //   score: '80%',
    // },
    // {
    //   institute: 'Vana Vani School',
    //   course: 'SSC',
    //   duration: '1986-1988',
    //   score: '90%',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
