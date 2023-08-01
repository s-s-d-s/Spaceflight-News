import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BaseUnsubscribeComponent } from "@app/components/base-unsubscribe/base-unsubscribe.component";
import { FormControl } from "@angular/forms";
import { takeUntil } from "rxjs";

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesComponent extends BaseUnsubscribeComponent implements OnInit {
  searchControl: FormControl = new FormControl();

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(takeUntil(this.destroyed)).subscribe(() => console.log(this.searchControl.value))
  }
}
