import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular JS',
      level: 'Intermidiate',
      rating: 65,
    },
    
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 65,
    },
    {
      name: 'Python',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'JCL, VSAM',
      level: 'Intermidiate',
      rating: 80,
    },

    {
      name: 'Cobol',
      level: 'Intermidiate',
      rating: 60,
    },

    {
      name: 'CI/CD',
      level: 'Expert',
      rating: 90,
    },

    {
      name: 'Oracal DBA 11g',
      level: 'Intermidiate',
      rating: 60,
    },


  ];
  constructor() {}

  ngOnInit(): void {}
}
