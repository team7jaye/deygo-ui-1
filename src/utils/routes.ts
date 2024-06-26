export class Routes {
  // ###===> AUTH ROUTES
  static login = "auth/login";
  static otp = "/otp";
  static signup = "/signup";

  // ###===> MAIN ROUTES
  static home = "/";
  static businesses = (category: string, id: string | number) =>
    `/${category}/${id}`;
  static details = (id: string | number) =>
    `${this.businesses}?BusinessId=${id}`;
}
