import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';
import { FormFieldComponent, FormField } from '../shared/form-field';

@Component({
  moduleId: module.id,
  selector: 'app-step1',
  templateUrl: 'step1.component.html',
  styleUrls: ['step1.component.css'],
  directives: [FormFieldComponent]
})
export class Step1Component implements OnInit {
  // TODO refactor into external file
  regions = {
    'East Midlands': {
      'Chesterfield': [221.35, 350.01, 425.01, 495.01, 650.00],
      'Derby': [255.59, 368.26, 449.99, 511.43, 674.99],
      'Grantham & Newark': [256.54, 329.28, 430.44, 481.10, 677.86],
      'Leicester': [258.93, 374.99, 475.02, 550.02, 708.97],
      'Lincoln': [255.93, 354.48, 435.48, 500.01, 643.14],
      'Lincolnshire Fens': [253.68, 383.60, 480.89, 562.58, 664.91],
      'North Nottingham': [253.81, 315.99, 404.02, 449.99, 631.93],
      'Northampton': [288.18, 434.74, 548.85, 607.64, 813.17],
      'Northants Central': [227.00, 358.05, 460.33, 536.98, 716.05],
      'Nottingham': [299.82, 394.98, 470.42, 522.69, 658.30],
      'Peaks & Dales': [295.17, 391.98, 481.10, 557.02, 730.00],
      'Wolds and Coast': [281.01, 325.89, 405.11, 481.10, 558.23]
    },
    'East of England': {
      'Bedford': [270.19, 447.65, 579.31, 679.51, 908.46],
      'Bury St Edmunds': [278.70, 444.30, 548.85, 653.35, 938.57],
      'Cambridge': [349.88, 547.72, 611.55, 731.96, 947.96],
      'Central Norfolk & Norwich': [267.01, 404.02, 506.31, 588.17, 800.00],
      'Chelmsford': [300.17, 547.50, 658.30, 805.13, 1007.75],
      'Colchester': [281.48, 449.99, 574.96, 700.02, 888.56],
      'Harlow & Stortford': [295.82, 579.31, 716.05, 860.84, 1215.32],
      'Huntingdon': [275.92, 455.77, 547.50, 653.52, 860.84],
      'Ipswich': [249.16, 393.85, 485.93, 562.58, 757.94],
      'Kings Lynn': [233.21, 393.85, 487.58, 562.58, 708.97],
      'Lowestoft & Great Yarmouth': [280.27, 374.69, 455.77, 511.43, 648.18],
      'Luton': [271.32, 485.93, 618.94, 737.30, 888.56],
      'Peterborough': [248.33, 399.98, 500.01, 574.96, 731.78],
      'South West Essex': [275.92, 557.02, 700.71, 818.34, 1158.66],
      'Southend': [290.18, 506.31, 658.30, 810.26, 1042.86],
      'Stevenage & North Herts': [313.03, 531.68, 675.12, 810.21, 1037.64]
    },
    'Greater London': {
      'Central London': [593.21, 1132.54, 1313.70, 1540.21, 1812.05],
      'Inner East London': [443.61, 1118.25, 1313.70, 1540.21, 1812.05],
      'Inner North London': [425.09, 1132.54, 1313.70, 1540.21, 1812.05],
      'Inner South East London': [413.58, 886.78, 1152.75, 1437.06, 1812.05],
      'Inner South West London': [410.10, 1102.91, 1313.70, 1540.21, 1812.05],
      'Inner West London': [480.32, 1056.68, 1313.70, 1540.21, 1812.05],
      'North West London': [379.77, 807.39, 1052.98, 1316.61, 1626.86],
      'Outer East London': [332.67, 789.96, 997.58, 1247.00, 1440.915],
      'Outer North East London': [326.54, 675.99, 836.98, 1053.29, 1359.06],
      'Outer North London': [393.85, 867.66, 1109.51, 1369.27, 1688.78],
      'Outer South East London': [366.17, 699.67, 860.84, 1053.29, 1359.06],
      'Outer South London': [358.31, 726.61, 914.98, 1212.93, 1496.41],
      'Outer South West London': [368.95, 911.50, 1219.27, 1464.17, 1812.05],
      'Outer West London': [358.09, 763.63, 968.81, 1184.08, 1381.79]
    },
    'North East England': {
      'Darlington': [257.59, 325.89, 394.98, 465.42, 648.18],
      'Durham': [282.44, 324.98, 374.99, 425.01, 599.99],
      'Northumberland': [285.26, 322.20, 379.99, 449.99, 599.99],
      'Sunderland': [195.54, 382.38, 425.01, 475.02, 599.99],
      'Teesside': [249.16, 364.04, 425.01, 495.36, 650.00],
      'Tyneside': [260.71, 394.98, 449.99, 500.01, 650.00]
    },
    'North West England': {
      'Barrow-in-Furness': [274.84, 338.93, 399.98, 480.02, 594.99],
      'Bolton and Bury': [211.48, 365.00, 430.00, 499.01, 625.02],
      'Central Greater Manchester': [292.00, 443.13, 521.34, 579.31, 810.26],
      'Central Lancs': [233.21, 388.73, 475.02, 550.02, 700.02],
      'East Cheshire': [308.08, 449.99, 565.01, 730.00, 1084.57],
      'East Lancs': [232.47, 347.75, 394.98, 454.99, 620.50],
      'Fylde Coast': [272.92, 369.35, 495.01, 564.88, 651.79],
      'Greater Liverpool': [251.02, 394.98, 455.77, 524.99, 677.86],
      'Kendal': [271.58, 421.10, 536.98, 632.97, 759.59],
      'Lancaster': [249.76, 394.98, 500.01, 574.96, 631.93],
      'North Cheshire': [212.35, 399.98, 475.02, 550.02, 759.59],
      'North Cumbria': [255.93, 350.01, 410.15, 490.01, 613.72],
      'Oldham & Rochdale': [242.90, 364.61, 425.01, 495.01, 650.00],
      'South Cheshire': [237.25, 368.65, 475.02, 550.02, 749.99],
      'Southern Greater Manchester': [251.33, 444.30, 557.02, 659.52, 869.44],
      'Southport': [301.26, 397.29, 524.99, 607.64, 749.99],
      'St Helens': [260.02, 350.01, 425.01, 495.01, 664.91],
      'Tameside & Glossop': [245.85, 374.99, 449.99, 550.02, 679.51],
      'West Cheshire': [280.18, 430.44, 524.99, 599.99, 810.26],
      'West Cumbria': [274.84, 344.32, 399.98, 455.77, 582.35],
      'West Pennine': [271.14, 338.93, 369.35, 430.35, 596.64],
      'Wigan': [250.16, 350.01, 418.14, 475.02, 650.00],
      'Wirral': [265.02, 374.99, 449.99, 550.02, 611.03]
    }
  }; // this will be fetched from the engine
     
  step1: AbstractControl;

  constructor(private fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
    
    let regionField = fm.getField('input_region')[0];
    regionField.options = Object.keys(this.regions);
    this.updateLocationFied(null);
  }
  
  updateLocationFied($event) {
    let regionControl = this.fm.getField('input_region')[1];
    if(regionControl.value) {
      let areaField = this.fm.getField('input_area')[0];
      areaField.options = Object.keys(this.regions[regionControl.value]);
    }
    
    if($event) {
      this.update($event.field, $event.value);
    }
  }
  
  update(field: FormField, value: any) {
    this.fm.valueUpdated(field, value)
  }
 
  ngOnInit() {
  }

}
