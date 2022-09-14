export abstract class APIService {
  abstract get<T>(url: string): Promise<T>;

  abstract post<T, D>(url: string, body?: D): Promise<T>;
}
