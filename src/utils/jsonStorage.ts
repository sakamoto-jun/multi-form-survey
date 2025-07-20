import fs from "fs";

type Key = string | number;

export default class JsonStorage<Data> {
  private values: Record<Key, Data> = {};

  constructor(private readonly filename: string) {
    this.load();
  }

  load() {
    try {
      const data = fs.readFileSync(this.filename, "utf-8");
      this.values = JSON.parse(data) ?? {};
    } catch (error) {
      console.error("Failed to load data from file.", error);
    }
  }
  save() {
    try {
      fs.writeFileSync(this.filename, JSON.stringify(this.values));
    } catch (error) {
      console.error("Failed to save data to file", error);
    }
  }
  get(key: Key): Data | undefined {
    return this.values[key];
  }
  set(key: Key, value: Data) {
    this.values[key] = value;
    this.save();
  }
  getAll() {
    return this.values;
  }
}
