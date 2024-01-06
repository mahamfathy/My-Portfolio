import { Injectable } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { Project } from '../shared/models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Python Project',
      pictures: [
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
      ],
      projectLink: '//www.github.com',
      summary: 'Python project that analyzes stock market data.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.ANGULAR],
    },
    {
      id: 1,
      name: 'Sample Angular App',
      pictures: [
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
      ],
      projectLink: '//www.github.com',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP],
    },
    {
      id: 2,
      name: 'Sample .Net App',
      pictures: [
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
      ],
      projectLink: '//www.github.com',
      summary: 'Fullstack web app developed using React and ASP.NET',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.GEOLOCATION, Tag.ANGULAR, Tag.API],
    },
    {
      id: 3,
      name: 'Web API Project',
      pictures: [
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
      ],
      projectLink: '//google.com',
      summary: 'Web API Project that was developed for a class project.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.TYPESCRIPT, Tag.BOOTSTRAP],
    },
    {
      id: 4,
      name: 'Chrome Extension',
      pictures: [
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
      ],
      projectLink: '//github.com/mahamfathy',
      summary:
        'Developed a chrome extension that tracks the prices of furniture.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.API,Tag.TYPESCRIPT],
    },
    {
      id: 5,
      name: 'Mobile App',
      pictures: [
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
        'assets/458A6C2B-EA15-48F2-99A5-EE1EE674AE38.jpg',
      ],
      projectLink: '//www.github.com',
      summary:
        'Mobile app developed in java that tracks the departure and arrival of trains.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.BOOTSTRAP],
    },
  ];

  constructor() {}
  GetProjects() {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError(`There is no project matches the id${id}`);
    }
    return project;
 
  }
GetProjectByFilter(filterTags:Tag[]){
  let filterProject:Project[]=[]
  this.projects.forEach(function(project){
    let foundAll = true;
    filterTags.forEach(function(filterTag){
      if (project.tags.includes(filterTag)== false) {
        foundAll=false
      }})
      if (foundAll) {
        filterProject.push(project)
      }
  })
  return filterProject
}


}
