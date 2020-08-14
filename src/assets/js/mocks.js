export async function loadEmployees() {
  const resp = await fetch('https://5f35e9bb5b91f60016ca519d.mockapi.io/employees');

  if (resp.ok) {
    return await resp.json();
  } else {
    throw new Error('Произошла ошибка при загрузке данных');
  }
}