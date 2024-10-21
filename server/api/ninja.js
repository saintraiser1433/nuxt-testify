export default defineEventHandler(async (event) => {
  //handle query params
  const { name } = getQuery(event);
  const { age } = await readBody(event);
  const { databaseConfig } = useRuntimeConfig();
  console.log(event);
  return {
    message: `Hello, ${name}, My age is ${age} / ${databaseConfig}`,
  };
});
