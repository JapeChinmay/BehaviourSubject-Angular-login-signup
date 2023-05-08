import { FormGroup } from '@angular/forms';
import { productdetails } from './productInterface';

export interface FormGroupAndUserCartData {
  formData: FormGroup;
  cartProducts: productdetails[];
}
