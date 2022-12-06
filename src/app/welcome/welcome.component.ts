import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService: string = ''
  constructor(private route: ActivatedRoute, public service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleResponse(response: any)
  {
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error: any)
  {
    this.welcomeMessageFromService = error.error.message
  }
}
