export function* genID(): Generator<number, number, number> {
    let i = 0;
    while (true) {
        yield i++;
    }
  }