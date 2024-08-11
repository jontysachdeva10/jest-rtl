import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
        { name: 'Bruce Wayne' },
        { name: 'Wade Wilson' },
        { name: 'Logan' }
    ]);
  }),
];
