export default defineEventHandler((event) => {
    setResponseHeaders(event, {
      'X-Owner': 'Parth Sinha',
    });
  });
  