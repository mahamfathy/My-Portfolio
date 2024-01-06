export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'burlywood');
  static readonly TYPESCRIPT = new Tag('Typescript', 'steelblue');
  static readonly API = new Tag('Api', 'salmon');
  static readonly GEOLOCATION = new Tag('Geolocation', 'yellowgreen');
  static readonly BOOTSTRAP = new Tag('Bootstrap', 'purple');
  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
