export default function encodeFilter(filter: object): string {
  return btoa(JSON.stringify(filter));
}
