export default defineEventHandler((event) => {
    setResponseHeaders(event, {
      'X-Designed-By': 'Parth Sinha',
    });
  });
  