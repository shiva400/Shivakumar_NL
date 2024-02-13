import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Automation POC',
      technologies: ' HTML5, CSS3, JavaScript (ES6+),Angular JS',
      description: [
        'Developed front‑end features for Weekly Schedule Report generation.',
        'Leveraging Angular, enhancing my proficiency in the framework.',
        'Contributing to a seamless user interface.',
      ],
    },
    {
      title: 'ProfitProphet Predicts Profit: Using Multiple Linear Regression in Python with PyCharm',
      technologies: 'PYTHON & MACHiNE‑LEARNiNG',
      description: [
        'Worked as a team lead to build , ProfitProphet analyzes a dataset of 50 startups',
        'Got to learn about Multiple Linear Regression in Python with PyCharm',
        'Performed data‑driven viability analysis using PyCharm, considering diverse factors influencing startup viability. Facilitated data‑ driven decision‑making for investors in the dynamic startup ecosystem.',
      ],
    },
    {
      title: 'Real‑Time Digital Payment‑Based Automated Food Vending Machine',
      technologies: 'Python',
      description: [
        'Implemented, designed, fabricated, and assembled the hardware components.',
        'Developed Python code using Raspberry Pi Zero for efficient system operation.',
        'Integrated a UPI payment interface seamlessly through a GSM module.',
        'Successfully accomplished all proposed objectives.',
        'Resulted in improved overall performance and substantial cost savings.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
