import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Response, URLSearchParams } from "@angular/http";

@Injectable()
export class ConfigService {
  private _BASE_URI: string;
  private _API_URI: string;
  private _JSON_HEADER = new Headers({"Content-Type": "application/json", "Accept": "text/json"});
  private _MPFD_HEADER = new Headers({enctype: "multipart/form-data"});

  constructor() {
    this._BASE_URI = (window as any).url_base || "/";
    this._API_URI = `${this._BASE_URI}api/`;
  }

  /**
   * Obtiene el nombre del mes desde su numero de orden
   * @param id Numero del mes de 0 a 11 (segun javascript)
   */
  getMonthName(id: number): string {
    const months: string[] = [
      "Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Setiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    if (id > 0 && id < 13) {
      return months[id - 1];
    }
    return "fuera de rango";
  }

  /**
   * Obtiene la url base de las API's
   */
  getApiURI(): string {
   return this._API_URI;
  }

  /**
   * Obtiene la url base de la aplicación
   */
  getBaseURI(): string {
   return this._BASE_URI;
  }

  /**
   * Obtiene el tipo de cabecera segun un tipo de consulta
   * @param requestType tipo de consulta que se realiza
   */
  getHeaders(requestType: string): RequestOptions {
    let options: RequestOptions;
    switch (requestType) {
      case("json"):
        options = new RequestOptions({headers: this._JSON_HEADER});
        break;
      case("multipart"):
        options = new RequestOptions({headers: this._MPFD_HEADER});
        break;
      default:
        options = new RequestOptions({headers: this._JSON_HEADER});
    }
    return options;
  }

  /**
   * Parsea la respuesta de HTTP a formato JSON
   * @param res HTTP Response para parcear a JSON
   */
  jsonExtractData(res: Response): any {
    const body: any = res.json() || {};
    return body;
  }

  /**
   * Convierte un objeto en una cadena
   * {a: 'b', c: 1} -> a=b&c=1
   * @param data objeto a convertir
   */
  urlFormat(data: any): string {
    const urlSearchParams: URLSearchParams = new URLSearchParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        urlSearchParams.append(key, data[key]);
      }
    }
    return urlSearchParams.toString();
  }
}
