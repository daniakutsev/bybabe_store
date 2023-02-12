import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FbCreateResponse, IProduct} from "./product.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get(`${environment.FbFbUrl}/products.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object.keys(response)
          .map(key => ({
              ...response[key],
              id: key,
            })
          )

      }))
  }

  getById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.FbFbUrl}/products/${id}.json`).
      // @ts-ignore
      pipe(map((product: Product) => {
        return {
          ...product,
          id,
          date: new Date(product.date)
        }
      }))
  }

  create(product: IProduct): Observable<IProduct> {

    return this.http.post(`${environment.FbFbUrl}/products.json`, product).
      // @ts-ignore
      pipe(map((response: FbCreateResponse) => {
        return {
          ...product,
          id: response.name,
        }
      }))
  }

  update(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${environment.FbFbUrl}/products/${product.id}.json`, product)
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.FbFbUrl}/products/${id}.json`)
  }

}
