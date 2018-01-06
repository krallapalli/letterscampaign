import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'fairness through awareness';
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  yourstory: string;
  printForm: FormGroup;
  today: number;
  recepients: any;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  content: any;
  note: string;

  display: boolean = false;

  //show overlay dialog for letters
  showDialog() {
    this.display = true;
  }

  //close overlay dialog for letters
  onClose() {
    this.display = false;
  }

  //on print action
  onPrint() {
    this.print();
  }

  constructor(private fb: FormBuilder, private http: Http) {
  }

  ngOnInit() {
    //Initialize letter recepients. load recepients to the object
    this.http.get('../assets/recepients.json')
      .subscribe(res => this.recepients = res.json());
    //Initialize campaign content. load content to the object
    this.http.get('../assets/content.json')
      .subscribe(res => this.content = res.json());
    //Initialize date
    this.today = Date.now();
    //Initialize form
    this.printForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      yourstory: ['', Validators.required]
    });
  }

  //On print invoke window.print()
  print(): void {
    window.print();
  }

}
